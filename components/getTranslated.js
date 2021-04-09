import React from "react";
import { StyleSheet, Text, View } from "react-native";

const getTranslated = () => {
  fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "application/gzip",
      "x-rapidapi-key": "e22b77cae9msh1e0d36fa11e7c60p109f9fjsna6f877b327fc",
      "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    },
    body: {
      q: "Can I get a glass of water",
      source: "en",
      target: "Hi",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default getTranslated;

const styles = StyleSheet.create({});
