// Main Dependencies
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

// Styled Dependencies
import { RiCloseLine, RiSaveLine } from "react-icons/ri";

// Components
import HeaderComponent from "../../components/Header";
import SidebarComponent from "../../components/Sidebar";
import InputComponent from "../../components/Form/Input";

// Chakra Dependencies
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const CreateUserPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Controle de usuários | prisma.dash</title>
      </Head>
      <Box>
        <HeaderComponent />

        <Flex
          width="100%"
          marginY="6"
          maxWidth={1480}
          marginX="auto"
          paddingX="6"
        >
          <SidebarComponent />

          <Box
            flex="1"
            borderRadius="8"
            backgroundColor="gray.800"
            padding={["6", "8"]}
          >
            <Heading size="lg" fontWeight="bold">
              Criar novo usuário
            </Heading>

            <Divider marginY="6" borderColor="gray.700" />

            <VStack spacing={["6", "8"]}>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <InputComponent name="name" label="Nome completo" />
                <InputComponent name="email" label="E-mail" />
              </SimpleGrid>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <InputComponent name="password" type="password" label="Senha" />
                <InputComponent
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                />
              </SimpleGrid>
            </VStack>

            <Flex marginTop={["6", "8"]} justifyContent="flex-end">
              <HStack spacing="4">
                <Link href={"/users"} passHref>
                  <Button
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiCloseLine} fontSize="20" />}
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button
                  colorScheme="orange"
                  leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default CreateUserPage;
