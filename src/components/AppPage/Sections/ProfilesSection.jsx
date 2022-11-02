import {
  Box,
  Button,
  Flex,
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
import { IconPlus, IconTrash } from "@tabler/icons";
import React from "react";
import { placeholders, profilesList } from "../../../data/profilesList";

const ProfilesSection = ({
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
          Contact Info
        </Text>
        <Menu>
          <MenuButton as={Button} size="md">
            <Icon as={IconPlus} h="5" w="5" />
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
            {profilesList.map(
              (profile, index) =>
                profile.visible && (
                  <MenuItem
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap="3"
                    px="4"
                    py="2"
                    onClick={(e) =>
                      addSections("profile", profile.name, profile.icon)
                    }
                  >
                    <Icon as={profile.icon} h="5" w="5" />
                    <Text>{profile.name}</Text>
                  </MenuItem>
                )
            )}
          </MenuList>
        </Menu>
      </Flex>

      <Box mt="4" gap="5">
        <Flex direction="column" gap="3" mt="3">
          {resumeDetails.profiles?.map((profile, index) => (
            <Flex gap="2" key={index}>
              <InputGroup>
                <InputLeftAddon
                  children={<Icon as={profile.icon} h="5" w="5" />}
                />
                <Input
                  value={profile.link}
                  placeholder={placeholders[profile.title]}
                  onChange={(e) => handleFormChange(e, "profile", index)}
                  variant="filled"
                />
              </InputGroup>
              <Button onClick={() => removeSections("profile", profile.title)}>
                <Icon as={IconTrash} h="5" w="5" color="red.400" />
              </Button>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProfilesSection;
