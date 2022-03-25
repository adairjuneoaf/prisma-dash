// Main Dependencies
import React from "react";
import Link from "next/link";

//Chakra Dependencies
import { Text } from "@chakra-ui/react";

const LogoComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Link href={"/dashboard"} passHref>
        <Text
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          cursor="pointer"
          width="64"
        >
          prisma
          <Text as="span" color="orange.500">
            dash
          </Text>
        </Text>
      </Link>
    </React.Fragment>
  );
};

export default LogoComponent;
