// Main Dependencies
import { createContext, ReactNode } from "react";

// Chakra Dependencies
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";

// Typings[TypeScript]
interface SidebarFloatingContextProviderProps {
  children: ReactNode;
}

interface SidebarFloatingContextProps extends UseDisclosureReturn {}

const SidebarFloatingContext = createContext({} as SidebarFloatingContextProps);

const SidebarFloatingProvider = ({
  children,
}: SidebarFloatingContextProviderProps) => {
  const disclosure = useDisclosure();

  return (
    <SidebarFloatingContext.Provider value={disclosure}>
      {children}
    </SidebarFloatingContext.Provider>
  );
};

export { SidebarFloatingProvider, SidebarFloatingContext };
