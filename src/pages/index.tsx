// Main Dependencies
import React from "react";
import { NextPage } from "next";

// Other Dependencies
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Chakra Dependecies
import { Button, Flex, Stack } from "@chakra-ui/react";
import { InputComponent } from "../components/Form/Input";

// Typing[TypeScript]
type HomePageTypeDataSignIn = {
  email: string;
  password: string;
};

// SCHEMA para informar os parâmetros dos campos existentes no formulário.
// Existem diversas "configurações" que podemos fazer para os mais diversos tipos de campo.
const signInFormSchemaValidation = yup.object().shape({
  email: yup.string().required("O e-mail é obrigatório.").email("E-mail inválido."),
  password: yup.string().required("A senha é obrigatória."),
});

const Home: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchemaValidation),
  });

  const { errors, isSubmitting } = formState;

  const handleSubmitSignIn: SubmitHandler<HomePageTypeDataSignIn> = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <title>Prisma.Dash | Prisma Systems</title>
      <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          backgroundColor="gray.800"
          padding="8"
          borderRadius="8"
          flexDirection="column"
          onSubmit={handleSubmit(handleSubmitSignIn)}
        >
          <Stack spacing="4">
            <InputComponent
              name="email"
              type="email"
              label="E-mail"
              errorMessage={errors.email}
              {...register("email")}
            />

            <InputComponent
              name="password"
              type="password"
              label="Password"
              errorMessage={errors.password}
              {...register("password")}
            />
          </Stack>

          <Button type="submit" marginTop="6" colorScheme="orange" isLoading={isSubmitting}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
