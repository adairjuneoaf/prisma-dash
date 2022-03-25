// Main Dependencies
import React, { ElementType } from "react";
import Link from "next/link";

//Chakra Dependencies
import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import ActiveLink from "../ActiveLinkComponent";

// Typing[TypeScript]
interface NavLinkComponentProps extends LinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

const NavLinkComponent: React.FC<NavLinkComponentProps> = ({
  icon,
  href,
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <ActiveLink href={href} passHref>
        <ChakraLink display="flex" alignItems="center" {...props}>
          <Icon as={icon} fontSize="20" />
          <Text marginLeft="4" fontWeight="medium">
            {children}
          </Text>
        </ChakraLink>
      </ActiveLink>
    </React.Fragment>
  );
};

export default NavLinkComponent;
