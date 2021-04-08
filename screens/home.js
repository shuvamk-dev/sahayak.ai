import React from "react";
import { Button, StyleSheet, Text, Vibration, View } from "react-native";
import Vibrator from "../components/vibrator";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is home</Text>
      <Vibrator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
