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
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const toast = useToast();

  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.open(`http://localhost:5000/auth/google/callback`, "_self");
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      toast({
        title: "Success",
        description: "User Created Succesfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
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
            bgImage="url('/assets/illustrations/cat-min.png')"
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            borderRadius="20"
          />
        </Show>
        <Flex flex="1" direction="column" gap="10">
          <Heading as="h1" fontWeight="extrabold" fontSize="4xl">
            Signup
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl display="flex" flexDirection="column">
              <FormLabel>First Name</FormLabel>
              <Input
                id="firsName"
                name="firstName"
                type="text"
                placeholder="Ravi"
                value={data.firstName}
                required
                onChange={handleChange}
              />
              <FormLabel mt="5">Last Name</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Teja"
                value={data.lastName}
                required
                onChange={handleChange}
              />
              <FormLabel mt="5">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="raviteja@gmail.com"
                value={data.email}
                required
                onChange={handleChange}
              />

              <FormLabel mt="5">Password</FormLabel>
              <Input
                name="password"
                id="password"
                type="password"
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
                Signup
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

export default SignupPage;
