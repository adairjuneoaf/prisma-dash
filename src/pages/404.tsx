// Main Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Chakra Dependencies
import { Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";

// Components
import HeaderComponent from "../components/Header";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Erro 404 | prisma.dash</title>
      </Head>
      <Flex flexDirection="column" width="100vw" height="100vh">
        <Flex
          width="100%"
          height="100%"
          padding="8"
          maxWidth={1480}
          marginX="auto"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading fontSize="9xl" lineHeight="0.8" color="orange.500">
            404
          </Heading>
          <Text fontSize="4xl" fontWeight="bold" color="gray.200">
            PAGE NOT FOUND
          </Text>
          <Link href={"/dashboard"} passHref>
            <ChakraLink marginTop="6">Voltar para página principal</ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Custom404;
