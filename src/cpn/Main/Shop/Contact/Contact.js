import React, { Component } from 'react';
import { View,
         Text,
         Image,
         StyleSheet } from 'react-native';
import icContact from '../../../../media/appIcon/contact.png';

export default class Contact extends Component {
    static navigationOptions = {
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={icContact}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          ),
        };
        
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>
                 Contact Component
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
