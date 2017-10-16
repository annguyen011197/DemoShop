import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import {
    ThemeProvider,
    Button
} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: '#568FEA',
    },
    toolbar: {
        container: {
        },
    },
};

const { height } = Dimensions.get('window');

export default class Footer extends Component {
    gotoSignIn() {
        const { change } = this.props;
        change(false);
    }
    gotoSignUp() {
        const { change } = this.props;
        change(true);
    }
    render() {
        const { 
            wapper,
            buttonStyle,
            textStyle
        } = styles;
        return (
            <View
             style={wapper}
            >
            <ThemeProvider uiTheme={uiTheme}>
                <Button
                primary
                text='SIGN IN'
                style={{
                    container: [buttonStyle, {
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15
                    }],
                    text: this.props.check ? {} : textStyle,
                }}
                onPress={this.gotoSignUp.bind(this)}
                />
                </ThemeProvider>
            <ThemeProvider uiTheme={uiTheme}>
                <Button
                primary
                text='SIGN UP'
                style={{
                    container: [buttonStyle, {
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15
                    }],
                    text: !this.props.check ? {} : textStyle,
                }}
                onPress={this.gotoSignIn.bind(this)}
                />
            </ThemeProvider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        flexDirection: 'row',
        height: height / 7,
        backgroundColor: '#568fea',
        justifyContent: 'center'
    },
    buttonStyle: { 
        width: '40%',
        backgroundColor: 'white',
        margin: 1
    },
    textStyle: {
        color: '#F0F0F0'
    }
});
