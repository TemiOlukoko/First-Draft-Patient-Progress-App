import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from './assets/logo.png';


<<<<<<< HEAD
export default function OnBoardingThree({navigation}) {
  const pressHandler3 = () => {
    navigation.navigate('Mental Health')
  }  

// fonts load
let [fontsLoaded] = useFonts({
  'Regular': require('./assets/reg.ttf'),
  'Bold': require('./assets/bold.ttf')
  });

// check if fonts are loaded
if (!fontsLoaded) {
  return <AppLoading />;
  } else {

=======
export default function OnBoardingThree() {
>>>>>>> ef15f9b9e1efea8a9f96dff50d720c93fc6ce54c
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
<<<<<<< HEAD
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={pressHandler3}>
          <Text style={{fontSize:18, fontFamily: 'Bold', color: '#58ACA8'}}>Next</Text>
        </TouchableOpacity>
=======
        <Button title="Next" color='#58ACA8' />
>>>>>>> ef15f9b9e1efea8a9f96dff50d720c93fc6ce54c
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
