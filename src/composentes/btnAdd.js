import React from 'react'

import Icons from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../outils/constantes';

const BtnAdd = () => {
   return <Icons

      style={{
         fontSize: 72,
         color: COLOR.oran1,
         shadowColor: 'red',
         shadowOffset: { width: 0, height: 0 },
         shadowOpacity: 1,
         elevation: 10,
         margin: -3
      }}
      name='add-circle-sharp' />;
}

export default BtnAdd
