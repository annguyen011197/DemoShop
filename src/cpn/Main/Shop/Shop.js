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
            activeTintColor: 'red',
        }
    }
);

export default class Shop extends Component {
    openMenu() {
        const { open } = this.props;
        open();
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
