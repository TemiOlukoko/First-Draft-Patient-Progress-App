import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Contacts extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Hello from contacts!!!</Text>
            </View>
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
});