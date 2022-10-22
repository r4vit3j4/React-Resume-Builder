import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IconArrowRight,
  IconLogout,
  IconMenu2,
  IconSettings,
  IconSun,
} from "@tabler/icons";
import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ userDetails }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerButtonRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("token");
    window.open(`http://localhost:5000/auth/logout`, "_self");
  };

  return (
    <Flex
      w="full"
      p="4"
      justify="center"
      align="center"
      position="sticky"
      top="0"
      left="0"
      bg="white"
      borderBottom="1px solid #e6e6e6"
      boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.05)"
      zIndex="10"
    >
      <Flex w="full" maxW="7xl" justify="space-between" align="center">
        <Box>
          <Text
            as={Link}
            to="/"
            fontSize="3xl"
            fontWeight="bold"
            _hover={{
              opacity: "0.7",
            }}
          >
            Resume
          </Text>
        </Box>
        {/* Mobile Nav */}
        <Show below="md">
          <Flex gap="3">
            <Button>
              <Icon as={IconSun} />
            </Button>
            <Button ref={drawerButtonRef} onClick={onOpen}>
              <Icon as={IconMenu2} />
            </Button>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={drawerButtonRef}
            size="xs"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Flex direction="column" gap="4" p="4" mt="4">
                  <Button
                    as={Link}
                    to="/#features"
                    variant="ghost"
                    colorScheme="telegram"
                    onClick={onClose}
                  >
                    Features
                  </Button>
                  <Button
                    as={Link}
                    to="/#about"
                    variant="ghost"
                    colorScheme="telegram"
                    onClick={onClose}
                  >
                    About
                  </Button>
                  <Button
                    variant="outline"
                    colorScheme="telegram"
                    onClick={() => {
                      navigate("/login");
                      onClose();
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="telegram"
                    onClick={() => {
                      navigate("/signup");
                      onClose();
                    }}
                  >
                    Sign up
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
        {/* Desktop Nav */}
        <Hide below="md">
          <Flex gap="3">
            {userDetails ? (
              <>
                {location.pathname === "/" && (
                  <Button
                    rightIcon={<Icon as={IconArrowRight} h="5" w="5" />}
                    colorScheme="telegram"
                    variant="solid"
                    onClick={() => navigate("/app")}
                  >
                    Go to App
                  </Button>
                )}
                <Menu>
                  <MenuButton
                    as={Button}
                    w="10"
                    h="10"
                    p="1"
                    borderRadius="full"
                    variant="ghost"
                    colorScheme="blue"
                  >
                    <Image
                      src={
                        userDetails?.picture === ""
                          ? "/assets/avatar/avatar.png"
                          : userDetails?.picture
                      }
                      alt="avatar"
                      borderRadius="full"
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      display="flex"
                      gap="2"
                      onClick={() => navigate("/settings")}
                    >
                      <Icon as={IconSettings} h="5" w="5" />
                      Settings
                    </MenuItem>
                    <MenuItem
                      display="flex"
                      gap="2"
                      color="red.400"
                      onClick={logOut}
                    >
                      <Icon as={IconLogout} h="5" w="5" />
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  variant="ghost"
                  colorScheme="telegram"
                  to="/#features"
                >
                  Features
                </Button>
                <Button
                  as={Link}
                  variant="ghost"
                  colorScheme="telegram"
                  to="/#about"
                >
                  About
                </Button>
                <Button
                  variant="outline"
                  colorScheme="telegram"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </Button>
                <Button
                  variant="solid"
                  colorScheme="telegram"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Button>
              </>
            )}
          </Flex>
        </Hide>
      </Flex>
    </Flex>
  );
};

export default Navbar;
