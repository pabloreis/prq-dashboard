import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Pablo Reis</Text>
        <Text color="gray.300" fontSize="small">
          pabloreiss@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Pablo Reis"
        src="https://github.com/pabloreis.png"
      />
    </Flex>
  );
}
