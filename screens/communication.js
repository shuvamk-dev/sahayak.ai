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
import { convertFromMorse, convertToMorse } from "../components/convertToFromMorse";
import Vibrator from "../components/vibrator";

const Communication = () => {
  const [message, setMessage] = useState('');

  const [audioMessage, setAudioMessage] = useState(
    "क्या आप एक गिलास पानी ला सकते हैं"
  );

  const shortTap = () => {
    const temp = message.concat("1");
    setMessage(temp);
  };
  const longTap = () => {
    const temp = message.concat("2");
    setMessage(temp);
  };

  const space = () => {
    const temp = message.concat(" ");
    setMessage(temp);
  };

  const backSpace = () => {
    const temp = message.replace(message[message.length() - 1], '');
    setMessage(temp);
  };

  const speakMessage = () => {
    const text = convertFromMorse(message);
    Speech.speak(text, { rate: 0.9, pitch: 0.8 });
    const a = "";
    setMessage(a);
    const code = convertToMorse("I sexy");
    Vibrator(code);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 / 4, flexDirection: "row" }}>
        <Pressable
          style={{ ...styles.opacity, borderBottomWidth: 3, width: "70%" }}
          onLongPress={() => longTap()}
          onPress={() => shortTap()}
        >
          <Text style={styles.text}>Type here...</Text>
        </Pressable>
        <View style={{ ...styles.opacity, borderBottomWidth: 3, borderLeftWidth: 0.2, width: "30%" }}>
          <Pressable
            style={{ ...styles.opacity, height: "50%", borderBottomWidth: 0.2, width: "100%" }}
            onPress={() => space()}
          >
            <Text style={{ fontSize: 8, color: "#fff" }}>Space</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.opacity, height: "50%", width: "100%" }}
            onPress={() => backSpace()}
          >
            <Text style={{ fontSize: 8, color: "#fff" }}>Backspace</Text>
          </Pressable>
        </View>

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
