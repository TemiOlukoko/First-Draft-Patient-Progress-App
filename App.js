import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

import OnBoarding1 from './PP/Components/Pages/OnBoarding1';
import OnBoarding2 from './PP/Components/Pages/OnBoarding2';
import OnBoarding3 from './PP/Components/Pages/ObBoarding3';
import MentalHealth from './PP/Components/Pages/MentalHealth';

<<<<<<< HEAD
//Trying to import button
import CustomButton from './PP/Components/Pages/CustomButton';

//Import logo
import big from './PP/Components/Pages/assets/big-logo.png';
import test from './PP/Components/Pages/assets/test-logo.png';

=======
>>>>>>> ef15f9b9e1efea8a9f96dff50d720c93fc6ce54c
const Stack = createStackNavigator()

const HomeScreen = ({navigation}) => (
  <View style={{flex:1,
    alignItems:'center',
<<<<<<< HEAD
    justifyContent:'center',
    backgroundColor: '#FFFFFF'}}>
      <Image source={test} style={{ width: 280, marginBottom: 70, height: 160, }}/>
      <CustomButton text="    Sign in    " onPress={()=>navigation.navigate ('Sign in')}/>
      <CustomButton text="Get Started" onPress={()=>navigation.navigate('Welcome-1')}>
        </CustomButton>
=======
    justifyContent:'center',}}>
      <Text style = {styles.header}>Patient Progress</Text>
      <Button title="Sign in"
      onPress={()=>navigation.navigate
        ('Sign in')}
      />
      <TouchableOpacity style={{padding:10, margin:10, backgroundColor: '#00BFA5'}}onPress={()=>{alert("Getting Started..")}}>
        <Text style = {{color: 'white'}}>Get Started </Text>
      </TouchableOpacity>
>>>>>>> ef15f9b9e1efea8a9f96dff50d720c93fc6ce54c
  </View>
)
const SettingScreen = ({navigation}) => (
  <View style= {styles.container}>
      <Text style = {styles.header}>Sign in</Text>
      <TextInput style = {styles.TextInput} placeholder="NHS number:"
      underlineColorAndroid={'transparent'}/>
      <TextInput style = {styles.TextInput} placeholder="Password:"
      secureTextEntry= {true} underlineColorAndroid={'transparent'}/>
      <TouchableOpacity style={{padding:10, margin:1, backgroundColor: '#00BFA5'}}onPress={()=>{alert("Signing in..")}}>
          <Text style = {{color: 'white'}}>Sign in</Text>
      </TouchableOpacity>
      <Button title="Boarding Page"
      onPress={()=>navigation.navigate('Welcome')} //navigate to first onboarding page
      />
  </View>
)

export default class App extends React.Component {
    render() {
        return (
           <NavigationContainer>
             <Stack.Navigator>
               <Stack.Screen options={{title:'Patient Progress Home Screen'}}  name="Home" component = {HomeScreen}/>
               <Stack.Screen name="Sign in" component = {SettingScreen}/>
<<<<<<< HEAD
               <Stack.Screen name="Welcome-1" component = {OnBoarding1}/>
               <Stack.Screen name="Welcome-2" component ={OnBoarding2}/>
               <Stack.Screen name="Welcome-3" component ={OnBoarding3}/>
               <Stack.Screen name="Mental Health" component={MentalHealth}/>
=======
               <Stack.Screen name="Welcome" component = {OnBoarding1}/>
               <Stack.Screen name="OnBoarding2" component ={OnBoarding2}/>
               <Stack.Screen name="Welcome2" component ={OnBoarding3}/> 
>>>>>>> ef15f9b9e1efea8a9f96dff50d720c93fc6ce54c
             </Stack.Navigator>
           </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#FFFFFF',
      paddingLeft: 60,
      paddingRight: 60,
  },
  header: {
    fontSize: 20,
    color: '#000000',
    paddingBottom: 5,
    marginBottom: 20,
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
  },
  Button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000',
    marginTop: 30,
  }
});
