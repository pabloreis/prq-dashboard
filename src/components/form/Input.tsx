import {
  Input as ChackraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { InputHTMLAttributes } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...props }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChackraInput
        name={name}
        id={name}
        bgColor="gray.900"
        focusBorderColor="pink.500"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        {...props}
      />
    </FormControl>
  );
}
