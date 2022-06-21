import React from "react";
import { Center, Container, Image, VStack } from "native-base";
import { Text } from "react-native";

const ShopItem = ({ shop }) => {
  return (
    <Center>
      <Container>
        <VStack>
          <Text>{shop.name}</Text>;
          <Center>
            <Image
              source={{
                uri: shop.image_link,
              }}
              alt="Alternate Text"
              size="xl"
            />
          </Center>
        </VStack>
      </Container>
    </Center>
  );
};
export default ShopItem;
