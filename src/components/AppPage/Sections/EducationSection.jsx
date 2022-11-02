import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  IconBuildingBank,
  IconCalendarTime,
  IconCertificate,
  IconChevronDown,
  IconPlus,
  IconRipple,
  IconTallymarks,
  IconTrash,
} from "@tabler/icons";

const EducationSection = ({
  resumeDetails,
  handleFormChange,
  addSections,
  removeSections,
}) => {
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
          Education
        </Text>
        <Button size="md" onClick={(e) => addSections("education")}>
          <Icon as={IconPlus} h="5" w="5" />
        </Button>
      </Flex>
      <Box mt="4" gap="5">
        <Flex direction="column" gap="5" mt="3">
          {resumeDetails.education?.map((edu, index) => (
            <Accordion
              key={index}
              allowMultiple
              border="1px solid #e2e8f0"
              borderRadius="lg"
              boxShadow="sm"
            >
              <AccordionItem border="none" borderRadius="lg">
                <AccordionButton borderTopRadius="lg">
                  <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="2"
                  >
                    <Flex
                      align="center"
                      gap="2"
                      flexWrap="wrap"
                      justify="space-between"
                    >
                      <Text fontWeight="medium">
                        {edu.institute
                          ? edu.institute.length > 12
                            ? edu.institute.substring(0, 12) + "..."
                            : edu.institute.substring(0, 12)
                          : "Institute"}
                      </Text>
                      <Text fontWeight="medium">
                        {edu.degree
                          ? edu.degree.length > 6
                            ? edu.degree.substring(0, 6) + "..."
                            : edu.degree.substring(0, 6)
                          : "Degree"}
                      </Text>
                      <Text fontWeight="medium">
                        {edu.stream
                          ? edu.stream.length > 6
                            ? edu.stream.substring(0, 6) + "..."
                            : edu.stream.substring(0, 6)
                          : "Stream"}
                      </Text>
                    </Flex>
                    <Flex align="center" gap="5">
                      <Icon as={IconChevronDown} h="5" w="5" />
                      <Button
                        as={Link}
                        onClick={() => removeSections("education", edu.stream)}
                      >
                        <Icon as={IconTrash} h="5" w="5" color="red.400" />
                      </Button>
                    </Flex>
                  </Flex>
                </AccordionButton>
                <AccordionPanel borderTop="1px solid #e2e8f0">
                  <Flex direction="column" gap="5" mt="5">
                    <Flex direction="column">
                      <FormLabel>Institute Name</FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          children={<Icon as={IconBuildingBank} h="5" w="5" />}
                        />
                        <Input
                          type="text"
                          value={edu.institute}
                          placeholder="Institute"
                          onChange={(e) =>
                            handleFormChange(e, "education", index, "institute")
                          }
                          variant="filled"
                        />
                      </InputGroup>
                    </Flex>

                    <Flex gap="3" align="center" flexWrap="wrap" w="full">
                      <Flex direction="column" flex="1" minW="5">
                        <FormLabel>Degree</FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            children={<Icon as={IconCertificate} h="5" w="5" />}
                          />
                          <Input
                            type="text"
                            name="degree"
                            value={edu.degree}
                            placeholder="B.Tech"
                            onChange={(e) =>
                              handleFormChange(e, "education", index, "degree")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex>
                      <Flex direction="column" flex="1" minW="5">
                        <FormLabel>Stream</FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            children={<Icon as={IconRipple} h="5" w="5" />}
                          />
                          <Input
                            type="text"
                            name="stream"
                            value={edu.stream}
                            placeholder="CSE"
                            onChange={(e) =>
                              handleFormChange(e, "education", index, "stream")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex>
                    </Flex>

                    <Flex gap="3">
                      <Flex direction="column">
                        <FormLabel>Started</FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            children={
                              <Icon as={IconCalendarTime} h="5" w="5" />
                            }
                          />
                          <Input
                            type="number"
                            name="started"
                            value={edu.started}
                            placeholder="2020"
                            onChange={(e) =>
                              handleFormChange(e, "education", index, "started")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex>
                      <Flex direction="column">
                        <FormLabel>Ended</FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            children={
                              <Icon as={IconCalendarTime} h="5" w="5" />
                            }
                          />
                          <Input
                            type="number"
                            name="ended"
                            value={edu.ended}
                            placeholder="2024"
                            onChange={(e) =>
                              handleFormChange(e, "education", index, "ended")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex>
                      <Flex direction="column">
                        <FormLabel>Grade</FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            children={<Icon as={IconTallymarks} h="5" w="5" />}
                          />
                          <Input
                            type="text"
                            name="grade"
                            value={edu.grade}
                            placeholder="8.13"
                            onChange={(e) =>
                              handleFormChange(e, "education", index, "grade")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex>
                    </Flex>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default EducationSection;
