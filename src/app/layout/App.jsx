import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/Navbar/Navbar";
import EventForm from "../../features/event/EventForm/EventForm";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import BasicPage from "../../features/user/Settings/BasicPage";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventDashboard />} />
            <Route path="/event/:id" element={<EventDetailedPage />} />
            <Route path="/people" element={<PeopleDashboard />} />
            <Route path="profile/:id" element={<UserDetailedPage />} />
            <Route path="settings/*" element={<SettingsDashboard />} />
            <Route path="/createEvent" element={<EventForm />} />
          </Routes>
        </Box>
      </div>
    );
  }
}

export default App;
