import { Box, Button, HStack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export default function Pagination() {
  return (
    <HStack align="center" justify="space-between" mt="8" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem pageNumber={1} isCurrent={true} />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
      </HStack>
    </HStack>
  );
}
