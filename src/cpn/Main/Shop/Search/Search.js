import React, { Component } from 'react';
import { View,
         Text,
         Image,
         StyleSheet } from 'react-native';
import icSearch from '../../../../media/appIcon/search.png';

export default class Search extends Component {
    static navigationOptions = {
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={icSearch}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          ),
        };
        
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>
                    Search Component
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
