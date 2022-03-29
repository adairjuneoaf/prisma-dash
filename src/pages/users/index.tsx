// Main Dependencies
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import { useQuery } from "react-query";

// Styled Dependencies
import { RiAddLine, RiCloseLine, RiPencilLine } from "react-icons/ri";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Chakra Dependencies
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Text,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";

// Components
import HeaderComponent from "../../components/Header";
import SidebarComponent from "../../components/Sidebar";
import PaginationComponent from "../../components/Pagination";

// Typings[TypeScript]
type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

interface UserPropsFetch {
  users: Array<User>;
}

const PageUsers: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    const users = data.users.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: format(new Date(user.created_at), "dd/MM/yyyy", {
          locale: ptBR,
        }),
      };
    });

    return users;
  });

  return (
    <React.Fragment>
      <Head>
        <title>Controle de usuários | prisma.dash</title>
      </Head>
      <Box>
        <HeaderComponent />

        <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
          <SidebarComponent />

          <Box flex="1" borderRadius="8" backgroundColor="gray.800" padding={["4", "8"]}>
            <Flex marginBottom="8" justifyContent="space-between" alignItems="center">
              <Heading size="lg" fontWeight="bold">
                Usuários
              </Heading>
              <Link href={"/users/create"} passHref>
                <Button
                  as="a"
                  size="md"
                  fontSize="sm"
                  colorScheme="orange"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  cursor="pointer"
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            {isLoading ? (
              <Flex justifyContent={"center"}>
                <Spinner color={"orange.500"} size={"lg"} />
              </Flex>
            ) : error ? (
              <Flex justifyContent={"center"}>
                <Text>Error</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      {isWideVersion && (
                        <Th paddingX="6" color="gray.300" width="8">
                          <Checkbox isReadOnly={true} defaultChecked={true} colorScheme="orange" cursor="normal" />
                        </Th>
                      )}
                      <Th color="gray.300">Usuário</Th>
                      {isWideVersion && <Th color="gray.300">Data de cadastro</Th>}
                      {isWideVersion && <Th color="gray.300">Ações</Th>}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((user: User) => {
                      return (
                        <Tr key={user.id}>
                          {isWideVersion && (
                            <Td paddingX="6">
                              <Checkbox colorScheme="orange" />
                            </Td>
                          )}
                          <Td width={"60%"}>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td width={"40%"}>{user.created_at}</Td>}
                          {isWideVersion && (
                            <Td width={"auto"}>
                              <HStack spacing="4" alignItems="flex-end">
                                <Button
                                  as="a"
                                  size="sm"
                                  fontSize="sm"
                                  cursor="pointer"
                                  colorScheme="blue"
                                  title="Editar usuário"
                                >
                                  <Icon as={RiPencilLine} fontSize="20" />
                                </Button>
                                <Button
                                  as="a"
                                  size="sm"
                                  fontSize="sm"
                                  cursor="pointer"
                                  colorScheme="red"
                                  title="Excluir usuário"
                                >
                                  <Icon as={RiCloseLine} fontSize="20" />
                                </Button>
                              </HStack>
                            </Td>
                          )}
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
                <PaginationComponent />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default PageUsers;
