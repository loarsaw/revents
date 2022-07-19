import {
  Box,
  Center,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon, SettingsIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
function SettingsNav() {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <List
              fontSize={"xl"}
              fontWeight={500}
              bg={useColorModeValue("pink.50", "green.900")}
              // p={2}
              // px={3}
              // color={"green.500"}
              // rounded={"full"}
            >
              <ListItem>
                <ListIcon as={SettingsIcon} color="pink.400" />
                Personal
              </ListItem>
            </List>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                <Link as={NavLink} to="basic">
                  Basics
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                <Link as={NavLink} to="about">
                  About Me
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                <Link as={NavLink} to="photos">
                  My Photos
                </Link>
              </ListItem>
            </List>

            {/* <Button
          mt={10}
          w={"full"}
          bg={"green.400"}
          color={"white"}
          rounded={"xl"}
          boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
          _hover={{
            bg: "green.500",
          }}
          _focus={{
            bg: "green.500",
          }}
        >
          Start your trial
        </Button> */}
          </Box>
        </Box>
      </Center>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <List
              fontSize={"xl"}
              fontWeight={500}
              bg={useColorModeValue("pink.50", "green.900")}
              // p={2}
              // px={3}
              // color={"green.500"}
              // rounded={"full"}
            >
              <ListItem>
                <ListIcon as={SettingsIcon} color="pink.400" />
                Account
              </ListItem>
            </List>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem >
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                <Link as={NavLink} to="account">My Account</Link>
              </ListItem>
            </List>

            {/* <Button
          mt={10}
          w={"full"}
          bg={"green.400"}
          color={"white"}
          rounded={"xl"}
          boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
          _hover={{
            bg: "green.500",
          }}
          _focus={{
            bg: "green.500",
          }}
        >
          Start your trial
        </Button> */}
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default SettingsNav;
