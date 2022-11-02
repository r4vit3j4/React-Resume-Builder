import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

const BasicInfo = ({ handleFormChange, resumeDetails }) => {
  return (
    /* Basic Info */
    <Flex
      direction="column"
      border="1px solid #e2e8f0"
      borderRadius="lg"
      p="4"
      boxShadow="sm"
    >
      <Text fontWeight="bold" fontSize="lg">
        Basic Info
      </Text>
      <Flex direction={["column", "column", "row"]} mt="5" gap="5">
        <Box>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            name="fullName"
            value={resumeDetails.basic.name}
            onChange={(e) => handleFormChange(e, "name")}
            required
            placeholder="Ravi Teja"
            variant="filled"
          />
        </Box>
        <Box>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={resumeDetails.basic.email}
            onChange={(e) => handleFormChange(e, "email")}
            required
            placeholder="raviteja@gmail.com"
            // variant="filled"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default BasicInfo;
