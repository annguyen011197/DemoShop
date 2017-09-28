import React, { Component } from 'react';
import { 
View,
Text 
} from 'react-native';
import Header from './Header';
import SigIn from './SignIn';
import SigUp from './SignUp';

export default class Authernication extends Component {
    render() {
        return (
            <View>
                <Header />
                <SigUp />
            </View>
        );
    }
}