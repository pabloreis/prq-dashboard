import { Box, Flex } from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex my="6" mx="auto" px="6" maxWidth={1480} w="100%">
        <Sidebar />

        <Box borderRadius={8} bg="gray.800" flex="1" p="8"></Box>
      </Flex>
    </Box>
  );
}
