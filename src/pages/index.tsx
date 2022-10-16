import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
        maxWidth={360}
        p="8"
        w="100%"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />

          <Input type="password" name="password" label="Senha" />
        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
