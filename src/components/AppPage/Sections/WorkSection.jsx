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
  Textarea,
} from "@chakra-ui/react";
import {
  IconBriefcase,
  IconBuildingBank,
  IconCalendarTime,
  IconChevronDown,
  IconLink,
  IconPlus,
  IconTallymarks,
  IconTrash,
} from "@tabler/icons";

const WorkSection = ({
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
          Work Experience
        </Text>
        <Button size="md" onClick={(e) => addSections("work")}>
          <Icon as={IconPlus} h="5" w="5" />
        </Button>
      </Flex>
      <Box mt="4" gap="5">
        <Flex direction="column" gap="5" mt="3">
          {resumeDetails.work?.map((work, index) => (
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
                        {work.company
                          ? work.company.length > 12
                            ? work.company.substring(0, 12) + "..."
                            : work.company.substring(0, 12)
                          : "Company Name"}
                      </Text>
                    </Flex>
                    <Flex align="center" gap="5">
                      <Icon as={IconChevronDown} h="5" w="5" />
                      <Button
                        as={Link}
                        onClick={() => removeSections("work", work.company)}
                      >
                        <Icon as={IconTrash} h="5" w="5" color="red.400" />
                      </Button>
                    </Flex>
                  </Flex>
                </AccordionButton>
                <AccordionPanel borderTop="1px solid #e2e8f0">
                  <Flex direction="column" gap="5" mt="5">
                    <Flex direction="column">
                      <FormLabel>Company Name</FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          children={<Icon as={IconBuildingBank} h="5" w="5" />}
                        />
                        <Input
                          type="text"
                          value={work.company}
                          placeholder="Company Name"
                          onChange={(e) =>
                            handleFormChange(e, "work", index, "company")
                          }
                          variant="filled"
                        />
                      </InputGroup>
                    </Flex>
                    <Flex direction="column">
                      <FormLabel>Role</FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          children={<Icon as={IconBriefcase} h="5" w="5" />}
                        />
                        <Input
                          type="text"
                          value={work.role}
                          placeholder="Role"
                          onChange={(e) =>
                            handleFormChange(e, "work", index, "role")
                          }
                          variant="filled"
                        />
                      </InputGroup>
                    </Flex>

                    <Flex gap="3" align="center" flexWrap="wrap" w="full">
                      <Flex direction="column" flex="1" minW="5">
                        <FormLabel>Description</FormLabel>

                        <Textarea
                          type="text"
                          name="description"
                          value={work.description}
                          placeholder="Project Description"
                          onChange={(e) =>
                            handleFormChange(e, "work", index, "description")
                          }
                          variant="filled"
                        />
                      </Flex>
                    </Flex>
                    <Flex direction="column" flex="1" minW="5">
                      <FormLabel>Project Link</FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          children={<Icon as={IconLink} h="5" w="5" />}
                        />
                        <Input
                          type="text"
                          name="link"
                          value={work.link}
                          placeholder="https://google.com"
                          onChange={(e) =>
                            handleFormChange(e, "work", index, "link")
                          }
                          variant="filled"
                        />
                      </InputGroup>
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
                            name="started"
                            type="text"
                            value={work.started}
                            placeholder="June 2020"
                            onChange={(e) =>
                              handleFormChange(e, "work", index, "started")
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
                            name="ended"
                            text="text"
                            value={work.ended}
                            placeholder="August 2020"
                            onChange={(e) =>
                              handleFormChange(e, "work", index, "ended")
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

export default WorkSection;
