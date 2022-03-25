// Main Dependencies
import React from "react";

// Styled Dependencies
import { RiSearchLine } from "react-icons/ri";

//Chakra Dependencies
import { Flex, Input, Icon } from "@chakra-ui/react";

const SearchBoxComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </React.Fragment>
  );
};

export default SearchBoxComponent;
