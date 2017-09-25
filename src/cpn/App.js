import React, { Component } from 'react';
import { Text,
         StyleSheet,
         View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View stylte={styles.container} >
            <Text style={styles.text}>
                Sample React Native App!
            </Text>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'blue',
      flexDirection: 'column'
    },
    text: {
        margin: 10,
        alignSelf: 'center',
        color: 'red'
    }
  });
