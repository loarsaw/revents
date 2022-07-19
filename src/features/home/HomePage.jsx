import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ history }) {
  let navigate = useNavigate();
  return (
    <Flex
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
    >
      <Button
        /* flex={1} */
        px={4}
        fontSize={"lg"}
        onClick={() => navigate("/events", { replace: true })}
        size="lg"
        rounded={"full"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
      >
        Re-vents
      </Button>
    </Flex>
  );
}

export default HomePage;
