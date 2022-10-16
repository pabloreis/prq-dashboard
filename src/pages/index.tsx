import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

export default function Home() {
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
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>

            <Input
              type="email"
              id="email"
              name="email"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>

            <Input
              type="password"
              name="password"
              id="password"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
