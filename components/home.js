import React from "react";
import { Text, View, Alert } from "react-native";
import { Button, Box, Center, Container, Heading } from "native-base";

const Home = () => {
  return (
    <Center style={{ flex: 1, width: "100%", height: "100%" }}>
      <Container>
        <Button onPress={() => alert("going to see the list")}>List</Button>
      </Container>
    </Center>
  );
};

export default Home;
