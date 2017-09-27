import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
    }

    gotoAuth() {
        const { navigation } = this.props;
        navigation.navigate('Auth_Screen');
        this.setState({
            selected: 2
        });
    }

    gotoChangeInfo() {
        const { navigation } = this.props;
        navigation.navigate('ChangeInfo_Screen');
        this.setState({
            selected: 3
        });
    }

    gotoMain() {
        const { navigation } = this.props;
        navigation.navigate('Shop_Screen');
        this.setState({
            selected: 1
        });
    }

    gotoOderHistory() {
        const { navigation } = this.props;
        navigation.navigate('OderHistory_Screen');
        this.setState({
            selected: 4
        });
    }

    render() {
        const { selected } = style;
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <TouchableOpacity
                    onPress={this.gotoMain.bind(this)}
                >
                    <Text
                     style={this.state.selected === 1 ? selected : null}
                    >Main</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoAuth.bind(this)}
                >                    
                <Text
                style={this.state.selected === 2 ? selected : null}
                >Auth</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoChangeInfo.bind(this)}
                >                    
                <Text
                style={this.state.selected === 3 ? selected : null}
                >ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoOderHistory.bind(this)}
                >                    
                <Text
                style={this.state.selected === 4 ? selected : null}
                >OderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    selected: {
        color: 'red'
    }
});
