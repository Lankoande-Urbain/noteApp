import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert } from 'react-native';
import { stopMapper } from 'react-native-reanimated';

function CustomDrawerContent(props) {
   const { navigation } = props;

   return (
      <DrawerContentScrollView {...props}>
         <DrawerItemList {...props} />
         <DrawerItem
            label="Logout"
            onPress={() => {
               handleLogout();
            }}
         />
         <DrawerItem
            label="Setting"
            onPress={() => {
               Alert.alert('hello')
            }}
         />
      </DrawerContentScrollView>
   );
}
export default CustomDrawerContent;