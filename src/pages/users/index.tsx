// Main Dependencies
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

// Styled Dependencies
import { RiAddLine, RiCloseLine, RiPencilLine } from "react-icons/ri";

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
} from "@chakra-ui/react";

// Components
import HeaderComponent from "../../components/Header";
import SidebarComponent from "../../components/Sidebar";
import PaginationComponent from "../../components/Pagination";

const PageUsers: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
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
                <Tr>
                  {isWideVersion && (
                    <Td paddingX="6">
                      <Checkbox colorScheme="orange" />
                    </Td>
                  )}
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Adair Juneo</Text>
                      <Text fontSize="sm" color="gray.300">
                        adair_juneo@hotmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 de Março, 2022</Td>}
                  {isWideVersion && (
                    <Td>
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

                <Tr>
                  {isWideVersion && (
                    <Td paddingX="6">
                      <Checkbox colorScheme="orange" />
                    </Td>
                  )}
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Mariana Müller</Text>
                      <Text fontSize="sm" color="gray.300">
                        mariana.muller@hotmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 de Março, 2022</Td>}
                  {isWideVersion && (
                    <Td width="64px">
                      <HStack spacing="4">
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

                <Tr>
                  {isWideVersion && (
                    <Td paddingX="6">
                      <Checkbox colorScheme="orange" />
                    </Td>
                  )}
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Arnaldo César</Text>
                      <Text fontSize="sm" color="gray.300">
                        arnaldo.cesar.filho@hotmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 de Março, 2022</Td>}
                  {isWideVersion && (
                    <Td width="64px">
                      <HStack spacing="4">
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
              </Tbody>
            </Table>

            <PaginationComponent />
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default PageUsers;
