import { View, Text, Button, StatusBar } from 'react-native'

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { COLOR } from '../outils/constantes';
import CreacteNote from '../screens/create';
import UpdateNote from '../screens/update';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../screens/login';
import Register from '../screens/register';
import SQLite from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreenWithDrawer from '../composentes/HomeScreenWithDrawer';
import Toast from 'react-native-toast-message';


let db;
const Stack = createNativeStackNavigator();

export
   const Routes = () => {

      const errorToast = (message) => {
         Toast.show({
            type: 'error',
            text1: 'Error!!',
            text2: message,
            visibilityTime: 5000,
            topOffset: 50,
         });
      }
      const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

      useEffect(() => {
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
               'CREATE TABLE IF NOT EXISTS Users (user_id INTEGER PRIMARY KEY NOT NULL , user_fullname VARCHAR(20), user_name VARCHAR(20), user_password VARCHAR(20));',
               [],
            );
         });
         const loadUserLoginState = async () => {
            try {
               const isLoggedIn = await AsyncStorage.getItem('isUserLoggedIn');
               setIsUserLoggedIn(isLoggedIn !== null && isLoggedIn === 'true');
            } catch (error) {
               console.log(error);
            }
         };

         loadUserLoginState();
      }, []);

      const handleLogin = (username, password) => {
         db.transaction(tx => {
            tx.executeSql(
               'SELECT * FROM Users WHERE user_name = ? AND user_password = ?',
               [username, password],
               (tx, results) => {
                  let len = results.rows.length;
                  if (len > 0) {
                     setIsUserLoggedIn(true);
                     AsyncStorage.setItem('user_id', results.rows.item(0).user_id.toString());
                     AsyncStorage.setItem('user_fullname', results.rows.item(0).user_fullname.toString());
                     AsyncStorage.setItem('isLogin', JSON.stringify(true));
                  } else {
                     errorToast('access refuse retry');
                  }
               },
            );
         });
      };

      const handleRegister = (user_fullname, user_name, user_password) => {
         db.transaction(tx => {
            tx.executeSql(
               'INSERT INTO Users (user_fullname, user_name, user_password) VALUES (?, ?, ?);',
               [user_fullname, user_name, user_password],
               () => {
                  handleLogin(user_name, user_password);
               },
            );
         });
      };

      const handleLogout = async () => { // fonction de deconnexion
         setIsUserLoggedIn(false);
         // Supprimer les données de l'utilisateur de AsyncStorage
         await AsyncStorage.removeItem('user_id');
         await AsyncStorage.removeItem('user_fullname');
      };


      const LoginScreen = (props) => <Login {...props} handleLogin={handleLogin} />;
      const RegisterScreen = (props) => <Register {...props} handleRegister={handleRegister} />;
      const OptionScreen = (props) => <HomeScreenWithDrawer {...props} handleLogout={handleLogout} />;
      return (

         <SafeAreaProvider>
            <NavigationContainer>
               <StatusBar backgroundColor={COLOR.oran1} barStyle="light-content" />
               <Stack.Navigator initialRouteName='login' screenOptions={{ headerTitle: '', headerTransparent: true, }} >
                  {isUserLoggedIn ? (
                     <>
                        <Stack.Screen name="home" component={OptionScreen} options={{
                           headerShown: false,
                           headerTintColor: 'white',
                           // headerRight: () => (
                           //    <Button
                           //       onPress={handleLogout}
                           //       title="Déconnexion"
                           //       color="#fff"
                           //    />
                           // ),
                        }} />
                        <Stack.Screen name="create" component={CreacteNote} options={{

                           headerTintColor: 'white', headerBackTitleStyle: { fontSize: 30 }
                        }} />
                        <Stack.Screen name="update" component={UpdateNote} options={{
                           headerTintColor: 'white', headerBackTitleStyle: { fontSize: 30 }
                        }} />
                     </>
                  ) : (
                     <>
                        <Stack.Screen name="login" component={LoginScreen} options={{
                           headerTintColor: 'white',
                        }} />
                        <Stack.Screen name="register" component={RegisterScreen} options={{
                           headerTintColor: 'white',
                        }} />
                     </>
                  )}
               </Stack.Navigator>


            </NavigationContainer>
         </SafeAreaProvider>
      )
   }

export default Routes