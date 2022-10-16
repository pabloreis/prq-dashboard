import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      h="20"
      mx="auto"
      mt="4"
      p="6"
      maxWidth={1480}
      w="100"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashPRQ
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

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
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          color="gray.300"
          borderColor="gray.700"
          borderRightWidth={1}
          mx="8"
          pr="8"
          py="1"
          spacing="8"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserAddLine} />
        </HStack>

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
      </Flex>
    </Flex>
  );
}
