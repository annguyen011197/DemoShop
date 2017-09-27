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
import icHome from '../../../../media/appIcon/home.png';


export default class Home extends Component {
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
            // <View style={{ flex: 1, backgroundColor: '#CED8E7' }}>
            //     <TopProduct />
            // </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#CED8E7' }}>
                <Collection />
                <Category />
                <TopProduct />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: '80%',
        height: '80%'
    }
});
