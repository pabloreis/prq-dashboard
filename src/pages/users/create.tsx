import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/form/Input';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex my="6" mx="auto" px="6" maxWidth={1480} w="100%">
        <Sidebar />

        <Box borderRadius={8} bg="gray.800" flex="1" p="8">
          <Heading fontWeight="normal" size="lg">
            Criar usuário
          </Heading>

          <Divider borderColor="gray.700" my="6" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirmation"
                label="Confirmaçao da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" mt="8">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
