import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function Mental() {

  //Make boxes for feed
  const [update, infoUpdate] = useState([
    {info: '    08/07/2020 at 12:45\n \n    Temperature of 38C.                ', key: '1'},
    {info: '10/07/2020 at 17:50\n \nOxygen therapy administered.   ', key: '2'},
    {info: '14/07/2020 at 03:00\n \nBlood pressure 140/90 mm Hg', key: '3'},
    {info: '18/07/2020 at 09:00\n \nWeight: 75 kg.                               ', key: '4'},
    {info: '23/07/2020 at 14:00\n \nGlucose levels: 7.8 mmol/L        ', key: '5'},
    {info: '26/07/2020 at 13:00\n \nHeart rate: 80 bpm.\n \n Normal heart rate.                       ', key: '6'},
  ]);

    let [fontsLoaded] = useFonts({
        'Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'semiBold': require('./assets/fonts/Montserrat-SemiBold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <ScrollView style = {{width:'100%'}}>
              <View>
                  {/* THIS IS THE UPPER MENU CODE */}
                  <View style={styles.upperMenu}>
                      <View style={styles.lineFlex}>
                          <View style={styles.line}></View>
                          <View style={styles.line}></View>
                          <View style={styles.line}></View>
                      </View>

                      <View style={styles.title}><Text style={{ fontSize: 20, fontFamily: 'semiBold' }}>Feed</Text></View>
                  </View>
                  {/* THIS IS THE UPPER MENU CODE */}
                  
                  <View style={styles.container}>
                    { update.map((item) => {
                      return(
                        <View key = {item.key}>
                          <Text style ={styles.item}>{item.info}</Text>
                        </View>
                      );
                    })}
                </View>
                <TouchableOpacity>
                  <View style = {styles.button}>
                  <Text style={styles.buttonText}>Request an update</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    upperMenu: {
        width: '100%',
        height: 70,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.27,
        elevation: 6,
        // zIndex needed for iOS
        zIndex: 999,
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
        marginLeft: 300
    },

    container: {
        //flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 70,
        paddingHorizontal: 20,
        paddingBottom: 150
        //justifyContent: 'center',
        //alignSelf: 'center'
    },
    item: {
      marginTop: 40,
      padding: 15,
      backgroundColor: '#FFFFFF',
      fontSize: 15,
      marginLeft: -40,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#BDBDBD'
      //shadowColor: 'black'
    },
    button: {
      margin: 5,
      borderRadius: 40,
      paddingVertical: 5,
      paddingHorizontal: 70,
      marginBottom: 100,
      backgroundColor: '#00BFA5'
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center'
  }
});
