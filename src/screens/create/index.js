import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import createStyle from './style '
import { Input, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../outils/constantes';
import DivBar from '../../composentes/divBar';
import { Button, color } from '@rneui/base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../../../apiConfig';
import Toast from 'react-native-toast-message';
import Header from '../../composentes/header';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CreacteNote = ({ navigation }) => {

   const { t } = useTranslation();
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
         setTitreError(t('screens.create.error.title'));
         inputTitre.current.focus();
         return;
      }
      else if (descrip.trim() === '') {
         setDescripError(t('screens.create.error.description'));
         inputDescrip.current.focus();
         return;
      }
      const userId = await AsyncStorage.getItem('userId');
      // console.log(userId);
      try {
         const response = await fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               titre: titre,
               description: descrip,
               userId: userId,

            }),
         });

         if (!response.ok) {
            throw new log(t('screens.create.error.database'));
         }

         // Afficher le toast
         Toast.show({
            type: 'info',
            text1: t('screens.create.info.text1'),
            text2: t('screens.create.info.text2'),
            visibilityTime: 5000,
         });

         // Revenir à la page d'accueil
         navigation.replace('home');

      } catch (error) {
         console.log(t('screens.create.error.database'), error);
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
         <Header
            titre={t('screens.create.title')}
            isDrawerShown={false}
            onSubmit={() => navigation.goBack()}
         />
         <View style={createStyle.body}>

            {/* Body view  */}
            <View style={createStyle.form}>
               <Input
                  ref={inputTitre}
                  label={t('screens.create.label.title')}
                  placeholder={t('screens.create.placeholder.title')}
                  errorStyle={{ color: 'red' }}
                  errorMessage={titreError}
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
                  label={t('screens.create.label.description')}
                  placeholder={t('screens.create.placeholder.description')}
                  errorStyle={{ color: 'red' }}
                  errorMessage={descripError}
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
                     width: 280,
                     marginLeft: 'auto',
                     marginRight: 'auto',
                     elevation: 10,
                     borderRadius: 25,
                     margin: 15,
                  }}

                  titleStyle={{
                     fontWeight: 'bold',
                     fontSize: 21,
                     letterSpacing: 2.5,
                  }}

                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                     colors: ["#FF9800", "#F44336"],
                     start: { x: 0, y: 0.5 },
                     end: { x: 1, y: 0.5 },
                  }}
                  // type='outline'
                  // radius={'lg'}
                  onPress={handleEnregistrer}


               >{t('screens.create.button')}</Button>

            </View>
         </View>
      </View >

   )
}

export default CreacteNote