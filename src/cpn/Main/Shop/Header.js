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
        const { iconContainerLeft,
            iconContainerRight,
            container,
            iconContainer,
            textContainer,
            icon,
            text,
            textInput,
            textInputContainer
               } = styles;
        return (
            <View style={{ height: height / 7, backgroundColor: '#568fea', alignItems: 'center' }}>
                <View style={container}>
                    <View style={iconContainerLeft}>
                    <TouchableOpacity
                    onPress={this.props.openMenu}
                    style={iconContainer}
                    >
                        <Image
                        source={icMenu}
                        style={icon}
                        />
                    </TouchableOpacity>
                    </View>
                    <View style={textContainer}>
                        <Text style={text}>Wearing a Dress</Text>
                    </View>
                    <View style={iconContainerRight}>
                    <View style={iconContainer}>
                    <Image
                        source={icLogo}
                        style={icon}
                    />
                    </View>
                    </View>
                </View>
                <View style={textInputContainer}>
                <TextInput
                 style={textInput}
                 underlineColorAndroid='transparent'
                 placeholder='What do you want to buy ?'
                />
                </View>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#568fea',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 5,
        width: '90%'
    },
    iconContainerLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    iconContainerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    iconContainer: {
        width: '50%', 
        alignSelf: 'center'
    },
    textContainer: {
        flex: 3,
        justifyContent: 'space-around'
    },
    icon: {
        height: '70%', 
        width: '80%',
        alignItems: 'center'
    },
    text: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
    },
    textInput: {
        backgroundColor: 'white',
        width: '100%',
        height: '80%',
        textAlignVertical: 'center',
        paddingLeft: 10                        
    },
    textInputContainer: {
        flex: 5,
        backgroundColor: '#568fea',
        alignItems: 'center',
        width: '90%'
    }
});
