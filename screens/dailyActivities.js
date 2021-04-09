import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const DailyActivities = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 / 2, flexDirection: "row" }}>
        <Pressable style={{ ...styles.opacity, width: '50%', borderRightWidth: 1.5, borderBottomWidth: 3 }} onLongPress={() => console.log("Time")}>
          <Text style={styles.text}>Time</Text>
        </Pressable>
        <Pressable style={{ ...styles.opacity, width: '50%', borderLeftWidth: 1.5, borderBottomWidth: 3 }} onLongPress={() => console.log("News")}>
          <Text style={styles.text}>News</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 / 2, flexDirection: "row" }}>
        <Pressable style={{ ...styles.opacity, width: '50%', borderRightWidth: 1.5 }} onLongPress={() => navigation.navigate("Caretaker Message")}>
          <Text style={styles.text}>Chat with{'\n'}Caretaker</Text>
        </Pressable>
        <Pressable style={{ ...styles.opacity, width: '50%', borderLeftWidth: 1.5 }} onLongPress={() => console.log("navigate to Home")}>
          <Text style={styles.text}>Navigation</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DailyActivities;

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
