// Main Dependencies
import React from "react";
import { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";

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

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarFloatingProvider>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarFloatingProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
