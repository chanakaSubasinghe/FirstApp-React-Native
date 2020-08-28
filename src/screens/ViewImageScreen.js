import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// importing images
import itemImage from '../assets/item.jpg';
import colors from '../config/colors';


export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image
                resizeMode="contain"
                style={styles.image}
                source={itemImage} />

        </View>

    );
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        top: 40,
        left: 30,
        position: 'absolute'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        height: 50,
        width: 50,
        top: 40,
        right: 30,
        position: 'absolute'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
