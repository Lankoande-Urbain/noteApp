import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LoginSvg from './../../doc/svg/signup.svg';
import loginStyle from './script';
import { Input, Icon, Button } from '@rneui/themed';

const Register = ({ navigation, handleRegister }) => {
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

   const checkInput = async () => {

      setFullnameError('');
      setUsernameError('');
      setPassworError('');
      setCheckpassError('');

      if (user_fullname.trim() === '') {
         setFullnameError('the full name is empty!');
         fullPas.current.focus();
         return;
      }
      else if (user_name.trim() === '') {
         setUsernameError('user name is empty !');
         namePas.current.focus();
         return;
      }
      else if (user_password.trim() === '') {
         setPassworError('passWord is empty !');
         passPas.current.focus();
         return;
      }
      else if (passwordCheck.trim() === '') {
         setCheckpassError('check password is empty !');
         passCHeckPas.current.focus();
         return;
      }
      else if (passwordCheck !== user_password) {
         setCheckpassError('the passwords are different');
         passCHeckPas.current.focus();
         return;
      }
      else {
         handleRegister(user_fullname, user_name, user_password);
      }

   }

   return (
      <ScrollView>
         <View style={{ alignItems: 'center' }}>
            <LoginSvg width={300} height={300}
               style={{ marginTop: -30 }}
            />
         </View>
         {/* page titre  */}
         <View style={{ flexDirection: 'row' }}>
            <Icon name='reply' color={'#ff9800'} iconStyle={{ fontSize: 40, marginLeft: 15, marginTop: -10 }}
               onPress={() => navigation.goBack()
               }
            />
            <Text style={loginStyle.titre}>Sign up</Text>
         </View>
         {/* page body */}
         <View style={loginStyle.form}>
            <Input
               ref={fullPas}
               placeholder='Full Name'
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
               placeholder='name@domaine.com'
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
               placeholder='password'
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
               placeholder='Confirm Password'
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
               buttonStyle={{
                  width: 150, marginTop: 15, marginLeft: 'auto', marginRight: 'auto', fontSize: 18
               }}

               // type='outline'
               radius={'lg'}
               color={'warning'}
               onPress={() => { checkInput(); }}
            >Register</Button>
         </View>
      </ScrollView>
   )
}

export default Register