import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import homeStyle from '../screens/home/style';
import Avatar from './avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerHeader = () => {
   const [userFullName, setUserFullName] = useState('');

   useEffect(() => {
      AsyncStorage.getItem('user_fullname').then(value => {
         if (value !== null) {
            setUserFullName(value);
         }
      }, []);
   }, [])

   return (
      <View style={homeStyle.headerDrawer}>
         <Text style={homeStyle.headerDrawerTitre} >{userFullName.toUpperCase()}</Text>
         <Avatar fullName={userFullName} size={55} />
      </View>
   )
}

export default DrawerHeader