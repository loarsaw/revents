import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Divider,
  Image,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { Component } from "react";
import EventListAttendee from "./EventListAttendee";

// import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, onEventOpen, deleteEvent } = this.props;
    return (
      <Box
        p={4}
        // display={{ md: "flex" }}
        maxWidth="full"
        maxHeight="full"
        borderWidth={1}
        margin={2}
      >
        <Stack direction={"row"}>
          <Box>
            <Avatar src={event.hostPhotoURL} size="xl" />
          </Box>
          <Box>
            <Stack direction={"column"}>
              <Text fontSize={"2xl"}>{event.title}</Text>
              <Text fontSize={"small"}>Hosted by {event.hostedBy}</Text>
            </Stack>
          </Box>
        </Stack>
        <Divider mt={2} />
        <Stack direction={"row"} my="2">
          <Text fontSize={"15px"}>{event.date}||</Text>
          <Text fontSize={"15px"}>{event.venue}</Text>
        </Stack>
        <Divider />
        <Wrap my={2} minH={10}>
          {event.attendees &&
            event.attendees.map((attendee) => (
              <EventListAttendee key={attendee.id} attendee={attendee} />
            ))}
        </Wrap>

        <Divider />
        <Stack my={2}>
          <Text>
            Laboris ipsum ut laborum deserunt nisi nisi amet sint duis laborum
            culpa enim. Enim nulla aliquip velit fugiat nulla aliqua excepteur
            ipsum consequat. Do do ut velit sit sunt proident ut. Anim non id ut
            non cillum non cupidatat laboris laboris duis eu fugiat in dolore.
            Ex voluptate ex velit sint quis.
          </Text>
          <Button onClick={onEventOpen(event)}>View</Button>
          <Button onClick={deleteEvent(event.id)}>Delete</Button>
        </Stack>
        {/* <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md:  "left" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            Card
          </Text>
          <Link
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Non adipisicing id nulla enim voluptate adipisicing consectetur
            veniam eiusmod id ex.
          </Link>
          <Text my={2} color="gray.500">
            Fugiat sunt occaecat in adipisicing ex ipsum magna qui et sint magna
            quis do. Consectetur et dolor esse non adipisicing exercitation
            voluptate exercitation consequat amet. Consequat esse aute anim duis
            nisi excepteur voluptate sunt ea mollit sit sit commodo culpa. Culpa
            adipisicing enim aute quis ut.
          </Text>
          <Button maxWidth="100px" my={2}>
            Click me!
          </Button>
        </Stack> */}
      </Box>
      // <Segment.Group>
      //   <Segment>
      //     <Item.Group>
      //       <Item>
      //         <Item.Image size="tiny" circular src={event.hostPhotoURL} />
      //         <Item.Content>
      //           <Item.Header as="a">{event.title}</Item.Header>
      //           <Item.Description>
      //             Hosted by <a>{event.hostedBy}</a>
      //           </Item.Description>
      //         </Item.Content>
      //       </Item>
      //     </Item.Group>
      //   </Segment>
      //   <Segment>
      //     <span>
      //       <Icon name="clock" /> {event.date}|
      //       <Icon name="marker" /> {event.venue}
      //     </span>
      //   </Segment>
      //   <Segment secondary>
      //     <List horizontal>
      //     {event.attendees.map((attendee) => (
      //       <EventListAttendee key={attendee.id} attendee={attendee}/>
      //     ))}

      //     </List>
      //   </Segment>
      //   <Segment clearing>
      //   <span>{event.description}</span>
      //     <Button as="a" color="teal" floated="right" content="View" />
      //   </Segment>
      // </Segment.Group>
    );
  }
}

export default EventListItem;
