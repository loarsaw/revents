import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

function SettingsDashboard() {
  return (
    <Grid
      templateAreas={`
              
              "nav footer"`}
      gridTemplateColumns={"1fr 450px"}
      h="500px"
      w="full"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        <Routes>
          <Route path="basic" element={<BasicPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="photos" element={<PhotosPage />} />
          <Route path="account" element={<AccountPage />} />
        </Routes>
      </GridItem>

      <GridItem pl="2" bg="blue.300" area={"footer"}>
        <SettingsNav />
      </GridItem>
    </Grid>
    // <SimpleGrid columns={2} spacing="40px">
    //   <Box bg="tomato" height="100vh">
    //     Settings
    //   </Box>
    //   <Box bg="tomato" height="100vh">
    //     Settings Nav
    //   </Box>
    // </SimpleGrid>
  );
}

export default SettingsDashboard;
