// Main Dependencies
import React from "react";
import { NextPage } from "next";

// Chakra Dependecies
import { Button, Flex, Stack } from "@chakra-ui/react";
import InputComponent from "../components/Form/Input";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <title>Prisma.Dash | Prisma Systems</title>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          backgroundColor="gray.800"
          padding="8"
          borderRadius="8"
          flexDirection="column"
        >
          <Stack spacing="4">
            <InputComponent name="email" type="email" label="E-mail" />

            <InputComponent name="password" type="password" label="Password" />
          </Stack>

          <Button type="submit" marginTop="6" colorScheme="orange">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
