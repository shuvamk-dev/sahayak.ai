import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import call from 'react-native-phone-call';

const Home = ({ navigation }) => {
  const phoneNumber = '6397984831';

  const triggerCall = () => {
    const args = {
      number: phoneNumber,
      prompt: true,
    };
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 / 2 }}>
        <Pressable style={{ ...styles.opacity, borderBottomWidth: 3 }} onLongPress={() => navigation.navigate("Communication")}>
          <Text style={styles.text}>Communicate</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 / 2, flexDirection: "row" }}>
        <Pressable style={{ ...styles.opacity, width: '50%', borderRightWidth: 1.5 }} onLongPress={() => navigation.navigate("Daily Activity")}>
          <Text style={styles.text}>Daily{'\n'}Activities</Text>
        </Pressable>
        <Pressable style={{ ...styles.opacity, width: '50%', borderLeftWidth: 1.5 }} onLongPress={triggerCall}>
          <Text style={styles.text}>SOS</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  opacity: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f4f4f4"
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#f4f4f4"
  }
});
