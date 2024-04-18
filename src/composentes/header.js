import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR, FONTSIZE } from '../outils/constantes'

const Header = ({ titre }) => {
   return (
      <View style={headerStyles.header}>
         <Text style={headerStyles.title}>{titre}</Text>
      </View>
   )
}

const headerStyles = StyleSheet.create({

   header: {
      flexDirection: 'row',
      backgroundColor: COLOR.oran1,
      padding: 7,
      height: 65,
      justifyContent: 'space-between',

   },
   title: {
      color: COLOR.bg_White,
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      alignSelf: 'center',
      marginVertical: 15,
      marginLeft: 75,
   },
})
export default Header