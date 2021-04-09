import React from "react";
import { Button, StyleSheet, Text, Vibration, View } from "react-native";

const Vibrator = () => {
  const text = ". - . -";
  const vibDot = () => {
    Vibration.vibrate(2000);
  };
  const vibDash = () => {
    Vibration.vibrate(3000);
  };
  const vibSpace = () => {
    Vibration.vibrate(1000);
  };
  const vib = () => {
    let temp = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ".") temp.push(400);
      else if (text[i] === "-") temp.push(1000);
      else temp.push(2000);
      if (i !== text.length) temp.push(400);
    }
    console.log(temp);
    Vibration.vibrate(temp);
    // Vibration.vibrate(1000);
  };
  return (
    <View>
      <Button title="Press" onPress={vib} />
    </View>
  );
};

export default Vibrator;

const styles = StyleSheet.create({});
