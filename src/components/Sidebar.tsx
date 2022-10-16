import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

export default function Sidebar() {
  return (
    <Box as="aside" mr="8" w="64">
      <Stack align="flex-start" spacing="12">
        <Box>
          <Text color="gray.400" fontSize="small" fontWeight="bold">
            GERAL
          </Text>

          <Stack align="stretch" mt="8" spacing="4">
            <Link alignItems="center" display="flex">
              <Icon as={RiDashboardLine} fontSize="20" />

              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link alignItems="center" display="flex">
              <Icon as={RiContactsLine} fontSize="20" />

              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text color="gray.400" fontSize="small" fontWeight="bold">
            AUTOMAÇÃO
          </Text>

          <Stack align="stretch" mt="8" spacing="4">
            <Link alignItems="center" display="flex">
              <Icon as={RiInputMethodLine} fontSize="20" />

              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>

            <Link alignItems="center" display="flex">
              <Icon as={RiGitMergeLine} fontSize="20" />

              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
