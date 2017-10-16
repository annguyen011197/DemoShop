import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeView from './HomeView';
import ListProduct from './ListProduct/ListProduct';
import ProductDetail from './ProductDetail/ProductDetail';

import icHome from '../../../../media/appIcon/home.png';


export default class Home extends Component {
    //Set thông tin đầu của mỗi screen 
    static navigationOptions = {
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={icHome}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };


    render() {
        return (
            <HomeNavaigation />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: '80%',
        height: '80%'
    }
});

const HomeNavaigation = StackNavigator(
    {
        Home_View: { screen: HomeView },
        Product_Detail: { screen: ProductDetail },
        List_Product: { screen: ListProduct }
    },
    {
        headerMode: 'none',
    }
);

