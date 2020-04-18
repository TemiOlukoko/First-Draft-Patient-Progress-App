import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Header from './Components/Header'

import Container from './Components/Container'

import Nurse from './Components/Nurse'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Call Nurse"/>
      <Nurse name= "Nurse Mary Poppins"/>
      <Nurse hospital= "St.George's Hospital"/>
      <Nurse city= "Birmingham"/>
      <Container text= "Book a time slot for a call with the nurse"/>
    
      <Container text="Make an urgent call with the nurse"/>
    </View> 
  );
}
const styles=StyleSheet.create({
  screen: {
    flex: 1
  },
  

})