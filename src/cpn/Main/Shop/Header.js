import React, { Component } from 'react';
import { Text,
         View,
         TouchableOpacity,
         Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={{ height: height / 10, backgroundColor: 'cyan' }}>
                <TouchableOpacity
                 onPress={this.props.openMenu}
                >
                    <Text> Top bar </Text>
                </TouchableOpacity>
            </View>            
        );
    }
}
