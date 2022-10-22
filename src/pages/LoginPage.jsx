import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Show,
  Text,
  useToast,
} from "@chakra-ui/react";
import { IconBrandGoogle, IconBrandMeta } from "@tabler/icons";
import axios from "axios";
import React, { useState } from "react";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const toast = new useToast();

  const loginWithGoogle = () => {
    window.open(`http://localhost:5000/auth/google/callback`, "_self");
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("asd");
    try {
      const url = "http://localhost:5000/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      toast({
        title: "Success",
        description: "Successfully logged in",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      window.location = "/app";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        toast({
          title: "Error",
          description: error.response.data.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Flex w="full" justify="center" p="4" mt="10">
      <Flex w="full" maxW="7xl" gap="10" p="5">
        <Show above="md">
          <Box
            flex="1"
            bgImage="url('/assets/illustrations/hand-min.png')"
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            borderRadius="20"
          />
        </Show>
        <Flex flex="1" direction="column" gap="10">
          <Heading as="h1" fontWeight="extrabold" fontSize="4xl">
            Login
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl display="flex" flexDirection="column">
              <FormLabel>Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="raviteja@gmail.com"
                value={data.email}
                onChange={handleChange}
              />

              <FormLabel mt="5">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="●●●●●●"
                value={data.password}
                onChange={handleChange}
              />

              <Button
                type="submit"
                mt="5"
                variant="solid"
                colorScheme="telegram"
              >
                Login
              </Button>
            </FormControl>
          </form>
          <Flex align="center" gap="3">
            <Divider orientation="horizontal" />
            <Text>or</Text>
            <Divider orientation="horizontal" />
          </Flex>
          <FormControl display="flex" flexDirection="column" gap="4">
            <Button
              leftIcon={<Icon as={IconBrandGoogle} h="5" w="5" />}
              variant="solid"
              colorScheme="orange"
              onClick={loginWithGoogle}
            >
              Login with Google
            </Button>
            <Button
              leftIcon={<Icon as={IconBrandMeta} h="5" w="5" />}
              variant="solid"
              colorScheme="facebook"
            >
              Login with Facebook
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
