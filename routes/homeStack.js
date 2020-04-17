import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../PP/Components/Pages';
import Contacts from '../PP/Components/Pages'; //.. to come out of current directory

const screens = {
    Login: {
        screen: Login
    },
    Contacts: {
        screen: Contacts
    }
}

const HomeStack = createStackNavigator(screens);//function used to create new stack navigator

export default createAppContainer(HomeStack);//contains all info about navigation stack