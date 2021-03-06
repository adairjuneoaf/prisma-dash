// Main Dependencies
import React from "react";

//Chakra Dependencies
import { Button } from "@chakra-ui/react";

// Typing[TypeScript]
interface ItemPaginationComponentProps {
  numberPage: number;
  onPageChange: (page: number) => void;
  isCurrentPage?: boolean;
}

const ItemPaginationComponent: React.FC<ItemPaginationComponentProps> = ({
  numberPage,
  onPageChange,
  isCurrentPage = false,
}) => {
  if (isCurrentPage) {
    return (
      <React.Fragment>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="orange"
          disabled={true}
          _disabled={{ backgroundColor: "orange.500", cursor: "default" }}
        >
          {numberPage}
        </Button>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        backgroundColor="gray.700"
        _hover={{ backgroundColor: "gray.500" }}
        onClick={() => onPageChange(numberPage)}
      >
        {numberPage}
      </Button>
    </React.Fragment>
  );
};

export default ItemPaginationComponent;
