import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './PP/Components/Pages/DrawerContent';
import Feed from './PP/Components/Pages/Feed';
import About from './PP/Components/Pages/About'
import Settings from './PP/Components/Pages/Settings'

const Drawer = createDrawerNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default App;
