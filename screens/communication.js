import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import * as Speech from "expo-speech";
import Mic from "../assets/Mic.png";

const Communication = () => {
  const [message, setMessage] = useState([]);
  const [audioMessage, setAudioMessage] = useState(
    "क्या आप एक गिलास पानी ला सकते हैं"
  );
  const shortTap = () => {
    const temp = [...message, 1];
    setMessage(temp);
  };
  const longTap = () => {
    const temp = [...message, 2];
    setMessage(temp);
  };
  const speakMessage = () => {
    Speech.speak(audioMessage, { rate: 0.9, pitch: 0.8 });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 / 4 }}>
        <Pressable
          style={{ ...styles.opacity, borderBottomWidth: 3 }}
          onLongPress={() => longTap()}
          onPress={() => shortTap()}
        >
          <Text style={styles.text}>Type here...</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 / 4, flexDirection: "row" }}>
        <Pressable
          style={{ ...styles.opacity, width: "50%", borderRightWidth: 1.5 }}
          onLongPress={() => speakMessage()}
        >
          <Text style={styles.text}>Speak</Text>
        </Pressable>
        <Pressable
          style={{ ...styles.opacity, width: "50%", borderLeftWidth: 1.5 }}
          onLongPress={() => console.log("Suno samne wale ko")}
        >
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
    backgroundColor: "#000000",
  },
  opacity: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f4f4f4",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#f4f4f4",
  },
});
