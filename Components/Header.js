import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text styles={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

const styles=StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 4,
    elevation: 5,
  },

  headerTitle: {
    color: 'black',
    fontSize: 30,
  }
});

export default Header;