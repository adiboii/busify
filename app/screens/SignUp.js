import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/global'
import colors from '../styles/colors'
import ButtonPrimary from '../styles/ButtonPrimary'
import { NavigationContainerRefContext } from '@react-navigation/native'


export default function SignUp({navigation}) {
    return (
        <ImageBackground
        source={require("../assets/busify/loginBackground.png")}
        style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../assets/busify/busify-logo.png")}/>
            </View>

            <View style={styles.drawer}>
                <Text style={globalStyles.titleTextBlack}>SIGN UP</Text>
                <View style={styles.container}>

                    <Text style={styles.label}>First Name</Text>
                    <View style={styles.input}>
                        <TextInput
                        style={{fontFamily: 'open-sans-regular', fontSize: 12,}}
                        placeholder="First Name"/>
                    </View>

                    <Text style={styles.label}>Last Name</Text>
                    <View style={styles.input}>
                        <TextInput
                        style={{fontFamily: 'open-sans-regular', fontSize: 12,}}
                        placeholder="Last Name"/>
                    </View>

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

                    <Text style={styles.label}>Re-enter Password</Text>
                    <View style={styles.input}>
                        <TextInput
                        style={{fontFamily: 'open-sans-regular',fontSize: 12,}}
                        placeholder="Password"/>
                    </View>

                   
                    <View style={styles.signUpButton}>
                        <ButtonPrimary  
                        customWidth="35%"
                        text="Sign Up"/>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.login}> 
                            <Text style={[globalStyles.pargraphBlack,{fontFamily: 'open-sans-semi'}]}>Don't have an account yet? </Text>
                            <TouchableOpacity onPress={()=> navigation.navigate("Login")}><Text style={styles.loginButton}>Login</Text></TouchableOpacity>
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
        margin: 20,
    },

    logo:{
        width: 75,
        height: 75,
    },
    

    drawer:{
        flex: 7,
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
        marginBottom: 10,
    },

    loginButton:{
        fontFamily: 'open-sans-bold',
        fontSize: 13,
        textDecorationLine: 'underline',
        color: colors.primary,
    },

    signUpButton:{
        alignItems: 'flex-end',
        marginTop: 20,
    },  

    footer: {
        justifyContent:'flex-end',
        height:70,
    },

    login:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },



})
