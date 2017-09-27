import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Authernication from '../Authernication/Authernication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OderHistory from '../OderHistory/OderHistory';


// export default class Main extends Component {
//     gotoAuth() {
//         this.props.navigation.navigate('Auth_Screen');
//     }

//     closeControlPanel = () => {
//         this.drawer.close();
//     };

//     openControlPanel = () => {
//         this.drawer.open();
//     };

//     render() {
//         return (
//             <Drawer
//             ref={(ref) => { this.drawer = ref; }}
//             content={<Menu navigation={this.props.navigation} />}
//             openDrawerOffset={0.4}
//             tapToClose
//             >
//             <Shop open={this.openControlPanel.bind(this)} />
//             </Drawer>
//         );
//     }
// }
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
    initialRouteName: 'Shop_Screen',
    contentComponent: props => <Menu {...props} />,
});

export default class Main extends Component {

    render() {
        return (
            <DrawerNav />
        );
    }
}
