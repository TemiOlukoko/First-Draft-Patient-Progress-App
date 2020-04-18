import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from './assets/logo.png';


export default function OnBoardingOne() {
  return (

    <View style={styles.container}>
      <Image source={logo} style={{ width: 100, marginBottom: 10 }}/>
      <Text style={styles.headings}>Welcome</Text>
      <Text style={styles.textBox}>We know now is a difficult time and the healthcare staff is busy. With Patient Progress you can keep track on how your relatives are doing.</Text>

      <View style={styles.dots}>
        <View style={styles.circleFirst}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>

      <View style={styles.btn}>
        <Button title="Next" color='#58ACA8' />
      </View>

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
