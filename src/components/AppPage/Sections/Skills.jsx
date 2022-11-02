import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { IconTag } from "@tabler/icons";
import React from "react";

const Skills = ({ handleFormChange }) => {
  return (
    <Flex
      direction="column"
      mt="7"
      p="4"
      border="1px solid #e2e8f0"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Flex w="full" align="center" justify="space-between">
        <Text fontWeight="bold" fontSize="xl">
          Skills
        </Text>
      </Flex>
      <Box mt="4" gap="5">
        <Flex direction="column" gap="5" mt="3">
          <InputGroup>
            <InputLeftAddon
              border="none"
              children={<Icon as={IconTag} h="5" w="5" />}
            />
            <Input
              type="text"
              variant="filled"
              placeholder="React, Node, etc..."
              onChange={(e) => handleFormChange(e, "skills")}
            />
          </InputGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Skills;
