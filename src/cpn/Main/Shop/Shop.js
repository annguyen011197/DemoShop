import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

const { height } = Dimensions.get('window');

const TabNavigatorShop = TabNavigator({
    Home: {
        screen: Home,
    },
    Contact: {
        screen: Contact,
    },
    Cart: {
        screen: Cart,
    },
    Search: {
        screen: Search,
    }
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            showIcon: 'true',
            labelStyle: {
                fontSize: 9
            },
            iconStyle: {
                width: 26,
                height: 26
            },
            style: {
                backgroundColor: '#e3e7ed',
                height: height / 10,
            },
            activeTintColor: '#28B08A',
            inactiveTintColor: '#666f7c',
        },
        lazy: true
    }
);

export default class Shop extends Component {
    openMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Header openMenu={this.openMenu.bind(this)} />
                <TabNavigatorShop />
            </View>
        );
    }
}
