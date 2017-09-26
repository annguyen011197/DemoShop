import React, { Component } from 'react';
import { Text,
         View,
         TouchableOpacity,
         Dimensions,
         Image,
         StyleSheet,
         TextInput } from 'react-native';
import icMenu from '../../../meida/appIcon/ic_menu.png';
import icLogo from '../../../meida/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { iconContainer,
            container,
            textContainer,
            icon,
            text,
            textInput
               } = styles;
        return (
            <View style={{ height: height / 8, backgroundColor: 'cyan' }}>
                <View style={container}>
                    <TouchableOpacity
                    onPress={this.props.openMenu}
                    style={iconContainer}
                    >
                        <Image
                        source={icMenu}
                        style={icon}
    
                        />
                    </TouchableOpacity>
                    <View style={textContainer}>
                        <Text style={text}>Wearing a Dress</Text>
                    </View>
                    <View style={iconContainer}>
                        <Image
                        source={icLogo}
                        style={icon}
                        />
                    </View>
                </View>
                <TextInput
                 style={textInput}
                />
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#568fea',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 7
    },
    iconContainer: {
        // width: height / 20,
        // height: height / 20,
       // margin: 10,
        flex: 1,
        justifyContent: 'space-around',
    },
    textContainer: {
        flex: 3,
        justifyContent: 'space-around'
    },
    icon: {
        alignSelf: 'center',
        alignContent: 'stretch',
        height: '80%',
        width: '40%',
    },
    text: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
    },
    textInput: {
        flex: 3
    },
});
