import React, { Component } from 'react';
import { View,
         Text,
         Image,
         StyleSheet } from 'react-native';
import icCart from '../../../../media/appIcon/cart.png';

export default class Cart extends Component {
    static navigationOptions = {
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={icCart}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          ),
        };
        
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>
                    Cart Component
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: '80%',
        height: '80%'
    }
});
