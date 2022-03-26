// Main Dependencies
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

// Other Dependencies
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Styled Dependencies
import { RiCloseLine, RiSaveLine } from "react-icons/ri";

// Components
import HeaderComponent from "../../components/Header";
import SidebarComponent from "../../components/Sidebar";
import { InputComponent } from "../../components/Form/Input";

// Chakra Dependencies
import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";

// Typings[TypeScript]
type TypeSubmitDataCreateNewUser = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchemaValidation = yup.object().shape({
  name: yup.string().required("O nome é obrigatório.").min(8, "O nome precisa ter no mínimo 8 caracteres."),
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
  password: yup.string().required("A senha é obrigatória.").min(6, "A senha precisa ter no mínimo 6 caracteres."),
  password_confirmation: yup.string().oneOf([null, yup.ref("password")], "As senhas precisam ser iguais."),
});

const CreateUserPage: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchemaValidation),
  });

  const { errors, isSubmitting } = formState;

  const handleSubmitNewUser: SubmitHandler<TypeSubmitDataCreateNewUser> = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Controle de usuários | prisma.dash</title>
      </Head>
      <Box>
        <HeaderComponent />

        <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
          <SidebarComponent />

          <Box as="form" flex="1" borderRadius="8" backgroundColor="gray.800" padding={["6", "8"]}>
            <Heading size="lg" fontWeight="bold">
              Criar novo usuário
            </Heading>

            <Divider marginY="6" borderColor="gray.700" />

            <VStack spacing={["6", "8"]}>
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <InputComponent name="name" label="Nome completo" {...register("name")} errorMessage={errors.name} />
                <InputComponent name="email" label="E-mail" {...register("email")} errorMessage={errors.email} />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <InputComponent
                  name="password"
                  type="password"
                  label="Senha"
                  {...register("password")}
                  errorMessage={errors.password}
                />
                <InputComponent
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  {...register("password_confirmation")}
                  errorMessage={errors.password_confirmation}
                />
              </SimpleGrid>
            </VStack>

            <Flex marginTop={["6", "8"]} justifyContent="flex-end">
              <HStack spacing="4">
                <Link href={"/users"} passHref>
                  <Button colorScheme="whiteAlpha" leftIcon={<Icon as={RiCloseLine} fontSize="20" />}>
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  onClick={handleSubmit(handleSubmitNewUser)}
                  colorScheme="orange"
                  leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
                  isLoading={isSubmitting}
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
