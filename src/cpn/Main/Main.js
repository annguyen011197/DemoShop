import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Authernication from '../Authernication/Authernication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OderHistory from '../OderHistory/OderHistory';

const { height } = Dimensions.get('window');

const DrawerNav = DrawerNavigator({
    Shop_Screen: {
        screen: Shop
    },
    Auth_Screen: { 
        screen: Authernication 
    },
    ChangeInfo_Screen: { 
        screen: ChangeInfo 
    },
    OderHistory_Screen: { 
        screen: OderHistory 
    } 
}, {
    drawerWidth: height / 4,
    initialRouteName: 'Shop_Screen', /*screen gốc  */
    contentComponent: props => <Menu {...props} />, /*sử dụng component để làm drawer */
});

export default class Main extends Component {

    render() {
        return (
            <DrawerNav />
        );
    }
}
