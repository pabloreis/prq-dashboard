import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  pageNumber,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        colorScheme="pink"
        disabled
        fontSize="xs"
        size="sm"
        w="4"
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      bg="gray.700"
      disabled
      fontSize="xs"
      size="sm"
      w="4"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {pageNumber}
    </Button>
  );
}
