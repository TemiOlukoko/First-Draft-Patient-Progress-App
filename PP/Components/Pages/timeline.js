/*React Native TimeLine ListView / Flatlist*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

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
          'Blood pressure 140/90 mm Hg.',
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
          'Glucose levels: 7.8 mmol/L.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '13:00',
        title: '26/07/2020',
        description:
          'Heart rate: 80 bpm - Normal heart rate.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
    ];
  }

  render() {
    return (
    <ScrollView style = {{width:'100%'}}>
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 25,
            textAlign: 'right',
            fontWeight: 'bold',
          }}>
          Feed
        </Text>
        <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize:18}}/>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 150,
    marginTop: 100
  },
});