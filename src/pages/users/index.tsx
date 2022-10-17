import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex my="6" mx="auto" px="6" maxWidth={1480} w="100%">
        <Sidebar />

        <Box borderRadius={8} bg="gray.800" flex="1" p="8">
          <Flex align="center" justify="space-between" mb="8">
            <Heading fontWeight="normal" size="lg">
              Usuários
            </Heading>

            <Button
              as="a"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              size="sm"
              fontSize="sm"
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color="gray.300" px="6" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pablo Reis</Text>
                    <Text color="gray.300" fontSize="sm">
                      pabloreiss@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>17 de outubro de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    size="sm"
                    fontSize="sm"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pablo Reis</Text>
                    <Text color="gray.300" fontSize="sm">
                      pabloreiss@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>17 de outubro de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    size="sm"
                    fontSize="sm"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pablo Reis</Text>
                    <Text color="gray.300" fontSize="sm">
                      pabloreiss@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>17 de outubro de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    size="sm"
                    fontSize="sm"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
