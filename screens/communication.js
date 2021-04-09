import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Mic from '../assets/Mic.png'

const Communication = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 / 4 }}>
        <Pressable style={{ ...styles.opacity, borderBottomWidth: 3 }} onLongPress={() => console.log("Lamba tap")} onPress={() => console.log("Chota Tap")}>
          <Text style={styles.text}>Type here...</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 / 4, flexDirection: "row" }}>
        <Pressable style={{ ...styles.opacity, width: '50%', borderRightWidth: 1.5 }} onLongPress={() => console.log("Bolaaaa")}>
          <Text style={styles.text}>Speak</Text>
        </Pressable>
        <Pressable style={{ ...styles.opacity, width: '50%', borderLeftWidth: 1.5 }} onLongPress={() => console.log("Suno samne wale ko")}>
          <Image source={Mic} style={{ height: "20%", width: "20%" }} />
        </Pressable>
      </View>
    </View>
  );
};

export default Communication;

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
    fontSize: 25,
    color: "#f4f4f4"
  }
});
