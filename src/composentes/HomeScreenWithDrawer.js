import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import CustomDrawerContent from './customDrawerContent';
import Setting from '../screens/Profile';
import { COLOR } from '../outils/constantes';
import Profile from '../screens/Profile';


const Drawer = createDrawerNavigator();

function HomeScreenWithDrawer({ handleLogout }) {

   return (
      <Drawer.Navigator screenOptions={{
         headerTransparent: true,
         headerTitle: '',
         headerTintColor: COLOR.bg_White,
         headerTitleStyle: { fontSize: 32 },
         zIndex: -100,
         headerShown: false,
      }}
         drawerContent={props => <CustomDrawerContent {...props} handleLogout={handleLogout} />}>
         <Drawer.Screen name="Option" component={Home} />
         <Drawer.Screen name='profile' component={Profile} />
      </Drawer.Navigator>
   );
}

export default HomeScreenWithDrawer;
