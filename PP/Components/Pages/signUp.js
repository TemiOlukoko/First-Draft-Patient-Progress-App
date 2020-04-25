import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet
} from 'react-native';

export default class PlaceHolder extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Sign Up</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});