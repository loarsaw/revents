import { Box, Container } from "@chakra-ui/react";
import React, { Component } from "react";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Box>
          <EventDashboard />
        </Box>
      </div>
    );
  }
}

export default App;
