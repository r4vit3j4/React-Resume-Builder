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
  IconBuildingBank,
  IconCalendarTime,
  IconChevronDown,
  IconLink,
  IconPlus,
  IconTallymarks,
  IconTrash,
} from "@tabler/icons";

const ProjectsSection = ({
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
          Projects
        </Text>
        <Button size="md" onClick={(e) => addSections("project")}>
          <Icon as={IconPlus} h="5" w="5" />
        </Button>
      </Flex>
      <Box mt="4" gap="5">
        <Flex direction="column" gap="5" mt="3">
          {resumeDetails.projects?.map((project, index) => (
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
                        {project.name
                          ? project.name.length > 12
                            ? project.name.substring(0, 12) + "..."
                            : project.name.substring(0, 12)
                          : "Project Name"}
                      </Text>
                    </Flex>
                    <Flex align="center" gap="5">
                      <Icon as={IconChevronDown} h="5" w="5" />
                      <Button
                        as={Link}
                        onClick={() => removeSections("project", project.name)}
                      >
                        <Icon as={IconTrash} h="5" w="5" color="red.400" />
                      </Button>
                    </Flex>
                  </Flex>
                </AccordionButton>
                <AccordionPanel borderTop="1px solid #e2e8f0">
                  <Flex direction="column" gap="5" mt="5">
                    <Flex direction="column">
                      <FormLabel>Project Name</FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          children={<Icon as={IconBuildingBank} h="5" w="5" />}
                        />
                        <Input
                          type="text"
                          value={project.name}
                          placeholder="Project Name"
                          onChange={(e) =>
                            handleFormChange(e, "project", index, "name")
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
                          value={project.description}
                          placeholder="Project Description"
                          onChange={(e) =>
                            handleFormChange(e, "project", index, "description")
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
                          value={project.link}
                          placeholder="https://google.com"
                          onChange={(e) =>
                            handleFormChange(e, "project", index, "link")
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
                            type="number"
                            name="started"
                            value={project.started}
                            placeholder="2020"
                            onChange={(e) =>
                              handleFormChange(e, "project", index, "started")
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
                            value={project.ended}
                            placeholder="2024"
                            onChange={(e) =>
                              handleFormChange(e, "project", index, "ended")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex>
                      {/* <Flex direction="column">
                        <FormLabel>Tags</FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            children={<Icon as={IconTallymarks} h="5" w="5" />}
                          />
                          <Input
                            type="text"
                            name="tags"
                            value={project.tags}
                            placeholder="Tags"
                            onChange={(e) =>
                              handleFormChange(e, "project", index, "tags")
                            }
                            variant="filled"
                          />
                        </InputGroup>
                      </Flex> */}
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

export default ProjectsSection;
