// Main Dependencies
import React from "react";

// Styled Dependencies
import { RiSearchLine } from "react-icons/ri";

// Chakra Dependencies
import { Flex, Icon, Input, Text } from "@chakra-ui/react";

const HeaderComponent: React.FC = () => {
  return (
    <Flex
      as="header"
      width={"100%"}
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      padding="6"
      alignItems="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        prisma
        <Text
          as="span"
          fontSize="5xl"
          color="orange.500"
          letterSpacing="tighter"
        >
          .
        </Text>
        dash
      </Text>

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
    </Flex>
  );
};

export default HeaderComponent;
