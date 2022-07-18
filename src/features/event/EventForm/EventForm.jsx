import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const emptyEvent = {
  title: "",
  date: "",
  venue: "",
  city: "",
  hostedBy: "",
};

const EventForm = ({
  createEvent,
  handleCancel,
  selectedEvent,
  updateEvent,
}) => {
  const [formData, setFormData] = useState(emptyEvent);

  useEffect(() => {
    if (selectedEvent !== null) {
      setFormData(selectedEvent);
    } else {
      setFormData(emptyEvent);
    }
  }, [selectedEvent]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (selectedEvent !== null) {
      updateEvent(formData);
    } else {
      createEvent(formData);
    }
  };

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { title, city, date, venue, hostedBy } = formData;
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
        <form>
          <FormControl isRequired>
            <FormLabel>Event Name</FormLabel>
            <Input
              value={title}
              onChange={(e) => updateFormData(e)}
              placeholder="Event Name"
              name="title"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Event Date</FormLabel>
            <Input
              placeholder="The Date of your Event"
              _placeholder={{ color: "gray.500" }}
              type="datetime-local"
              name="date"
              onChange={(e) => updateFormData(e)}
              value={date}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City Event is taking Place"
              _placeholder={{ color: "gray.500" }}
              onChange={(e) => updateFormData(e)}
              name="city"
              value={city}
              type="text"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Venue</FormLabel>
            <Input
              placeholder="Venue of Event"
              _placeholder={{ color: "gray.500" }}
              onChange={(e) => updateFormData(e)}
              name="venue"
              value={venue}
              type="text"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Hosted By </FormLabel>
            <Input
              placeholder="Enter the name of person hosting it"
              _placeholder={{ color: "gray.500" }}
              onChange={(e) => updateFormData(e)}
              value={hostedBy}
              name="hostedBy"
              type="text"
            />
          </FormControl>
        </form>

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
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default EventForm;
