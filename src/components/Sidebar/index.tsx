// Main Dependencies
import React, { useContext } from "react";

// UseContexts API
import { SidebarFloatingContext } from "../../contexts/SidebarFloatingContext";

// Chakra Dependencies
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";

// Components
import SidebarNavComponent from "./SidebarNav";

const SidebarComponent: React.FC = () => {
  const isSidebarFloating = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useContext(SidebarFloatingContext);

  if (isSidebarFloating) {
    return (
      <Drawer isFullHeight={true} isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay background="gray.800" padding="4" width="256px">
          <DrawerCloseButton marginTop="6" />
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <SidebarNavComponent />
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNavComponent />
    </Box>
  );
};

export default SidebarComponent;
