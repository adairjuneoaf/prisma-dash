// Main Dependencies
import React, { ForwardRefRenderFunction, forwardRef } from "react";

// Other Dependecies
import { FieldError } from "react-hook-form";

// Chakra Dependecies
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

// Typings[TypeScript]
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  errorMessage?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, errorMessage = null, ...props },
  ref
) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputChakra
        {...props}
        id={name}
        name={name}
        focusBorderColor="orange.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{ backgroundColor: "gray.900" }}
        size="lg"
        ref={ref}
      />
      {errorMessage && <FormErrorMessage>{errorMessage?.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputComponent = forwardRef(InputBase);
