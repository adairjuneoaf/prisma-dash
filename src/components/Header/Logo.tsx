// Main Dependencies
import React from "react";

//Chakra Dependencies
import { Text } from "@chakra-ui/react";

const LogoComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
      >
        prisma
        <Text as="span" color="orange.500">
          dash
        </Text>
      </Text>
    </React.Fragment>
  );
};

export default LogoComponent;
