import React, { Component } from 'react';
import { View,
         Text,
         TouchableOpacity } from 'react-native';

export default class Main extends Component {
    gotoAuth() {
        this.props.navigation.navigate('Auth_Screen');
    }
    render() {
        return (
            <View>
            <Text>
                Main Cpn
            </Text>
            <TouchableOpacity
             onPress={this.gotoAuth.bind(this)}
            >
            <Text>
                Authernication
            </Text>
            </TouchableOpacity>
            </View>
        );
    }
}
