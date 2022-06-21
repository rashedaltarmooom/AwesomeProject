import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  HStack,
  ScrollView,
  VStack,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import ShopList from "./components/ShopList";
import ShopItem from "./components/ShopItem";
import { observer } from "mobx-react";
import Home from "./components/home";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
