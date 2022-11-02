import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconPhone,
  IconPlus,
  IconTrash,
  IconUser,
} from "@tabler/icons";
import React, { useEffect, useState } from "react";

const handleList = [
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    visible: true,
  },
  {
    name: "Github",
    icon: IconBrandGithub,
    visible: true,
  },
  {
    name: "Phone",
    icon: IconPhone,
    visible: true,
  },
  {
    name: "Portfolio",
    icon: IconUser,
    visible: true,
  },
  {
    name: "Twitter",
    icon: IconBrandTwitter,
    visible: true,
  },
  {
    name: "GitLab",
    icon: IconBrandGitlab,
    visible: true,
  },
];

const placeholders = {
  LinkedIn: "https://linkedin.com/in/example",
  Github: "https://github.com/example",
  Phone: "+91 8989898989",
  Portfolio: "https://example.com",
  Twitter: "https://twitter.com/example",
  GitLab: "https://gitlab.com/example",
};

const AppPage = ({ userDetails }) => {
  const [resumeDetails, setResumeDetails] = useState({
    meta: {
      theme: "",
    },
    basics: {
      name: "",
      email: "",
    },
    profiles: [],
    education: [],
    projects: [],
    work: [],
    certifications: [],
    publications: [],
    skills: [],
  });

  const setName = (e) => {
    setResumeDetails((prev) => ({
      ...prev,
      basics: {
        ...prev.basics,
        name: e.target.value,
      },
    }));
  };

  const setEmail = (e) => {
    setResumeDetails((prev) => ({
      ...prev,
      basics: {
        ...prev.basics,
        email: e.target.value,
      },
    }));
  };

  const setProfile = (e, proftitle, Icon) => {
    setResumeDetails((prev) => {
      const prof = prev.profiles.find((profile) => profile.title == proftitle);
      prof.link = e.target.value;
      return {
        ...prev,
        profiles: [...prev.profiles, prof],
      };
    });
  };

  const addProfile = (profilename, Icon) => {
    handleList.find(({ name }) => name === profilename).visible = false;

    const prevProfiles = resumeDetails.profiles;
    prevProfiles.push({
      title: profilename,
      icon: Icon,
      link: "",
    });
    setResumeDetails((prevResumeDetails) => ({
      profiles: prevProfiles,
      ...prevResumeDetails,
    }));
  };

  const deleteProfile = (profilename, Icon) => {
    setResumeDetails((prevResumeDetails) => {
      return {
        ...prevResumeDetails,
        profiles: prevResumeDetails.profiles.filter(
          ({ title }) => title !== profilename
        ),
      };
    });
    handleList.find(({ name }) => name === profilename).visible = true;
  };

  useEffect(() => {
    console.log(resumeDetails);
  }, [resumeDetails]);

  return (
    <Flex w="full" direction="column" align="center" p="4">
      <Flex
        w="full"
        direction={["column", "column", "column", "row"]}
        maxW="8xl"
        gap="16"
        mt="10"
      >
        <FormControl flex="2">
          <Flex direction="column" gap="9">
            <Flex direction="column" gap="5" mt="7">
              <Text fontSize="lg" fontWeight="bold">
                Basic Info
              </Text>
              <Flex gap="5" mt="2">
                <Box>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    name="fullName"
                    id="fullName"
                    type="text"
                    placeholder="Ravi Teja"
                    value={resumeDetails.basics.name}
                    onChange={(e) => setName(e)}
                  />
                </Box>
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="raviteja@gmail.com"
                    value={resumeDetails.basics.email}
                    onChange={(e) => setEmail(e)}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Contact Info
              </Text>
              <Flex direction="column" gap="2">
                <Text>Select a handle</Text>
                <Menu placement="end">
                  <MenuButton as={Button}>
                    <Icon as={IconPlus} />
                  </MenuButton>
                  <MenuList py="2">
                    <MenuItem
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="3"
                      px="4"
                      py="2"
                    >
                      <Text fontWeight="bold">Select a handle</Text>
                    </MenuItem>
                    {handleList.map(
                      ({ name, icon, visible }, index) =>
                        visible && (
                          <MenuItem
                            key={index}
                            display="flex"
                            alignItems="center"
                            gap="3"
                            px="4"
                            py="2"
                            onClick={() => addProfile(name, icon)}
                          >
                            <Icon as={icon} h="5" w="5" />
                            <Text>{name}</Text>
                          </MenuItem>
                        )
                    )}
                  </MenuList>
                  <Flex direction="column" gap="2" mt="2">
                    {resumeDetails.profiles?.map(
                      ({ title, link, icon }, index) => (
                        <Flex gap="2" key={index}>
                          <InputGroup>
                            <InputLeftAddon
                              children={<Icon as={icon} h="6" w="6" />}
                            />
                            <Input
                              name={title}
                              type="text"
                              value={link}
                              placeholder={placeholders[title]}
                              onChange={(e) => {
                                setProfile(e, title, icon);
                              }}
                            />
                          </InputGroup>
                          <Button onClick={() => deleteProfile(title, icon)}>
                            <Icon as={IconTrash} h="5" w="5" color="red.400" />
                          </Button>
                          <Button onClick={() => deleteProfile(title, icon)}>
                            <Icon as={IconTrash} h="5" w="5" color="red.400" />
                          </Button>
                        </Flex>
                      )
                    )}
                  </Flex>
                </Menu>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Education
              </Text>
              <Flex direction="column" gap="2">
                <Text>Add your education details</Text>
                <Button mt="2">
                  <Icon as={IconPlus} />
                </Button>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Projects
              </Text>
              <Flex direction="column" gap="2">
                <Text>Add your projects</Text>
                <Button mt="2">
                  <Icon as={IconPlus} />
                </Button>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Work
              </Text>
              <Flex direction="column" gap="2">
                <Text>Add your work experience</Text>
                <Button mt="2">
                  <Icon as={IconPlus} />
                </Button>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Certifications
              </Text>
              <Flex direction="column" gap="2">
                <Text>Add your work certifications</Text>
                <Button mt="2">
                  <Icon as={IconPlus} />
                </Button>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Publications
              </Text>
              <Flex direction="column" gap="2">
                <Text>Add your publications</Text>
                <Button mt="2">
                  <Icon as={IconPlus} />
                </Button>
              </Flex>
            </Flex>
            <Flex mt="2" direction="column" gap="5">
              <Text fontSize="lg" fontWeight="bold">
                Skills
              </Text>
              <Flex direction="column" gap="2">
                <Text>Add your skills</Text>
                <Button mt="2">
                  <Icon as={IconPlus} />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </FormControl>
        <Flex flex="3" direction="column" gap="5" h="80vh">
          <Heading>Preview</Heading>
          <Flex border="1px solid #e2e8f0" borderRadius="10" flex="1"></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppPage;
