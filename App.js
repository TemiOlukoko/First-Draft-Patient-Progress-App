import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import PlaceHolder from './PP/Components/Pages/PlaceHolder';


const Stack = createStackNavigator()

const HomeScreen = ({navigation}) => (
  <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center',}}>
      <Text style = {styles.header}>Patient Progress</Text>
      <Button title="Sign in"
      onPress={()=>navigation.navigate
        ('Sign in')}
      />
      <TouchableOpacity style={{padding:10, margin:10, backgroundColor: '#00BFA5'}}onPress={()=>{alert("Getting Started..")}}>
        <Text style = {{color: 'white'}}>Get Started </Text>
      </TouchableOpacity>
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
      onPress={()=>navigation.navigate('Boarding 1')}
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
               <Stack.Screen name="Boarding 1" component = {PlaceHolder}/>
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
