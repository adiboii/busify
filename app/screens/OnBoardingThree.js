import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'
import colors from '../styles/colors'
import ButtonWhite from '../styles/ButtonWhite'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function OnBoardingThree({navigation}) {
    return (    
        
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require("../assets/busify/simple.png")}
                />
            </View>
            <ImageBackground
                    style={styles.drawer}
                    imageStyle={{  borderTopLeftRadius: 50, borderTopRightRadius: 50,}}
                    source={require("../assets/busify/drawer.png")}>
                    <Text style={globalStyles.titleTextWhite}>Simple and  {"\n"}Intuitive</Text>
                    <Text style={[globalStyles.pargraphWhite, styles.paragraph]}>
                    We care about you! Busify has a simple and intuitive design that makes the application easy to use and understand.</Text>

                    <View style={styles.lower}>
                        <TouchableOpacity ><Text style={styles.skip}>Skip</Text></TouchableOpacity>
                        <Text style={styles.dots}></Text>
                        <ButtonWhite text="NEXT" onPress={()=> navigation.navigate("Login")}/>
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },

    imageContainer:{
        flex: 1.4,
        justifyContent:'center',
        alignItems: 'center',
    },

    image:{
        width: 350,
        height: 350,

    },

    drawerContainer:{
        flex:1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    drawer:{
        flex: 1,
        paddingTop: 60,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        alignItems:'center',
    },

    paragraph:{
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 10,
    },

    lower:{
        position: 'absolute',
        bottom: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    nextButton:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },

    skip:{
        flex: 1,
        color: colors.white,
        fontFamily: 'open-sans-semi',
    },

    dots:{
        flex: 3,
    }

})
