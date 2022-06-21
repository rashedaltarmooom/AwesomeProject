import {
  StyleSheet,
  Text,
  View,
  HStack,
  ScrollView,
  VStack,
} from "native-base";
import React from "react";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";

function ShopList() {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} />
  ));

  return (
    <ScrollView>
      <View>{shopList}</View>
    </ScrollView>
  );
}
export default observer(ShopList);
