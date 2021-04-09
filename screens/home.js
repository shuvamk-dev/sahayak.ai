import React from "react";
import { Button, StyleSheet, Text, Vibration, View } from "react-native";
import Vibrator from "../components/vibrator";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is home</Text>
      <Button
        onPress={() => navigation.navigate("Daily Activity")}
        title="Press to move"
      ></Button>
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
