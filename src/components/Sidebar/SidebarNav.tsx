// Main Dependencies
import React from "react";

// Styled Dependencies
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

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
          <NavLinkComponent icon={RiDashboardLine} href="/dashboard">
            Dashboard
          </NavLinkComponent>
          <NavLinkComponent icon={RiContactsLine} href="/users">
            Usuários
          </NavLinkComponent>
        </NavSectionComponent>

        <NavSectionComponent title="AUTOMAÇÃO">
          <NavLinkComponent icon={RiInputMethodLine} href="/forms">
            Formulários
          </NavLinkComponent>
          <NavLinkComponent icon={RiGitMergeLine} href="/automation">
            Automação
          </NavLinkComponent>
        </NavSectionComponent>
      </Stack>
    </React.Fragment>
  );
};

export default SidebarNavComponent;
