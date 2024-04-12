import { View, Text } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';

const Option = () => {
   return (
      <View>
         <Text>Option</Text>
         <View>

            <Button
               type='outline'
               radius={'lg'}
               color={'warning'}
            >
               <Icon name="loguot" color={COLOR.oran1} />
               Logup</Button>
         </View>
      </View>
   )
}

export default Option