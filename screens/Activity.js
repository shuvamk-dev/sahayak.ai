import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Activity({ route }) {
    const { time, news } = route.params;
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
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
        fontSize: 25,
        color: "#f4f4f4",
    },
})
