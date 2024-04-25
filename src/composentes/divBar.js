import { View, Text } from 'react-native'
import React from 'react'
import { COLOR } from '../outils/constantes'

const DivBar = () => {
   return (
      <View
         style={{
            height: 3,
            width: 300,
            backgroundColor: COLOR.oran1,
            alignSelf: 'center',
            marginVertical: 10,
            marginTop: 20,
         }}
      >

      </View>
   )
}

export default DivBar