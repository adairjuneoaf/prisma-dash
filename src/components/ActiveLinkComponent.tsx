// Main Dependencies
import React, { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { rest } from "lodash";

// Typings[TypeScript]
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, ...props }) => {
  const { asPath } = useRouter();

  let isLinkActive: boolean = false;

  if (asPath === props.href || asPath.includes(String(props.href))) {
    isLinkActive = true;
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isLinkActive ? "orange.500" : "gray.200",
      })}
    </Link>
  );
};

export default ActiveLink;
