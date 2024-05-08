import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LoginSvg from './../../doc/svg/signup.svg';
import loginStyle from './script';
import { Input, Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import RegisterStyle from '../Profile/style';

const Register = ({ navigation, handleRegister }) => {

   const { t } = useTranslation();
   const [user_fullname, setUserFullname] = useState('');
   const [user_name, setUsername] = useState('');
   const [user_password, setPassword] = useState('');
   const [passwordCheck, setPasswordCheck] = useState('');
   const [fullnameError, setFullnameError] = useState('');
   const [usernameError, setUsernameError] = useState('');
   const [passwordError, setPassworError] = useState('');
   const [checkpassError, setCheckpassError] = useState('');
   const fullPas = React.createRef();
   const namePas = React.createRef();
   const passPas = React.createRef();
   const passCHeckPas = React.createRef();

   const errorToast = (message) => {
      Toast.show({
         type: 'error',
         text1: 'Error!!',
         text2: message,
         visibilityTime: 5000,
         topOffset: 20,
      });
   }
   const validateEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }
   const checkInput = async () => {

      setFullnameError('');
      setUsernameError('');
      setPassworError('');
      setCheckpassError('');

      if (user_fullname.trim() === '') {
         setFullnameError(t("screens.singup.error.fullName"));
         errorToast(fullnameError);
         fullPas.current.focus();
         return;
      }
      else if (user_name.trim() === '') {
         setUsernameError(t("screens.singup.error.userName"));
         errorToast(usernameError);
         namePas.current.focus();
         return;
      } else if (!validateEmail(user_name)) {
         errorToast(t("screens.singup.error.email"));
         namePas.current.focus();
      }
      else if (user_password.trim() === '') {
         setPassworError(t("screens.singup.error.password"));
         errorToast(passwordError);
         passPas.current.focus();
         return;
      }
      else if (passwordCheck.trim() === '') {
         setCheckpassError(t("screens.singup.error.checkPassword1"));
         errorToast(checkpassError);
         passCHeckPas.current.focus();
         return;
      }
      else if (passwordCheck !== user_password) {
         setCheckpassError(t("screens.singup.error.checkPassword2"));
         passCHeckPas.current.focus();
         return;
      }
      else {
         handleRegister(user_fullname, user_name, user_password);
      }

   }

   return (

      <ScrollView style={{ backgroundColor: COLOR.bg_White }}>
         <Toast />
         <View style={{ alignItems: 'center', zIndex: -1 }}>
            <LoginSvg width={300} height={300}
               style={{ marginTop: -30 }}
            />
         </View>
         {/* page titre  */}
         <View style={{ flexDirection: 'row', }}>
            <Icon name='reply' color={'#ff9800'} iconStyle={{ fontSize: 40, marginLeft: 15, marginTop: -10 }}
               onPress={() => navigation.goBack()
               }
            />

            <Text style={loginStyle.titre}>
               {t("screens.singup.title")}
            </Text>
         </View>
         {/* page body */}
         <View style={loginStyle.form}>
            <Input
               ref={fullPas}
               placeholder={t("screens.singup.placeholder.fullname")}
               labelStyle={{ fontSize: 16 }}

               leftIcon={
                  <Icon
                     name='badge'
                     size={24}
                     color='#ff9800'
                  />
               }

               onChangeText={(val) => setUserFullname(val)}
               errorStyle={{ color: 'red' }}
               errorMessage={fullnameError}
            />

            <Input
               ref={namePas}
               placeholder={t("screens.singup.placeholder.userName")}
               labelStyle={{ fontSize: 16 }}
               leftIcon={
                  <Icon
                     name='person'
                     size={24}
                     color='#ff9800'
                  />
               }
               onChangeText={(val) => setUsername(val)}
               errorStyle={{ color: 'red' }}
               errorMessage={usernameError}
            />

            <Input
               ref={passPas}
               placeholder={t("screens.singup.placeholder.password")}
               labelStyle={{ fontSize: 16 }}
               secureTextEntry={true}
               leftIcon={
                  <Icon
                     name='lock'
                     size={24}
                     color='#ff9800'
                  />
               }
               onChangeText={(val) => setPassword(val)}
               errorStyle={{ color: 'red' }}
               errorMessage={passwordError}
            />

            <Input
               ref={passCHeckPas}
               placeholder={t("screens.singup.placeholder.confpassword")}
               labelStyle={{ fontSize: 16 }}
               secureTextEntry={true}
               leftIcon={
                  <Icon
                     name='verified'
                     size={24}
                     color='#ff9800'
                  />
               }
               onChangeText={(val) => setPasswordCheck(val)}
               errorStyle={{ color: 'red' }}
               errorMessage={checkpassError}
            />

            <Button
               buttonStyle={RegisterStyle.btn}
               titleStyle={RegisterStyle.btnText}
               // type='outline'
               radius={'lg'}
               color={'warning'}
               onPress={() => { checkInput(); }}
            >
               {t("screens.singup.buttom")}
            </Button>
         </View>
      </ScrollView>
   )
}

export default Register