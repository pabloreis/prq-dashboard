import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text color="gray.400" fontSize="small" fontWeight="bold">
        {title}
      </Text>

      <Stack align="stretch" mt="8" spacing="4">
        {children}
      </Stack>
    </Box>
  );
}
