// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SplashScreen from './app/screens/SplashScreen';
import OnBoardingOne from './app/screens/OnBoardingOne';
import OnBoardingTwo from './app/screens/OnBoardingTwo';
import OnBoardingThree from './app/screens/OnBoardingThree';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import ResetPassword from './app/screens/ResetPassword';

import { useFonts, Mulish_600SemiBold, Mulish_700Bold,Mulish_900Black } from '@expo-google-fonts/mulish';
import { OpenSans_300Light ,OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';


const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'mulish-semibold': Mulish_600SemiBold,
    'mulish-bold': Mulish_700Bold,
    'mulish-black': Mulish_900Black,
    'open-sans-light': OpenSans_300Light,
    'open-sans-regular': OpenSans_400Regular,
    'open-sans-semi': OpenSans_600SemiBold,
    'open-sans-bold': OpenSans_700Bold,
  });

    if(fontsLoaded){
      return(
        <NavigationContainer>
          <Stack.Navigator>
         
            <Stack.Screen options={{headerShown: false}} name="OnBoardingOne" component={OnBoardingOne} />
            <Stack.Screen options={{headerShown: false}}name="OnBoardingTwo" component={OnBoardingTwo} />
            <Stack.Screen options={{headerShown: false}} name="OnBoardingThree" component={OnBoardingThree} />
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
            <Stack.Screen options={{headerShown: false}} name="ResetPassword" component={ResetPassword} />
            
        </Stack.Navigator>
      </NavigationContainer>
      );
     
    }else{
      return(
        <SplashScreen/> 
      )
      
    }
    
}

const styles = StyleSheet.create({
 
});
