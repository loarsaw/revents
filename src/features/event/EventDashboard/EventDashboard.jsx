import React, { Component } from "react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { Button, Grid, GridItem } from "@chakra-ui/react";

const eventsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      // <Grid>
      //   <Grid.Column width={10}>
      //     <EventList events={this.state.events} />
      //   </Grid.Column>
      //   <Grid.Column width={6}>
      //     <Button
      //       onClick={this.handleFormOpen}
      //       positive
      //       content="Create Event"
      //     />
      //     {this.state.isOpen && <EventForm handleCancel={this.handleCancel} />}
      //   </Grid.Column>
      // </Grid>
      <Grid
        templateAreas={`
                  
                  "nav footer"`}
        gridTemplateColumns={"1fr 450px"}
        h="200px"
        w="full"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          <EventList events={this.state.events} />
        </GridItem>

        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <Button onClick={this.handleFormOpen} positive>
            Create Event
          </Button>
          {this.state.isOpen && <EventForm handleCancel={this.handleCancel} />}
        </GridItem>
      </Grid>
    );
  }
}

export default EventDashboard;
