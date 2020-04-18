import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Container = props => {
  return (
    <View style={styles.container}>
      <Text styles={styles.containerText}>{props.text}</Text>
    </View>
  )
};

const styles=StyleSheet.create({
  container:{
    padding: 50,
    marginLeft: 40,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 4,
    shadowOpacity: 2,
    elevation: 5,
  },

  containerText:{
    color: 'black',
    fontWeight: "500",
    fontSize: 14,
  }
});

export default Container;