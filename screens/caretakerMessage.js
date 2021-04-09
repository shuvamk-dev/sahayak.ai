import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CaretakerMessage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 / 4 }}>
        <Pressable style={{ ...styles.opacity, borderBottomWidth: 3 }} onLongPress={() => console.log("Lamba tap")} onPress={() => console.log("Chota Tap")}>
          <Text style={styles.text}>Type here...</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 / 4, flexDirection: "row" }}>
        <Pressable style={{ ...styles.opacity, width: '100%' }} onLongPress={() => console.log("Bolaaaa")}>
          <Text style={styles.text}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CaretakerMessage;

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
