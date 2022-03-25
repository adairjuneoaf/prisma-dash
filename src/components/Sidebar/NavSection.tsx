// Main Dependencies
import React, { ReactNode } from "react";

//Chakra Dependencies
import { Box, Stack, Text } from "@chakra-ui/react";

// Typings[TypeScript]
interface NavSectionComponentProps {
  title: string;
  children: ReactNode;
}

const NavSectionComponent: React.FC<NavSectionComponentProps> = ({
  title,
  children,
}) => {
  return (
    <React.Fragment>
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          {title}
        </Text>
        <Stack spacing="4" marginTop="6" alignItems="stretch">
          {children}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default NavSectionComponent;
