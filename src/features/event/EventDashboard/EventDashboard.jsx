import React, { Component } from "react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import cuid from "cuid";

const eventsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00",
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
    date: "2018-03-28T14:00",
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
    selectedEvent: null,
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null,
    });
  };

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true,
    });
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter((e) => e.id !== eventId);
    this.setState({
      events: updatedEvents,
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    console.log("called");
    newEvent.hostPhotoURL = "https://randomuser.me/api/portraits/men/37.jpg";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
    });
  };

  render() {
    const { selectedEvent } = this.state;
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
          <EventList
            onEventOpen={this.handleOpenEvent}
            deleteEvent={this.handleDeleteEvent}
            events={this.state.events}
          />
        </GridItem>

        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <Button onClick={this.handleFormOpen} positive>
            Create Event
          </Button>
          {this.state.isOpen && (
            <EventForm
              createEvent={this.handleCreateEvent}
              selectedEvent={selectedEvent}
              handleCancel={this.handleCancel}
              updateEvent={this.handleUpdateEvent}
            />
          )}
        </GridItem>
      </Grid>
    );
  }
}

export default EventDashboard;
