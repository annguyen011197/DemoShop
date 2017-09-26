import React, { Component } from 'react';
import { View,
         Text,
         TouchableOpacity } from 'react-native';



export default class Menu extends Component {

    gotoAuth() {
        const { navigation } = this.props;
        navigation.navigate('Auth_Screen');
    }

    gotoChangeInfo() {
        const { navigation } = this.props;
        navigation.navigate('ChangeInfo_Screen');
    }

    gotoMain() {
        const { navigation } = this.props;
        navigation.navigate('Main_Screen');
    }

    gotoOderHistory() {
        const { navigation } = this.props;
        navigation.navigate('OderHistory_Screen');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <TouchableOpacity
                    onPress={this.gotoMain.bind(this)}
                >
                    <Text>Main</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoAuth.bind(this)}
                >                    
                <Text>Auth</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoChangeInfo.bind(this)}
                >                    
                <Text>ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoOderHistory.bind(this)}
                >                    
                <Text>OderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
