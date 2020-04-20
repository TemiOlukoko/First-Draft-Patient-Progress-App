import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

//Importing navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

//Importing different screens
import OnBoarding1 from './PP/Components/Pages/OnBoarding1';
import OnBoarding2 from './PP/Components/Pages/OnBoarding2';
import OnBoarding3 from './PP/Components/Pages/ObBoarding3';

//Trying to import button
import CustomButton from './PP/Components/Pages/CustomButton';

//Import logo
import logo from './PP/Components/Pages/assets/logo.png';

const Stack = createStackNavigator()

const HomeScreen = ({navigation}) => (
  <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center',}}>
      <Text style = {styles.header}>Patient Progress</Text>
      <CustomButton text="Sign in" onPress={()=>navigation.navigate ('Sign in')}/>
      <CustomButton text="Get Started" onPress={()=>navigation.navigate('Welcome-1')}>
        </CustomButton>
  </View>
)
const SettingScreen = ({navigation}) => (
  <View style= {styles.container}>
      <Text style = {styles.headings}>Sign in</Text>
      <TextInput style = {styles.TextInput} 
      underlineColorAndroid='transparent' 
      placeholder="NHS number:"
      placeholderTextColor='#000000'/>
      <TextInput style = {styles.TextInput} 
      placeholder="Password:" secureTextEntry= {true} 
      underlineColorAndroid={'transparent'}
      placeholderTextColor='#000000'/>
      <CustomButton text="Sign in" onPress={()=>{alert("Signing in..")}}>
        </CustomButton>
      <Image source={logo} style={{ width: 100, marginTop: 240, marginRight: 90, }}/>
  </View>
)
export default class App extends React.Component {
    render() {
        return (
           <NavigationContainer>
             <Stack.Navigator>
               <Stack.Screen options={{title:'Home'}}  name="Home" component = {HomeScreen}/>
               <Stack.Screen name="Sign in" component = {SettingScreen}/>
               <Stack.Screen name="Welcome-1" component = {OnBoarding1}/>
               <Stack.Screen name="Welcome-2" component ={OnBoarding2}/>
               <Stack.Screen name="Welcome-3" component ={OnBoarding3}/>
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
    paddingBottom: 40,
    marginBottom: 20,
    justifyContent: 'flex-start',
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
  },
  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
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
