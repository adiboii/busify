import { StyleSheet } from 'react-native';
import colors from './colors';
export const globalStyles = StyleSheet.create({
    
    titleTextWhite: {
        
        fontFamily: 'mulish-black',
        fontSize: 28,
        lineHeight: 40,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
    },
    
    titleTextBlack: {
        
        fontFamily: 'mulish-black',
        fontSize: 28,
        lineHeight: 40,
        color: colors.gray,
        textAlign: 'center',
        letterSpacing: 1,
    },
    
    pargraphBlack: {
        fontFamily: 'open-sans-regular',
        fontSize: 13,
        color: colors.gray,
        lineHeight: 18,
        textAlign: 'center',
    },

    pargraphWhite: {
        fontFamily: 'open-sans-regular',
        fontSize: 13,
        color: 'white',
        lineHeight: 18,
        textAlign: 'center',
    },
})