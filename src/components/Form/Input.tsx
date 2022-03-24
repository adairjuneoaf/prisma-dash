// Main Dependencies
import React from "react";

// Chakra Dependecies
import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

// Typings[TypeScript]
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputComponent: React.FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <FormControl>
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
      />
    </FormControl>
  );
};

export default InputComponent;
