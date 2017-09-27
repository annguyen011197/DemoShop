import { StackNavigator } from 'react-navigation';
import Main from './Main/Main';
import Authernication from './Authernication/Authernication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OderHistory from './OderHistory/OderHistory';
// Chua biet dung lam gi :)) 
const HomeStack = StackNavigator({
    Main_Screen: { screen: Main },
    Auth_Screen: { screen: Authernication },
    ChangeInfo_Screen: { screen: ChangeInfo },
    OderHistory_Screen: { screen: OderHistory } },
    { headerMode: 'false' }
);

export default HomeStack;
