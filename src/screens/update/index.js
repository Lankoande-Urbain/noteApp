import { View, Text, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import updateStyle from './style ';
import { Input } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../outils/constantes';
import DivBar from '../../composentes/divBar';
import { Button, color } from '@rneui/base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../../../apiConfig';
import Toast from 'react-native-toast-message';

const UpdateNote = ({ route, navigation }) => {
   const [message, setMessage] = useState('');
   const [titre, setTitre] = useState(route.params.paramTitre);
   const [descrip, setDescrip] = useState(route.params.paramDescrip);
   const [titreError, setTitreError] = useState('');
   const [descripError, setDescripError] = useState('');
   const inputTitre = React.createRef();
   const inputDescrip = React.createRef();
   const { paramId, paramTitre, paramDescrip } = route.params;
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
         const response = await fetch(`${API_BASE_URL}/${paramId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               titre: titre,
               description: descrip,
            }),
         });

         if (!response.ok) {
            console.error('Erreur lors de l\'enregistrement des données');
         }

         Toast.show({
            type: 'info',
            text1: 'Info!!',
            text2: 'La note a été modifiée',
            visibilityTime: 5000,
         });

         // Revenir à la page d'accueil
         navigation.goBack();

      } catch (error) {
         console.error('Erreur lors de l\'enregistrement des données :', error);
      }
   };

   return (
      <View
         style={{
            backgroundColor: COLOR.oran1,
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
         }} >
         {/* header partie */}
         <Header titre={'Update note'} />
         <View style={updateStyle.body} >


            <View>
               <Text style={updateStyle.title}>Update note</Text>
               <DivBar />
            </View>

            {/* Body view  */}
            <View style={updateStyle.form}>
               <Input
                  value={titre}
                  ref={inputTitre}
                  placeholder='Entrer votre titre'
                  errorStyle={{ color: 'red' }}
                  errorMessage={titreError}
                  label='Title'
                  inputStyle={{ color: COLOR.gris, fontStyle: 'italic' }}
                  labelStyle={{ color: COLOR.gris, fontWeight: 'bold', fontSize: 18 }}

                  onChangeText={(val) => setTitre(val)}
               />
               <Input
                  value={descrip}
                  ref={inputDescrip}
                  label='Description'

                  errorStyle={{ color: 'red' }}
                  errorMessage={descripError}
                  placeholder='Entrer votre description'
                  inputStyle={{ color: COLOR.gris, fontStyle: 'italic' }}
                  labelStyle={{ color: COLOR.gris, fontWeight: 'bold', fontSize: 18 }}

                  onChangeText={(val) => setDescrip(val)}
                  multiline
               />
               <Text style={updateStyle.valideMessage}>{message}</Text>

               <Button
                  buttonStyle={{
                     width: 150, marginLeft: 'auto', marginRight: 'auto', fontSize: 18
                  }}
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                     colors: ["#FF9800", "#F44336"],
                     start: { x: 0, y: 0.5 },
                     end: { x: 1, y: 0.5 },
                  }}
                  // type='outline'
                  radius={'lg'}
                  onPress={handleEnregistrer()}

               >Save</Button>

            </View>

         </View>
      </View >

   )
}

export default UpdateNote