import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-picasso'
import createStyle from './style '
import { Input, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../outils/constantes';
import DivBar from '../../composentes/divBar';
import { Button, color } from '@rneui/base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../../../apiConfig';

const CreacteNote = () => {
   const [message, setMessage] = useState('');
   const [titre, setTitre] = useState('');
   const [descrip, setDescrip] = useState('');
   const [titreError, setTitreError] = useState('');
   const [descripError, setDescripError] = useState('');
   const inputTitre = React.createRef();
   const inputDescrip = React.createRef();
   const insets = useSafeAreaInsets();

   const handleEnregistrer = async () => {

      setDescripError('');
      setTitreError('');
      setMessage('');
      if (titre.trim() === '') {
         setTitreError('Veillez Remplir le titre !');
         inputTitre.current.focus();
         return;
      }
      else if (descrip.trim() === '') {
         setDescripError('Veillez Remplir la description !');
         inputDescrip.current.focus();
         return;
      }

      try {
         const response = await fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               titre: titre,
               description: descrip,
            }),
         });

         if (!response.ok) {
            throw new Error('Erreur lors de l\'enregistrement des données');
         }

         setMessage('Enregistrement Effectuer !')
         // inputTitre.current.focus();
         // inputDescrip.current.focus();
      } catch (error) {
         console.error('Erreur lors de l\'enregistrement des données :', error);
      }
   };

   return (
      <View
         style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            backgroundColor: COLOR.oran1,
         }}
      >
         {/* header partie */}
         <View style={createStyle.header} >

         </View>
         <View style={createStyle.body}>


            <View>
               <Text style={createStyle.title}>Create note</Text>
               <DivBar />
            </View>

            {/* Body view  */}
            <View style={createStyle.form}>
               <Input
                  ref={inputTitre}
                  placeholder='Entrer votre titre'
                  errorStyle={{ color: 'red' }}
                  errorMessage={titreError}
                  label='Titre'
                  inputStyle={{ color: COLOR.black, fontStyle: 'italic' }}
                  labelStyle={{ color: COLOR.gris, fontWeight: 'bold', fontSize: 18 }}

                  leftIcon={
                     <Icon
                        name='title'
                        size={24}
                        color='#ff9800'
                     />
                  }
                  onChangeText={(val) => setTitre(val)}
               />
               <Input
                  ref={inputDescrip}
                  label='Description'

                  errorStyle={{ color: 'red' }}
                  errorMessage={descripError}
                  placeholder='Entrer votre description'
                  inputStyle={{ color: COLOR.black, fontStyle: 'italic' }}
                  labelStyle={{ color: COLOR.gris, fontWeight: 'bold', fontSize: 18 }}
                  leftIcon={
                     <Icon
                        name='article'
                        size={24}
                        color='#ff9800'
                     />
                  }

                  onChangeText={(val) => setDescrip(val)}
                  multiline
               />
               <Text style={createStyle.valideMessage}>{message}</Text>

               <Button
                  buttonStyle={{
                     width: 150, borderWidth: 2, borderColor: '#fff', marginLeft: 'auto', marginRight: 'auto', fontSize: 18,
                  }}
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                     colors: ["#FF9800", "#F44336"],
                     start: { x: 0, y: 0.5 },
                     end: { x: 1, y: 0.5 },
                  }}
                  // type='outline'
                  radius={'lg'}
                  onPress={handleEnregistrer}

               >Enregistrer</Button>

            </View>
         </View>
      </View >

   )
}

export default CreacteNote