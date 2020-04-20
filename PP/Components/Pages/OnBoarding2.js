import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';


export default function OnBoardingTwo({navigation}) {
  const pressHandler2 = () => {
    navigation.navigate('Welcome-3')
  }  
  return (

    <View style={styles.container}>
      <Image source={logo} style={{ width: 100, marginBottom: 10 }}/>
      <Text style={styles.headings}>Track progress</Text>
      <Text style={styles.textBox}>You can add your loved ones and see how they are doing in real time. If there's something urgent, we will send you a notification.</Text>

      <View style={styles.dots}>
        <View style={styles.circle}></View>
        <View style={styles.circleFirst}></View>
        <View style={styles.circle}></View>
      </View>

      <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={pressHandler2}>
          <Text style={{fontSize:18, fontFamily: 'Bold', color: '#58ACA8'}}>Next</Text>
        </TouchableOpacity>

    </View>


  );
}

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
    },

    headings: {
      fontSize: 23,
      paddingBottom: 6,
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
