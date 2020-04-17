import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const HomeScreen = ({navigation}) => (
  <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center',}}>
      <Text>HomeScreen</Text>
      <Button title="Go To Setting Screen"
      onPress={()=>navigation.navigate
        ('Settings')}
      />
  </View>
)
const SettingScreen = ({navigation}) => (
  <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center',}}>
      <Text>Setting Screen</Text>
  </View>
)
export default class App extends React.Component {
    render() {
        return (
           <NavigationContainer>
             <Stack.Navigator>
               <Stack.Screen name="Home" component = {HomeScreen}/>
               <Stack.Screen name="Settings" component = {SettingScreen}/>
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
  },
});
