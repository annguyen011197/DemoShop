import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import TopProduct from './TopProduct';
import Category from './Category';
import Collection from './Collection';


export default class Home extends Component {


    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#CED8E7' }}>
                <Collection 
                navigation={this.props.navigation}
                />
                <Category 
                navigation={this.props.navigation}
                />
                <TopProduct 
                navigation={this.props.navigation}
                />
            </ScrollView>
        );
    }
}

