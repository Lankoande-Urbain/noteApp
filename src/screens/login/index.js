import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LoginSvg from './../../doc/svg/login.svg';
import loginStyle from './script';
import { Input, Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';


const Login = ({ navigation, handleLogin }) => {

   const { t, } = useTranslation();
   const [user_name, setUser_name] = useState('');
   const [password, setPassword] = useState('');

   const errorToast = (message) => {
      Toast.show({
         type: 'error',
         text1: 'Error!!',
         text2: message,
         visibilityTime: 5000,
         topOffset: 50,
      });
   }
   const validateEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }


   const checkInput = () => {

      if (user_name.trim() === '') {
         errorToast(t("screens.singin.error.user"));
      }
      else if (!validateEmail(user_name)) {
         errorToast(t("screens.singin.error.email"))
      }
      else if (password.trim() === '') {
         errorToast(t("screens.singin.error.password"));
      }
      else {

         handleLogin(user_name, password);
      }
   }

   return (
      <ScrollView style={{ backgroundColor: COLOR.bg_White }}>
         <Toast />
         <View style={{ alignItems: 'center', zIndex: -1, }}>
            <LoginSvg width={300} height={350} />
         </View>
         {/* page titre  */}
         <View>
            <Text style={loginStyle.titre} >
               {t("screens.singin.title")}
            </Text>
         </View>
         {/* page body */}
         <View style={loginStyle.form}>
            <Input
               label={t("screens.singin.label.name")}
               placeholder={t("screens.singin.placeholder.login")}
               labelStyle={{ fontSize: 18, color: '#5a5a5a' }}
               leftIcon={
                  <Icon
                     name='person'
                     size={24}
                     color='#ff9800'
                  />
               }

               onChangeText={(val) => setUser_name(val)}
            />

            <Input
               label={t("screens.singin.label.password")}
               placeholder={t("screens.singin.placeholder.password")}
               labelStyle={{ fontSize: 18, color: '#5a5a5a' }}
               secureTextEntry={true}
               leftIcon={
                  <Icon
                     name='lock'
                     size={24}
                     color='#ff9800'
                  />
               }

               onChangeText={(val) => setPassword(val)}
            />

            <Button
               buttonStyle={{
                  width: 150, marginTop: 15, marginLeft: 'auto', marginRight: 'auto', fontSize: 18
               }}

               // type='outline'
               radius={'lg'}
               color={'warning'}
               onPress={() => {
                  checkInput();
               }}

            >{t("screens.singin.buttom")}</Button>
         </View>

         <View style={{ flexDirection: 'row' }}>
            <Text style={loginStyle.linkText} >{t("screens.singin.text.ask")} </Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')} style={{ marginBottom: 0, marginLeft: -20 }}>
               <Text style={{ ...loginStyle.link, marginTop: 25 }}  > {t("screens.singin.text.link")}</Text>
            </TouchableOpacity>
         </View>


      </ScrollView>
   )
}

export default Login