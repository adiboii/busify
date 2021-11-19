import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from './colors'
import { TouchableOpacity } from 'react-native'

export default function ButtonWhite({text, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.white,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25,
        
    },

    text: {
        fontFamily: 'mulish-bold',
        color: colors.primary,
        fontSize: 13,
    },


})
