// Main Dependencies
import { createContext, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

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

  const { route } = useRouter();

  useEffect(() => {
    if (disclosure.isOpen) {
      disclosure.onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <SidebarFloatingContext.Provider value={disclosure}>
      {children}
    </SidebarFloatingContext.Provider>
  );
};

export { SidebarFloatingProvider, SidebarFloatingContext };
