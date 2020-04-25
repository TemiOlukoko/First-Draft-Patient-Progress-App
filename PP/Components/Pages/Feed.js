/*React Native TimeLine ListView / Flatlist*/
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import add from './assets/add.png';
import Jane from './assets/Jane.png';
export default class BasicTimeLine extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: '12:45',
        title: '08/07/2020',
        description:
          'Temperature of 38C.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
        fontSize: 5,
      },
      {
        time: '17:50',
        title: '10/07/2020',
        description:
          'Oxygen therapy administered.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '03:00',
        title: '14/07/2020',
        description:
          'Normal blood pressure.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '09:00',
        title: '18/07/2020',
        description:
          'Weight: 75 kg.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '14:00',
        title: '23/07/2020',
        description:
          'Normal glucose levels.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '13:00',
        title: '26/07/2020',
        description:
          'Heart rate: 80 bpm - Normal heart rate.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
      },
    ];
  }

  render() {
    return (
        <ScrollView style = {{width:'100%'}}>
            {/* THIS IS THE UPPER MENU CODE */}
            <View style={styles.upperMenu}>
            <View style={styles.lineFlex}>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
            </View>

            <View style={styles.title}><Text style={{fontSize: 23, fontWeight: 'Bold'}}>Feed</Text></View>
            </View>
            {/* THIS IS THE UPPER MENU CODE */}

        <View style={styles.container}>
            <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize:18}}/>
        </View>
        <View style={styles.add}>
        <TouchableOpacity onPress={()=> {alert('Requesting update')}}>
            <Image source={add}/>
        </TouchableOpacity>
        </View>
        <View style={styles.Button}>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={()=> {alert('Requesting update')}}>
            <Text style={{fontSize:16, fontWeight: 'Bold', color: '#000000'}}>Request an update</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Jane}>
            <Image source={Jane}/>
        </View>
    <View style={styles.infoBox}><Text style = {{fontSize: 15, fontWeight: 'Bold', color: '#000000', textAlign: 'center'}}>Jane Doe{"\n"}{"\n"}NHS NUMBER: 000 000 0000{"\n"}{"\n"}PROGRES: stable</Text>
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 160,
    marginTop: 75,
    paddingBottom: 190,
    paddingTop: 55,
    paddingHorizontal: 20,
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
Button: {
    marginTop: -35,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginLeft: 70,
    marginRight: 40,
    //borderColor: 'black',
    borderWidth: 0.3,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 0,
    
  },
  add: {
    marginTop: -320,
    marginLeft: 320,
    flex: 1,
    //position: 'absolute',
    zIndex: 1
    //zIndex: 999
    //marginBottom: 5,
    //marginLeft: 70,
  },
  Jane: {
    paddingTop:5,
    marginTop: -716,
    marginBottom: 700,
    alignSelf: 'flex-end',
    //marginRight:40,
  },
  infoBox: {
    paddingTop: 29,
    marginTop: -830,
    marginLeft: 2,
    width: 298,
    height: 120,
    marginBottom: 700,
    backgroundColor: '#FFFFFF'  
  }
});