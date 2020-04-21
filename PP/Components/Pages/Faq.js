import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

// importing icons 
import add from './assets/add.png';
import line from './assets/line3.png';



export default function faqPage() {

  // fonts load
  let [fontsLoaded] = useFonts({
    'Regular': require('./assets/reg.ttf'),
    'Bold': require('./assets/bold.ttf')
  });

  // hooks for buttons 
  const [answer, setAnswer] = useState('');
  const handleAnswer = () => setAnswer('Usually eldery people and individuals with a compromised immune system.');

  const [secondAnswer, setSecondAnswer] = useState('');
  const handleSecondAnswer = () => setSecondAnswer('The recovery can last from one to two weeks and varies from individual to individual.');

   // check if fonts are loaded
   if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (


<View>

{/* THIS IS THE UPPER MENU CODE */}
<View style={styles.upperMenu}>
  <View style={styles.lineFlex}>
    <View style={styles.line}></View>
    <View style={styles.line}></View>
    <View style={styles.line}></View>
  </View>

  <View style={styles.title}><Text style={{fontSize: 23, fontFamily: 'Bold'}}>FAQ</Text></View>
</View>
{/* THIS IS THE UPPER MENU CODE */}

<View style={styles.container}>
  <Text style={styles.bodyTxtBold}>1. Who is at a risk of developing severe illness?</Text>
  <View><Text style={styles.bodyTxt}>{answer}</Text></View>
  {/* <Button title="Test" onPress={handleAnswer}/> */}
</View>

<View style={styles.addBtn}>
<TouchableHighlight onPress={handleAnswer}>
        <Image source={add} />
</TouchableHighlight>
</View>

<View style={styles.lineCont}>
  <Image source={line} />
</View>


<View style={styles.container}>
  <Text style={styles.bodyTxtBold}>2. How long it takes to fully recover?</Text>
  <View><Text style={styles.bodyTxt}>{secondAnswer}</Text></View>
  {/* <Button title="Test" onPress={handleAnswer}/> */}
</View>

<View style={styles.addBtn}>
<TouchableHighlight onPress={handleSecondAnswer}>
        <Image source={add} />
</TouchableHighlight>
</View>

<View style={styles.lineCont}>
  <Image source={line} />
</View>
  


</View>




  );
}
};

// styles 
const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
  },

  upperMenu: {
    width: '100%',
    height: 70,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.27,
    elevation: 6,
    // zIndex needed for iOS
    zIndex:999,
    flexDirection: 'row',
    marginBottom: 30
},

  line: {
    width: 23,
    height: 3,
    backgroundColor: 'black',
    marginBottom: 4
},

lineFlex: {
  marginTop: 29,
  marginLeft: 18
  
},

title: {
  marginTop: 25,
  marginLeft: 260
},

addBtn: {
  marginTop: 5,
  marginLeft: '85%'
},

bodyTxt: {
  fontSize: 18,
  marginBottom: 10,
  fontFamily: 'Regular'
},

bodyTxtBold: {
  fontSize: 18,
  marginBottom: 10,
  fontFamily: 'Bold'
},

lineCont:
{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 18,
  marginBottom: 17
}


});
