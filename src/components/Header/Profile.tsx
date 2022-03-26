// Main Dependencies
import React from "react";

// Chakra Dependencies
import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

// Typings[TypeScript]
interface ProfileComponentProps {
  showProfileData: boolean;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ showProfileData }) => {
  return (
    <React.Fragment>
      <Flex alignItems="center">
        {showProfileData && (
          <Box marginRight="4" textAlign="right">
            <Text>Adair Juneo</Text>
            <Text color="gray.300" fontSize="small">
              adair_juneo@hotmail.com
            </Text>
          </Box>
        )}
        <Avatar size="md" name="Adair Juneo" src="https://github.com/adairjuneoaf.png" />
      </Flex>
    </React.Fragment>
  );
};

export default ProfileComponent;
