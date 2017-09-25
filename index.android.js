/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/cpn/App';

export default class SampleReactNativeApp extends Component {
  render() {
    return (
      <View >
        <App />
      </View>
    );
  }
}


AppRegistry.registerComponent('SampleReactNativeApp', () => SampleReactNativeApp);
