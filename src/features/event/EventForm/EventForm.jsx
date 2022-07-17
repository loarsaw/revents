// import React, { Component } from 'react';
// import { Segment, Form, Button } from 'semantic-ui-react';

// class EventForm extends Component {
//   render() {
//     const {handleCancel} = this.props;
//     return (
//       <Segment>
//         <Form>
//           <Form.Field>
//             <label>Event Title</label>
//             <input placeholder="First Name" /
//           </Form.Field>
//           <Form.Field>
//             <label>Event Date</label>
//             <input type="date" placeholder="Event Date" />
//           </Form.Field>
//           <Form.Field>
//             <label>City</label>
//             <input placeholder="City event is taking place" />
//           </Form.Field>
//           <Form.Field>
//             <label>Venue</label>
//             <input placeholder="Enter the Venue of the event" />
//           </Form.Field>
//           <Form.Field>
//             <label>Hosted By</label>
//             <input placeholder="Enter the name of person hosting" />
//           </Form.Field>
//           <Button positive type="submit">
//             Submit
//           </Button>
//           <Button onClick={handleCancel} type="button">Cancel</Button>
//         </Form>
//       </Segment>
//     );
//   }
// }

// export default EventForm;
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

export default function UserProfileEdit({ handleCancel }) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            onClick={handleCancel}
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
