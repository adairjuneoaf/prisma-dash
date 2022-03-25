// Main Dependencies
import React from "react";

// Chakra Dependencies
import { Button, HStack, Box } from "@chakra-ui/react";
import ItemPaginationComponent from "./ItemPagination";

const PaginationComponent: React.FC = () => {
  return (
    <HStack
      marginTop="8"
      spacing="6"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <strong>0</strong>&nbsp;-&nbsp;<strong>10</strong>&nbsp;de&nbsp;
        <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <ItemPaginationComponent isCurrentPage={true} numberPage={1} />
        <ItemPaginationComponent numberPage={2} />
        <ItemPaginationComponent numberPage={3} />
        <ItemPaginationComponent numberPage={4} />
        <ItemPaginationComponent numberPage={5} />
      </HStack>
    </HStack>
  );
};

export default PaginationComponent;
