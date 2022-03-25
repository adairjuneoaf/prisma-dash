// Main Dependencies
import React from "react";

// Styled Dependencies
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

// Chakra Dependencies
import { Box, Stack } from "@chakra-ui/react";

// Components
import NavLinkComponent from "./NavLink";
import NavSectionComponent from "./NavSection";

const SidebarNavComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Stack spacing="8" align="flex-start">
        <NavSectionComponent title="GERAL">
          <NavLinkComponent icon={RiDashboardLine}>Dashboard</NavLinkComponent>
          <NavLinkComponent icon={RiContactsLine}>Usuários</NavLinkComponent>
        </NavSectionComponent>

        <NavSectionComponent title="AUTOMAÇÃO">
          <NavLinkComponent icon={RiInputMethodLine}>
            Formulários
          </NavLinkComponent>
          <NavLinkComponent icon={RiGitMergeLine}>Automação</NavLinkComponent>
        </NavSectionComponent>
      </Stack>
    </React.Fragment>
  );
};

export default SidebarNavComponent;
