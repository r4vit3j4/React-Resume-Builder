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
  IconCertificate,
  IconChevronDown,
  IconLink,
  IconPlus,
  IconTrash,
} from "@tabler/icons";

const CertificationsSection = ({
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
          Certifications
        </Text>
        <Button size="md" onClick={(e) => addSections("certification")}>
          <Icon as={IconPlus} h="5" w="5" />
        </Button>
      </Flex>
      <Box mt="4" gap="5">
        <Flex direction="column" gap="5" mt="3">
          {resumeDetails.certifications?.map((certification, index) => (
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
                        {certification.title
                          ? certification.title.length > 12
                            ? certification.title.substring(0, 12) + "..."
                            : certification.title.substring(0, 12)
                          : "Certification"}
                      </Text>
                    </Flex>
                    <Flex align="center" gap="5">
                      <Icon as={IconChevronDown} h="5" w="5" />
                      <Button
                        as={Link}
                        onClick={() =>
                          removeSections("certification", certification.title)
                        }
                      >
                        <Icon as={IconTrash} h="5" w="5" color="red.400" />
                      </Button>
                    </Flex>
                  </Flex>
                </AccordionButton>
                <AccordionPanel borderTop="1px solid #e2e8f0">
                  <Flex direction="column" gap="5" mt="5">
                    <Flex direction="column">
                      <FormLabel>Certification</FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          children={<Icon as={IconCertificate} h="5" w="5" />}
                        />
                        <Input
                          type="text"
                          value={certification.title}
                          placeholder="Certification"
                          onChange={(e) =>
                            handleFormChange(e, "certification", index, "title")
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
                          value={certification.description}
                          placeholder="Project Description"
                          onChange={(e) =>
                            handleFormChange(
                              e,
                              "certification",
                              index,
                              "description"
                            )
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
                          value={certification.link}
                          placeholder="https://google.com"
                          onChange={(e) =>
                            handleFormChange(e, "certification", index, "link")
                          }
                          variant="filled"
                        />
                      </InputGroup>
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

export default CertificationsSection;
