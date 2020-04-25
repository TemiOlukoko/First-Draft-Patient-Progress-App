import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions } from 'react-native';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

// importing icons 
import add from './assets/add.png';
import line from './assets/line3.png';

// bottom nav icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


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

  <View style={styles.bottomNavRectangle}>
          <FontAwesomeIcon icon={ faUserFriends}  style={styles.bottomNavButtonIcon} size= {40} />
          <FontAwesomeIcon icon={ faPhoneAlt} style={styles.bottomNavButtonIcon} size= {40} />
          <FontAwesomeIcon icon={ faHandsHelping } style={styles.bottomNavButtonIcon} size= {40} />
          <FontAwesomeIcon icon={ faQuestion } style={styles.bottomNavButtonIcon} size= {40} color= {"rgba(164,212,174,1)"}/>
          <FontAwesomeIcon icon={ faCog } style={styles.bottomNavButtonIcon} size= {40}/>
  </View>

</View>

  );
}
};

// get height 
var screenHeight = Dimensions.get('window').height;

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
},

  //Bottom Navigation

  bottomNavRectangle: {
    width: '100%',
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: 'stretch',
    alignSelf: 'flex-end',
    elevation: 27,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowRadius: 4,
    shadowOpacity: 2,
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 5,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    position: 'absolute',
    top: screenHeight-70, 

    
  },
  bottomNavButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 1,
    alignItems: 'center'

  },



});