// Main Dependencies
import React from "react";

// Styled Dependencies
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

// Chakra Dependencies
import { HStack, Icon } from "@chakra-ui/react";

const BarActionsUserComponent: React.FC = () => {
  return (
    <React.Fragment>
      <HStack
        spacing={["6", "8"]}
        marginX={["6", "8"]}
        paddingRight={["6", "8"]}
        paddingY="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
    </React.Fragment>
  );
};

export default BarActionsUserComponent;
