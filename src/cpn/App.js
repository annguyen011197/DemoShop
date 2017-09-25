import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import HomeStack from './Router';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <HomeStack />
        );
    }
}

