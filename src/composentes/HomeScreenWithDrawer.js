import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import CustomDrawerContent from './customDrawerContent';
import Setting from '../screens/setting';
import { COLOR } from '../outils/constantes';


const Drawer = createDrawerNavigator();

function HomeScreenWithDrawer() {
   return (
      <Drawer.Navigator screenOptions={{
         headerTransparent: true,
         headerTitle: '',
         headerTintColor: COLOR.bg_White,
         headerTitleStyle: { fontSize: 32 },
      }} drawerContent={props => <CustomDrawerContent {...props} />}>
         <Drawer.Screen name="Option" component={Home}
         />
      </Drawer.Navigator>
   );
}

export default HomeScreenWithDrawer;
