import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function OnBoardingThree() {

// fonts load
let [fontsLoaded] = useFonts({
  'Regular': require('./assets/reg.ttf'),
  'Bold': require('./assets/bold.ttf')
  });

// check if fonts are loaded
if (!fontsLoaded) {
  return <AppLoading />;
  } else {

  return (

    <View style={styles.container}>
      <Image source={logo} style={{ width: 100, marginBottom: 10 }}/>
      <Text style={styles.headings}>Seek help</Text>
      <Text style={styles.textBox}>Your health matters as well and we offer you a full support with mental health tips.</Text>

      <View style={styles.dots}>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circleFirst}></View>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={()=>{alert('Sign up')}}>
          <Text style={{fontSize:18, fontFamily: 'Bold', color: '#58ACA8'}}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>


  );
}
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingLeft: 37,
      paddingRight: 38,
    },

    textBox: {
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Regular'
    },

    headings: {
      fontSize: 23,
      paddingBottom: 6,
      fontFamily: 'Bold'
  },

  circle: {
    width: 9,
    height: 9,
    borderRadius: 100/2,
    backgroundColor: '#C4C4C4',
    margin: 3,
    marginTop: 45,
  },

  circleFirst: {
    width: 9,
    height: 9,
    borderRadius: 100/2,
    backgroundColor: '#58ACA8',
    margin: 3,
    marginTop: 45,
  },

  dots: {
    flexDirection: 'row',
  },

  btn: {
    marginTop: 20
  }


  });
