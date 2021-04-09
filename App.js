import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/appNavigator";
import Home from "./screens/home";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <Home /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
