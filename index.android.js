/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import App from './src/cpn/App';

export default class DemoShop extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('DemoShop', () => DemoShop);
