import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const SettingsPage = () => {
  return (
    <Flex w="full" justify="center" p="4">
      <Flex w="full" maxW="7xl">
        <Heading as="h2">Settings</Heading>
      </Flex>
    </Flex>
  );
};

export default SettingsPage;
