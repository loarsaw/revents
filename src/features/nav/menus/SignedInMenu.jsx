import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignedInMenu({ setAuth }) {
  let navigate = useNavigate();

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            size={"sm"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Create Event</MenuItem>
          <MenuItem>My Events</MenuItem>
          <MenuItem>My Network</MenuItem>
          <MenuItem>My Profile</MenuItem>
          <MenuItem onClick={() => navigate("/settings/basic")}>
            Settings
          </MenuItem>

          <MenuDivider />
          <MenuItem
            onClick={() => {
              setAuth(false);
              navigate("/");
            }}
          >
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default SignedInMenu;
