import React, { Component } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    ThemeProvider,
    Button
} from 'react-native-material-ui';


const { height } = Dimensions.get('window');

const uiTheme = {
    palette: {
        primaryColor: 'green',
    },
    toolbar: {
        container: {
        },
    },
};

export default class SignIn extends Component {

    render() {
        const {
            wapper,
            textInput,
        } = styles;

        return (
            <View
                style={wapper}
            >
                <TextInput
                    style={textInput}
                    placeholder='Enter Your Email'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={textInput}
                    placeholder='Enter Your Password'
                    underlineColorAndroid='transparent'
                />
                <ThemeProvider uiTheme={uiTheme}>
                    <Button
                        text='SIGN IN'
                        style={{
                            container: {
                                width: '80%',
                                height: '10%',
                                margin: 10,
                                alignSelf: 'center',
                                borderRadius: 6,
                                borderWidth: 1,
                                borderColor: 'white'
                            },
                            text: {
                                color: 'white'
                            }
                        }}
                    />
                </ThemeProvider >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        paddingTop: height / 13,
        height: (height / 7) * 5,
        backgroundColor: '#568fea'
    },
    textInput: {
        backgroundColor: '#FFF',
        margin: 10,
        width: '80%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 6,
        color: '#1E1E1E',
        padding: 12,
        alignItems: 'center'
    },
});
