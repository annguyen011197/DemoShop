import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    COLOR,
    ThemeProvider,
    Avatar,
    Button
} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: '#eaecef',
    },
    toolbar: {
        container: {
            height: 10
        },
    },
};

class ButtonCustom extends Component {
    render() {
        return (
            <View
             style={{
                 margin: 5
             }}
            >
            <Button
            raised
            primary
            text={this.props.name}
            style={{
                    container: this.props.selected ? style.selected : style.unselected,
                    text: {
                        color: '#1E1E1E'
                    }
            }}
            onPress={this.props.onPress}
            />
            </View>
        );
    }
}

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            userName: '',
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

    signin() {
        this.setState({
            login: !this.state.login
        });
    }

    render() {
        const { container } = style;
        const SignUp = (
            <View
                style={{
                    alignSelf: 'center',
                    margin: 20
                }}
            >
                <ThemeProvider uiTheme={uiTheme}>
                    <View >
                        <View
                            style={{
                                margin: 20
                            }}
                        >
                            <Avatar
                                icon='face'
                                iconSize={100}
                                size={100}
                            />
                        </View>
                        <ButtonCustom 
                        name='SIGN IN' 
                        onPress={this.gotoAuth.bind(this)}
                        />
                    </View>
                </ThemeProvider>
            </View>
        );
        const SignIn = (
            <View
                style={{
                    alignSelf: 'center',
                    margin: 20
                }}
            >
                <ThemeProvider uiTheme={uiTheme}>
                    <View >
                        <View
                            style={{
                                margin: 20
                            }}
                        >
                            <Avatar
                                icon='face'
                                iconSize={100}
                                size={100}
                            />
                        </View>
                        <View
                            style={{
                                height: '10%'
                            }}
                        >
                            <Text>{this.state.userName}</Text>
                        </View>
                        <ButtonCustom 
                        name='Shop' 
                        selected={this.state.selected === 1}
                        onPress={this.gotoMain.bind(this)}
                        />
                        <ButtonCustom 
                        name='Oder History'
                        selected={this.state.selected === 4}
                        onPress={this.gotoOderHistory.bind(this)}
                        />
                        <ButtonCustom 
                        name='Change Info' 
                        selected={this.state.selected === 3}
                        onPress={this.gotoChangeInfo.bind(this)}
                        />
                        <ButtonCustom 
                        name='Sign Out' 
                        onPress={this.signin.bind(this)}
                        />
                        
                    </View>
                </ThemeProvider>
            </View>
        );
        const MenuView = this.state.login ? SignIn : SignUp;

        return (
            <View style={container}>
                {MenuView}
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        borderRightWidth: 2,
        borderColor: '#FFF',
        flex: 1
    },
    selected: {
        borderRadius: 10,
        backgroundColor: '#568FEA'
    },
    unselected: {
        borderRadius: 10
    }

});
