import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/global'
import colors from '../styles/colors'
import ButtonPrimary from '../styles/ButtonPrimary'


export default function Login({navigation}) {
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
                <Text style={globalStyles.titleTextBlack}>LOGIN</Text>
                <View style={styles.container}>
                    <Text style={styles.label}>Email Address</Text>
                    <View style={styles.input}>
                        <TextInput
                         style={{fontFamily: 'open-sans-regular',fontSize: 12,}}
                        placeholder="Email"/>
                    </View>
                    
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.input}>
                        <TextInput
                        style={{fontFamily: 'open-sans-regular',fontSize: 12,}}
                        placeholder="Password"/>
                    </View>

                    <View style={styles.resetPass}> 
                        <Text style={[globalStyles.pargraphBlack,{fontSize: 11, }]}>Forgot your password?  </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("ResetPassword")}><Text style={styles.reset}>Reset Password</Text></TouchableOpacity>
                    </View>

                   
                    <View style={styles.loginButton}>
                        <ButtonPrimary  
                        customWidth="35%"
                        text="Login"/>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.signUp}> 
                            <Text style={[globalStyles.pargraphBlack, {fontFamily: 'open-sans-semi'}]}>Don't have an account yet? </Text>
                            <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}><Text style={styles.signUpButton}>Sign Up</Text></TouchableOpacity>
                        </View>
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
        marginTop: 20,
    },

    label:{
        fontFamily: 'open-sans-semi',
        color: colors.gray,
        fontSize: 10,
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
        fontSize: 12,
        textDecorationLine: 'underline',
        color: colors.primary,
    },

    signUpButton:{
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        textDecorationLine: 'underline',
        color: colors.primary,
    },

    loginButton:{
        alignItems: 'flex-end',
        marginTop: 20,
    },  

    footer: {
        justifyContent:'flex-end',
        height:100,
    },

    signUp:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
