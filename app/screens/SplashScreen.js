import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/busify/gradient-background.png")}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../assets/busify/busify-logo.png")}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },

    logo:{
        width: 100,
        height: 100,
        marginBottom: 10,
    },

    logoContainer:{
        position: 'absolute',
        top: 150,
        alignItems: 'center',
    },
})
