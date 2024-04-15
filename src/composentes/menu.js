import React from 'react'

import Icons from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../outils/constantes';

const MenuIcon = () => {
   return <Icons

      style={{
         fontSize: 42,
         color: COLOR.bg_White,
         elevation: 5,
         shadowColor: COLOR.black,
         shadowOffset: { width: 2, height: 2 },
         shadowOpacity: 0.75,
      }}
      name='add-circle-sharp' />;
}

export default MenuIcon
