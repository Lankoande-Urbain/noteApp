import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input, Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Header from '../../composentes/header';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@rneui/themed';
import UploadImage from '../../composentes/UploadImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';
import Toast from 'react-native-toast-message';
import ProfileStyle from './style';


const Profile = ({ navigation }) => {

   const { t } = useTranslation();
   const [fullname, setFullname] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [imgPath, setImgPath] = useState('');

   // Error State
   const [fullnameError, setFullnameError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [imgPathError, setImgPathError] = useState('');
   let db;
   const [userId, setUserId] = useState(null);
   const [sourcePath, setSourcePath] = useState(null);


   const errorToast = (message) => {
      Toast.show({
         type: 'error',
         text1: 'Error !!',
         text2: message,
         visibilityTime: 3000,
         topOffset: -100,
      });
   }
   const handleImageChange = (nouvelleVariable) => {
      setImgPath(nouvelleVariable);
   };

   const getImgPathSource = (nouvelleVariable) => {
      setSourcePath(nouvelleVariable);
   };

   const copyImg = (sourcePath, destinationPath) => {
      RNFS.copyFile(sourcePath, destinationPath)
         .then(() => {
            console.log('Photo copiée dans le dossier du serveur');
         })
         .catch((error) => {
            console.log('Erreur lors de la copie de la photo : ', error);
         });
   }
   const UpdateProfile = (userId, fullname, email, password, imgPath, sourcePath) => {

      const db = SQLite.openDatabase(
         {
            name: 'mybd',
            location: 'default',
         },
         () => { },
         error => { console.log(error); }
      );

      db.transaction(tx => {
         tx.executeSql(
            'UPDATE Users SET user_fullname = ?, user_name = ?, user_password = ?, img = ? WHERE user_id = ?  ;',
            [fullname, email, password, imgPath, userId],
            () => {
               console.log('Données modifier !!!');

               copyImg(sourcePath, imgPath);
            },
            error => {
               console.log('Erreur lors de la modification : ', error);
            }
         );

      });

   };


   const handleSaveData = () => {

      setFullnameError('');
      setEmailError('');
      setPasswordError('');
      setImgPathError('');

      if (fullname.trim() === '') {
         setFullnameError(t('screens.profile.error.fullname'));
         // Afficher le toast
         errorToast('screens.profile.error.fullname');

      } else if (email.trim() === '') {
         setEmailError(t('screens.profile.error.email'));
         // Afficher le toast
         errorToast('screens.profile.error.email');

      } else if (password.trim() === '') {
         setPasswordError(t('screens.profile.error.password'));
         // Afficher le toast
         errorToast('screens.profile.error.password');

      } else if (imgPath.trim() === '') {
         setImgPathError(t('screens.profile.error.img'));
         // Afficher le toast
         errorToast('screens.profile.error.img');
      } else {

         UpdateProfile(userId, fullname, email, password, imgPath, sourcePath);
         navigation.replace('home');
      }

   }
   useEffect(() => {

      const fetchData = async () => {

         const id = await AsyncStorage.getItem('userId');
         setUserId(id);

         db = SQLite.openDatabase(
            {
               name: 'mybd',
               location: 'default',
            },
            () => { },
            error => { console.log(error); }
         );

         db.transaction(tx => {
            tx.executeSql(
               'SELECT * FROM Users WHERE user_id = ? ',
               [id],
               (tx, results) => {
                  let len = results.rows.length;
                  if (len > 0) {
                     setFullname(results.rows.item(0).user_fullname.toString());
                     setEmail(results.rows.item(0).user_name.toString());
                     setPassword(results.rows.item(0).user_password.toString());
                     setImgPath(results.rows.item(0).img.toString());
                     console.log('Resultat de la Select: ' + JSON.stringify(results.rows(0)));
                  } else {
                     console.log('Erreur lors de la recuperation des données');
                  }
               },
            );
         })

         // db.close(() => {
         //    console.log('Database CLOSED');
         // }, (error) => {
         //    console.log('SQLite error: ' + error);
         // });


      };

      fetchData();


   }, []);

   return (
      <View
         style={ProfileStyle.body}
      >
         <Header
            titre={t('screens.profile.title')}
            isDrawerShown={false}
            onSubmit={() => navigation.goBack()}
         />
         <View style={{ zIndex: 100 }}>
            <Toast />
         </View>
         <View style={ProfileStyle.content}>
            <View style={ProfileStyle.contentHeader}>
               <UploadImage
                  imgPathOld={imgPath}
                  userId={userId}
                  onImageChange={handleImageChange}
                  sourcePath={getImgPathSource}
               />
            </View>
            <Input
               label={t('screens.profile.label.fullname')}
               placeholder={t('screens.profile.placeholder.fullname')}
               errorStyle={COLOR.oran2}
               errorMessage={fullnameError}
               leftIcon={
                  <Icon
                     name='badge'
                     size={24}
                     color='#ff9800'
                  />
               }
               labelStyle={ProfileStyle.label}
               value={fullname}
               onChangeText={(val) => setFullname(val)}
            />
            <Input
               label={t('screens.profile.label.email')}
               placeholder={t('screens.profile.placeholder.email')}
               errorStyle={COLOR.oran2}
               errorMessage={emailError}
               leftIcon={
                  <Icon
                     name='alternate-email'
                     size={24}
                     color='#ff9800'
                  />
               }
               labelStyle={ProfileStyle.label}
               value={email}
               onChangeText={(val) => setEmail(val)}
            />
            <Input
               label={t('screens.profile.label.password')}
               placeholder={t('screens.profile.placeholder.password')}
               errorStyle={COLOR.oran2}
               errorMessage={passwordError}
               leftIcon={
                  <Icon
                     name='lock'
                     size={24}
                     color='#ff9800'
                  />
               }
               labelStyle={ProfileStyle.label}
               value={password}
               onChangeText={(val) => setPassword(val)}
            />


            <Button
               buttonStyle={ProfileStyle.btn}

               titleStyle={ProfileStyle.btnText}

               onPress={() => handleSaveData()}

            >
               {t('screens.profile.button')}
            </Button>
         </View>
      </View >
   )
}

export default Profile