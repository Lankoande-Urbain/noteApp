import { View, Text } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Header from '../../composentes/header';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@rneui/themed';

const Profile = ({ navigation }) => {

   const { t } = useTranslation();


   return (
      <View
         style={{
            backgroundColor: COLOR.oran1,
            flex: 1,

         }}
      >
         <Header
            titre={t('screens.profile.title')}
            isDrawerShown={false}
            onSubmit={() => navigation.goBack()}
         />
         <View
            style={{
               paddingHorizontal: 25,
               paddingTop: '18%',
               // borderTopLeftRadius: 1000,
               borderTopRightRadius: 400,
               backgroundColor: '#fff',
               marginTop: '19%',
               elevation: 10,
            }}
         >
            <Avatar
               size={140}
               rounded
               source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
               containerStyle={{
                  position: 'absolute',
                  alignSelf: 'center',
                  top: -75,
                  elevation: 100,
               }}
            />
            <Input
               label={t('screens.profile.label.fullname')}
               placeholder={t('screens.profile.placeholder.fullname')}
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
               label={t('screens.profile.label.email')}
               placeholder={t('screens.profile.placeholder.email')}
               leftIcon={
                  <Icon
                     name='title'
                     size={24}
                     color='#ff9800'
                  />
               }
            // onChangeText={(val) => setTitre(val)}
            />
            <Input
               label={t('screens.profile.label.password')}
               placeholder={t('screens.profile.placeholder.fullname')}
               leftIcon={
                  <Icon
                     name='title'
                     size={24}
                     color='#ff9800'
                  />
               }
            // onChangeText={(val) => setTitre(val)}
            />


            <Button
               buttonStyle={{
                  width: 300,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  elevation: 10,
                  borderRadius: 25,
                  margin: 15,
                  backgroundColor: COLOR.oran1,
                  marginBottom: '50%',
                  marginTop: '10%'
               }}

               titleStyle={{
                  fontWeight: 'bold',
                  fontSize: 21,
                  letterSpacing: 2.5,
               }}


            // onPress={handleEnregistrer}


            >
               {t('screens.profile.button')}
            </Button>
         </View>
      </View >
   )
}

export default Profile