import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login.js";
import Signup from "../components/Authentication/Signup.js";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Container maxWidth="xl" centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={3}
        backgroundColor={"white"}
        width={"100%"}
        m={"40px 0 15 px 0"}
        borderRadius={"lg"}
      >
        <Text
          fontSize={"4xl"}
          fontFamily={"Playwrite AU SA"}
          textColor={"purple.700"}
        >
          Me-Chat
        </Text>
      </Box>
      <br />
      <Box bg={"white"} width={"100%"} p={4} borderRadius={"lg"}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
