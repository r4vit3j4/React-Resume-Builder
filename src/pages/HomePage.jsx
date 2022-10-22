import { Button, Flex, Heading, Icon, SlideFade, Text } from "@chakra-ui/react";
import { IconArrowRight } from "@tabler/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Flex justify="center" w="full" p="4">
      <Flex
        w="full"
        maxW="7xl"
        textAlign="center"
        direction="column"
        align="center"
        gap="4"
        my="20"
      >
        <Heading as="h1" fontWeight="extrabold" fontSize="6xl">
          Beautiful{" "}
          <Text
            as="span"
            bg="linear-gradient(230deg,#a24bcf,#4b79cf,#4bc5cf)"
            backgroundClip="text"
          >
            Resumes
          </Text>{" "}
          within minutes
        </Heading>
        <Text fontWeight="medium" fontSize="xl">
          A simpler and faster way to build your resumes
        </Text>
        <Button
          rightIcon={<Icon as={IconArrowRight} />}
          size="lg"
          colorScheme="telegram"
          onClick={() => navigate("/login")}
        >
          Start building your resume
        </Button>
      </Flex>
    </Flex>
  );
};

export default HomePage;
