import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LoginSvg from './../../doc/svg/login.svg';
import loginStyle from './script';
import { Input, Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Toast from 'react-native-toast-message';



const Login = ({ navigation, handleLogin }) => {

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
         errorToast('user name cannot empty');
      }
      else if (!validateEmail(user_name)) {
         errorToast('this is not a valid email!!')
      }
      else if (password.trim() === '') {
         errorToast('password cannot empty');
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
            <Text style={loginStyle.titre} > Sign in</Text>
         </View>
         {/* page body */}
         <View style={loginStyle.form}>
            <Input
               label='Login'
               placeholder='name@domaine.com'
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
               label='PassWord'
               placeholder='password'
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

            >Login</Button>
         </View>
         <View>
            <Text style={loginStyle.linkText} >do you not have an account ?
               <Text style={loginStyle.link} onPress={() => navigation.navigate('register')} > click here</Text>
            </Text>

         </View>
      </ScrollView>
   )
}

export default Login