import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    TouchableOpacity, //wrapper around text
    TouchableHighlight //wrapper around text - blinks when you press button
} from 'react-native';

export default class Login extends React.Component {
    render() {
        return(
            <View styles = {styles.container}>
                <Text style = {styles.header}>Sign in</Text>
                
                <TextInput style = {styles.TextInput} placeholder="NHS number:"
                underlineColorAndroid={'transparent'} />
                
                <TextInput style = {styles.TextInput} placeholder="Password:"
                secureTextEntry= {true} underlineColorAndroid={'transparent'} />

                <TouchableOpacity style={{padding:10, margin:5, backgroundColor: '#00BFA5'}}onPress={()=>{alert("Signing in..")}}>
                    <Text style = {{color: 'white'}}>Sign in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        alignSelf: "stretch", 
    },
    header: {
        fontSize: 24,
        color: '#000000',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#000000',
        borderBottomWidth: 1, 
    },
    TextInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#000000',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }
  });