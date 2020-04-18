import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Nurse = props => {
  return (
    <View style={styles.nurseView}>
      <Text styles={styles.nurseName}>{props.name}</Text>
      <Text styles={styles.hospital}>{props.hospital}</Text>
      <Text styles={styles.city}>{props.city}</Text>
    </View>
  )
};

const styles=StyleSheet.create({
  nurseView:{
    padding: 20,
    marginVertical: 0,
    alignItems: 'flex-end',

  },
  
  nursePicture:{},
  
  nurseName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },

  hospital: {
    color: 'black',
    fontWeight: "300",
    fontSize: 14,
  },

  city:{
  color: 'black',
  fontWeight: "100",
  fontSize: 14,},

});

export default Nurse;