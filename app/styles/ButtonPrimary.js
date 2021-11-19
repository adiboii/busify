import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from './colors'
import { TouchableOpacity } from 'react-native'

export default function ButtonPrimary({text, onPress, customWidth}) {
    return (
        <TouchableOpacity style={[styles.button, {width: customWidth}]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25,
    },

    text: {
        fontFamily: 'mulish-bold',
        color: colors.white,
        fontSize: 13,
    },


})
