import React from 'react'

import Icons from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../outils/constantes';

const BtnAdd = () => {
   return <Icons

      style={{
         fontSize: 72,
         color: COLOR.oran1,
         elevation: 5,
         shadowColor: COLOR.black,
         shadowOffset: { width: 2, height: 2 },
         shadowOpacity: 0.75,
         elevation: 100,
      }}
      name='add-circle-sharp' />;
}

export default BtnAdd
