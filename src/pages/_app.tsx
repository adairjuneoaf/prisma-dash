// Main Dependencies
import React from "react";
import { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// "Back-end" Dependencies
import { makeServer } from "../services/miragejs";

// ContextsProvider
import { SidebarFloatingProvider } from "../contexts/SidebarFloatingContext";

// Chakra Dependencies
import { ChakraProvider } from "@chakra-ui/react";

// Style Dependencies
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Caso ocorra algum erro com a busca do dados, ocorre 2 "re-tentativas" de busca com um certo delay entre cada uma.
      staleTime: 1000 * 60 * 60, // 1 Hora de "StaleTime" para todas as queries do App. Caso seja necessário, é possível diminuir o tempo em alguma determinada QUERY.
      refetchInterval: 1000 * 60 * 30, // 30 Minutos Refetch automático para verificar se existe novos dados a serem exibidos.
      refetchOnReconnect: true, // Refetch de dados caso ocorra perda de conexão no App, após a reconexão sucedida ocorre um refetch.
      refetchOnWindowFocus: true, // Refetch de dados habilitado quando o usuário retorna o foco para a tela, após um longo período sem visitá-la.
    },
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarFloatingProvider>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarFloatingProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
