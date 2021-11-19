import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/global'
import colors from '../styles/colors'
import ButtonPrimary from '../styles/ButtonPrimary'


export default function ResetPassword({navigation}) {
    return (
        <ImageBackground
        source={require("../assets/busify/loginBackground.png")}
        style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../assets/busify/busify-logo.png")}/>
                <Text style={globalStyles.titleTextWhite}>BUSIFY</Text>
            </View>

            <View style={styles.drawer}>
                <Text style={globalStyles.titleTextBlack}>RESET</Text>
                <View style={styles.container}>
                    <Text style={styles.label}>Email Address</Text>
                    <View style={styles.input}>
                        <TextInput
                        style={{fontFamily: 'open-sans-regular',}}
                        placeholder="Email"/>
                    </View>
                    
                 

                    <View style={styles.resetPass}> 
                        <Text style={{fontFamily: 'open-sans-bold', fontSize: 12,}}>We will send you a temporary password</Text>
                    </View>

                   
                    <View style={styles.loginButton}>
                        <ButtonPrimary  
                        customWidth="35%"
                        text="Send"/>
                    </View>

                 
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height: '100%',
        alignItems: 'center',
    }, 

    logoContainer:{
        flex: 1,
        alignItems:'center',
        marginTop: 60,
    },

    logo:{
        width: 75,
        height: 75,
    },

    drawer:{
        flex: 2,
        backgroundColor: colors.white,
        width: '100%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 50,
    },
    
    container:{
        marginTop: 40,
    },

    label:{
        fontFamily: 'open-sans-semi',
        color: colors.gray,
        fontSize: 12,
    },

    input:{
        width: '100%',
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },

    resetPass:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },

    reset:{
        fontFamily: 'open-sans-bold',
        fontSize: 11,
        textDecorationLine: 'underline',
        color: colors.primary,
    },

    loginButton:{
        alignItems: 'flex-end',
        marginTop: 20,
    },  



})
