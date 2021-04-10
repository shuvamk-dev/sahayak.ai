import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as SMS from 'expo-sms';
import { convertFromMorse } from "../components/convertToFromMorse";

const CaretakerMessage = () => {

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

  const sendMessage = () => {
    const text = convertFromMorse(message)
    const isAvailable = SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = SMS.sendSMSAsync(
        ['6397984831'],
        text
      );
    } else {
      console.log("can't find SMS service")
    }
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
          style={{ ...styles.opacity, width: "100%" }}
          onLongPress={sendMessage}
        >
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
    fontSize: 22,
    color: "#f4f4f4"
  }
});
