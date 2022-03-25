// Main Dependencies
import React from "react";
import { AppProps } from "next/app";

// ContextsProvider
import { SidebarFloatingProvider } from "../contexts/SidebarFloatingContext";

// Chakra Dependencies
import { ChakraProvider } from "@chakra-ui/react";

// Style Dependencies
import { theme } from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SidebarFloatingProvider>
      <ChakraProvider resetCSS={true} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarFloatingProvider>
  );
};

export default MyApp;
