import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet
} from 'react-native';

export default class MentalHealth extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Welcome</Text>
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
    