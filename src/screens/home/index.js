import React, { StrictMode, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal, Pressable, Alert, ToastAndroid } from 'react-native';
import homeStyle from './style';
import Card from '../../composentes/noteCard';
import DivBar from '../../composentes/divBar';
import BtnAdd from '../../composentes/btnAdd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MonImageSvg from './../../doc/svg/empty.svg';
import Avatar from '../../composentes/avatar';
import { API_BASE_URL } from '../../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, Button } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Toast from 'react-native-toast-message';
import Header from '../../composentes/header';

const Home = ({ navigation }) => {
   const [notes, setNotes] = useState(null);
   const [userFullName, setUserFullName] = useState('');
   const insets = useSafeAreaInsets();

   const welcomeToast = () => {
      Toast.show({
         type: 'info',
         text1: 'Hello',
         text2: ' 👋nice to see you again ' + userFullName.toUpperCase(),
         visibilityTime: 5000,
      });
   }
   useEffect(() => {
      AsyncStorage.getItem('user_fullname').then(value => {
         if (value !== null) {
            setUserFullName(value);
         }
      }, []);

      // Fonction pour récupérer les notes depuis l'API
      const fetchNotesFromApi = async () => {
         try {
            const response = await fetch(`${API_BASE_URL}`, {
               method: 'GET',
            });
            if (!response.ok) {
               throw new Error('Erreur lors de la récupération des notes');
            }
            const data = await response.json();
            setNotes(data || null); // Met à jour l'état avec les données renvoyées par l'API ou null si les données sont vides
         } catch (error) {
            console.error('Erreur lors de la récupération des notes :', error);
         }
      };

      fetchNotesFromApi();
   });
   useEffect(() => {
      Toast.show({
         type: 'info',
         text1: 'Hello',
         text2: ' 👋nice to see you again ' + userFullName.toUpperCase(),
         visibilityTime: 5000,
      });
   }, []);

   return (
      <View style={{ flex: 1, backgroundColor: COLOR.oran1 }}>
         <View style={{ zIndex: 1000 }}>
            <Toast />
         </View>
         <Header titre={'List of Notes'} />
         <View style={homeStyle.body}>
            <Text style={homeStyle.title}>List of Notes</Text>

            <DivBar />

            <View>
               {!notes || notes.length === 0 ? <MonImageSvg width={400} height={400} /> :
                  <FlatList
                     style={{ maxHeight: 640, }}
                     data={notes}
                     keyExtractor={(item) => item.id.toString()}
                     renderItem={({ item }) => {
                        return <Card item={item} navigation={navigation} />;
                     }}
                  />
               }
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('create')} style={homeStyle.btnAdd}>
               <BtnAdd />
            </TouchableOpacity>

         </View>
      </View >
   );
};
export default Home;
