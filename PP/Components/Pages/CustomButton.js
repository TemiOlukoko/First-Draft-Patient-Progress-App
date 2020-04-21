import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function CustomButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        margin: 5,
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 70,
        backgroundColor: '#00BFA5'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})