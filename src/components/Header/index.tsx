// Main Dependencies
import React, { useContext } from "react";

// UseContext API
import { SidebarFloatingContext } from "../../contexts/SidebarFloatingContext";

// Chakra Dependencies
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

// Components
import LogoComponent from "./Logo";
import ProfileComponent from "./Profile";
import SearchBoxComponent from "./SearchBox";
import BarActionsUserComponent from "./BarActionsUser";
import { RiMenuLine } from "react-icons/ri";

const HeaderComponent: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useContext(SidebarFloatingContext);

  return (
    <Flex
      as="header"
      width={"100%"}
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      padding="6"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          display="flex"
          alignItems="center"
          aria-label="Open navigation."
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="3"
        />
      )}

      <LogoComponent />

      {isWideVersion && <SearchBoxComponent />}

      <Flex alignItems="center" marginLeft="auto">
        <BarActionsUserComponent />

        <ProfileComponent showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default HeaderComponent;
