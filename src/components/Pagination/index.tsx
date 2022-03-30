// Main Dependencies
import React from "react";

// Chakra Dependencies
import { Stack, Box, HStack, Text } from "@chakra-ui/react";
import ItemPaginationComponent from "./ItemPagination";

// Typings[TypeScript]
interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage); // 200 / 10 = 20

  const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];

  const nextPages =
    currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];

  return (
    <Stack
      direction={["column", "row"]}
      marginTop="8"
      spacing="6"
      flexDirection={["column", "row"]}
      justifyContent={["center", "space-between"]}
      alignItems="center"
    >
      <Box>
        Total&nbsp;de&nbsp;
        <strong>{totalCountOfRegisters}&nbsp;registros</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <ItemPaginationComponent onPageChange={onPageChange} numberPage={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color={"gray.500"} width={"8"} textAlign={"center"}>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <ItemPaginationComponent onPageChange={onPageChange} key={page} numberPage={page} />;
          })}

        <ItemPaginationComponent onPageChange={onPageChange} isCurrentPage={true} numberPage={currentPage} />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <ItemPaginationComponent onPageChange={onPageChange} key={page} numberPage={page} />;
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color={"gray.500"} width={"8"} textAlign={"center"}>
                ...
              </Text>
            )}
            <ItemPaginationComponent onPageChange={onPageChange} numberPage={lastPage} />
          </>
        )}

        {/* <ItemPaginationComponent isCurrentPage={true} numberPage={1} />
        <ItemPaginationComponent numberPage={2} />
        <ItemPaginationComponent numberPage={3} />
        <ItemPaginationComponent numberPage={4} />
        <ItemPaginationComponent numberPage={5} /> */}
      </HStack>
    </Stack>
  );
};

export default PaginationComponent;
