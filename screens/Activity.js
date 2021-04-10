import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { convertToMorse } from '../components/convertToFromMorse';
import Vibrator from '../components/vibrator';

export default function Activity({ route }) {
    const { time, news, navigation } = route.params;
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    const code = convertToMorse("I am you");
    time ? Vibrator(convertToMorse(hours + " " + min)) : Vibrator(code);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {time && "The Time is: " + hours + ':' + min} {news && "Reading Latest News..."} {navigation && "Navigating Home..."}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#f4f4f4",
    },
})
