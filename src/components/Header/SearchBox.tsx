import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      alignSelf="center"
      bgColor="gray.800"
      borderRadius="full"
      color="gray.200"
      flex="1"
      ml="6"
      py="4"
      px="8"
      position="relative"
      maxWidth={400}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        mr="4"
        px="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
