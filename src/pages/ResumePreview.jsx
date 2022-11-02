import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IconLink } from "@tabler/icons";
import React from "react";

const ResumePreview = ({ resumeDetails }) => {
  return (
    <Flex direction="column" w="full">
      <Box w="full" p="4" borderBottom="1px solid #e2e8f0">
        <Text fontSize="2xl" fontWeight="bold">
          {resumeDetails?.basic?.name || "John Doe"}
        </Text>
        <Text fontSize="sm" mt="1" color="gray.600">
          {resumeDetails?.basic?.email || "johndoe@gmail.com"}
        </Text>
      </Box>
      <Box w="full" p="4" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="semibold" fontSize="lg">
          Contact
        </Text>
        <Flex align="center" gap="5" rowGap="2" flexWrap="wrap" mt="3">
          {resumeDetails?.profiles?.map((profile, index) => (
            <Flex align="center" fontSize="sm" gap="1" key={index}>
              <Icon as={profile.icon} h="4" w="4" color="gray.600" />
              <Text color="gray.600">{profile.link}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box w="full" p="4" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="semibold" fontSize="lg">
          Education
        </Text>
        <Flex
          direction="column"
          align="center"
          rowGap="2"
          flexWrap="wrap"
          mt="3"
        >
          {resumeDetails?.education?.map((edu, index) => (
            <Flex
              w="full"
              align="center"
              fontSize="sm"
              justify="space-between"
              key={index}
            >
              <Flex direction="column" gap="1">
                <Text fontWeight="semibold">{edu.institute}</Text>
                <Text>
                  {edu.degree} - {edu.stream}
                </Text>
              </Flex>
              <Flex direction="column" gap="1">
                <Text>
                  {edu.started} - {edu.ended}
                </Text>
                <Text>{edu.grade} CGPA</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box w="full" p="4" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="semibold" fontSize="lg">
          Projects
        </Text>
        <Flex direction="column" w="full" gap="4" flexWrap="wrap" mt="3">
          {resumeDetails?.projects?.map((project, index) => (
            <Flex w="full" direction="column" key={index} fontSize="sm" gap="1">
              <Flex align="center" justify="space-between">
                <Text fontWeight="semibold">{project.name}</Text>
                <Text>
                  {project.started} - {project.ended}
                </Text>
              </Flex>
              <Flex align="center" gap="1">
                <Icon as={IconLink} h="4" w="4" />
                <Text>{project.link}</Text>
              </Flex>
              <Text>{project.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box w="full" p="4" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="semibold" fontSize="lg">
          Work Experience
        </Text>
        <Flex direction="column" w="full" gap="4" flexWrap="wrap" mt="3">
          {resumeDetails?.work?.map((work, index) => (
            <Flex w="full" direction="column" key={index} fontSize="sm" gap="1">
              <Flex align="center" justify="space-between">
                <Flex direction="column">
                  <Text fontWeight="semibold">{work.role}</Text>
                  <Text>{work.company}</Text>
                </Flex>
                <Text>
                  {work.started} - {work.ended}
                </Text>
              </Flex>
              <Flex align="center" gap="1">
                <Icon as={IconLink} h="4" w="4" />
                <Text>{work.link}</Text>
              </Flex>
              <Text>{work.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box w="full" p="4" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="semibold" fontSize="lg">
          Certifications
        </Text>
        <Flex direction="column" w="full" gap="4" flexWrap="wrap" mt="3">
          {resumeDetails?.certifications?.map((certification, index) => (
            <Flex w="full" direction="column" key={index} fontSize="sm" gap="1">
              <Flex align="center" justify="space-between">
                <Flex direction="column">
                  <Text fontWeight="semibold">{certification.title}</Text>
                </Flex>
              </Flex>
              <Flex align="center" gap="1">
                <Icon as={IconLink} h="4" w="4" />
                <Text>{certification.link}</Text>
              </Flex>
              <Text>{certification.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box w="full" p="4">
        <Text fontWeight="semibold" fontSize="lg">
          Skills
        </Text>
        <Flex
          direction="row"
          w="full"
          gap="4"
          rowGap="2"
          flexWrap="wrap"
          mt="3"
          fontSize="sm"
        >
          {resumeDetails?.skills?.map((skill, index) => (
            <Text>{skill}</Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ResumePreview;
