// Main Dependencies
import React, { ElementType } from "react";

//Chakra Dependencies
import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";

// Typing[TypeScript]
interface NavLinkComponentProps extends LinkProps {
  icon: ElementType;
  children: string;
}

const NavLinkComponent: React.FC<NavLinkComponentProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <Link display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    </React.Fragment>
  );
};

export default NavLinkComponent;
