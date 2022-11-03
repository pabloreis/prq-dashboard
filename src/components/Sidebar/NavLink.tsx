import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...props }: NavLinkProps) {
  return (
    <Link alignItems="center" display="flex" {...props}>
      <Icon as={icon} fontSize="20" />

      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
