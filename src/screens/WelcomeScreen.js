import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

// importing images
import backgroundImage from '../assets/background.jpg';
import logo from '../assets/logo.png';


export default function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={backgroundImage}>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={logo} />

                <Text>Sri Lanka</Text>
            </View>


            <View style={styles.loginButton}>
            </View>

            <View style={styles.registerButton}>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    logo: {
        width: 120,
        height: 210
    },
    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 70
    }
});

