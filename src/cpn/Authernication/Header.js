import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    goBack() {
        const { navigation } = this.props;
        navigation.navigate('Shop_Screen');
    }
    render() {
        const { iconContainerLeft,
            iconContainerRight,
            container,
            iconContainer,
            textContainer,
            icon,
            text,
            wapper
               } = styles;
        return (
            <View
                style={wapper}
            >
                <View style={container}>
                    <View style={iconContainerLeft}>
                        <TouchableOpacity
                            onPress={this.goBack.bind(this)}
                            style={iconContainer}
                        >
                            <Image
                                source={icBack}
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
        width: '60%',
        alignSelf: 'center',
        height: '55%',
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
        fontSize: 25,
        color: 'white',
        paddingBottom: 10,
    },
    wapper: {
        height: height / 7,
        backgroundColor: '#568fea',
        alignItems: 'center'
    }
});
