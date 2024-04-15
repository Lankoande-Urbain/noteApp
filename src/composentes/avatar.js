import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../outils/constantes';

const Avatar = ({ fullName, size = 50, onPress }) => {
   const initials = fullName ? fullName.split(' ').map(name => name[0]).join('') : '';

   return (
      <TouchableOpacity onPress={onPress} style={{
         height: size,
         width: size,
         borderRadius: size / 2,
         backgroundColor: '#fff',
         borderColor: COLOR.oran2,
         borderWidth: 4,
         justifyContent: 'center',
         alignItems: 'center',
         elevation: 3,
      }}>
         {initials ? (
            <Text style={{
               color: COLOR.oran1, fontSize: size / 2, fontWeight: 'bold'
            }}>
               {initials}
            </Text>
         ) : null}
      </TouchableOpacity>
   );
};

export default Avatar;
