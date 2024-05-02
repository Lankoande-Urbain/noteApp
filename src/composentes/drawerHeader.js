import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import homeStyle from '../screens/home/style';
import Avatar from './avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerHeader = () => {
   const [userFullName, setUserFullName] = useState('');

   useEffect(() => {
      AsyncStorage.getItem('userFullname').then(value => {
         if (value !== null) {
            setUserFullName(value);
         } else {
            console.log("setUserFullName est nulle");
         }
      }, []);
   }, [])

   return (
      <View style={homeStyle.headerDrawer}>
         <Text style={homeStyle.headerDrawerTitre} >{userFullName.toUpperCase()}</Text>
         <Avatar fullName={userFullName} size={63} />
      </View>
   )
}

export default DrawerHeader