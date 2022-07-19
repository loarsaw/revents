import { Button, Stack } from "@chakra-ui/react";
import React from "react";

function SignedOutMenu({ setAuth }) {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button fontSize={"sm"} fontWeight={400} onClick={() => setAuth(true)}>
        SignIn
      </Button>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        href={"#"}
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
}

export default SignedOutMenu;
