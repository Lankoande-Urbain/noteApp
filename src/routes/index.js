import { View, Text, Button } from 'react-native'

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


let db;
const Stack = createNativeStackNavigator();
const Routes = () => {
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
                  AsyncStorage.setItem('user_fullname', results.rows.item(0).user_fullname);
               } else {
                  alert('Please enter valid credentials!');
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

   const LoginScreen = (props) => <Login {...props} handleLogin={handleLogin} />;
   const RegisterScreen = (props) => <Register {...props} handleRegister={handleRegister} />;

   const handleLogout = () => {
      setIsUserLoggedIn(false);
      // Naviguer vers l'écran de connexion
   };
   return (

      <SafeAreaProvider>
         <NavigationContainer>
            <Stack.Navigator initialRouteName='login' screenOptions={{ headerTitle: '', headerTransparent: true, }} >
               {isUserLoggedIn ? (
                  <>
                     <Stack.Screen name="home" component={Home} options={{
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