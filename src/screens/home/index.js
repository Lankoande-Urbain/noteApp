import React, { StrictMode, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal, Pressable, Alert, ToastAndroid, TextInput } from 'react-native';
import homeStyle from './style';
import Card from '../../composentes/noteCard';
import DivBar from '../../composentes/divBar';
import BtnAdd from '../../composentes/btnAdd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MonImageSvg from './../../doc/svg/empty.svg';
import Avatar from '../../composentes/avatar';
import { API_BASE_URL } from '../../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, Button, Input, SearchBar } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Toast from 'react-native-toast-message';
import Header from '../../composentes/header';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
   const { navigation } = props;
   const [notes, setNotes] = useState(null);
   const [userFullName, setUserFullName] = useState('');
   const [isLoggedIn, setIsLoggedIn] = useState(null);
   const insets = useSafeAreaInsets();
   const { t } = useTranslation();
   const [search, setSearch] = useState("");

   const updateSearch = (search) => {
      setSearch(search);
      // console.log(search);
   };
   useEffect(() => {

      const gestAsyncData = async () => {
         const storedIsLogin = await AsyncStorage.getItem('isLogin');
         if (storedIsLogin !== null) {
            setIsLoggedIn(JSON.parse(storedIsLogin));
         }

         const storedFullname = await AsyncStorage.getItem('user_fullname');
         if (storedFullname !== null) {
            setUserFullName(storedFullname);
         }
      }
      // gestAsyncData
      if (isLoggedIn) {
         Toast.show({
            type: 'info',
            text1: 'Hello',
            text2: t("screens.home.text.bienvenue") + userFullName.toUpperCase(),
            visibilityTime: 5000,
         });
      }
      setTimeout(() => {
         setIsLoggedIn(false);
      }, 5000);

      // Fonction pour récupérer les notes depuis l'API
      const fetchNotesFromApi = async () => {
         try {
            const response = await fetch(`${API_BASE_URL}`, {
               method: 'GET',
            });
            if (!response.ok) {
               throw new Error(t("screens.home.error.database"));
            }
            const data = await response.json();
            setNotes(data || null); // Met à jour l'état avec les données renvoyées par l'API ou null si les données sont vides
         } catch (error) {
            console.error(t("screens.home.error.database"), error);
         }
      };

      // Fonction pour récupérer les notes depuis l'API
      const fetchNotesFromApiRech = async (titre) => {
         try {
            const response = await fetch(`${API_BASE_URL}/${titre}`, {
               method: 'GET',
            });
            if (!response.ok) {
               throw new Error(t("screens.home.error.database"));
            }
            const data = await response.json();
            setNotes(data || null); // Met à jour l'état avec les données renvoyées par l'API ou null si les données sont vides
         } catch (error) {
            console.log(t("screens.home.error.database"), error);
         }
      };

      if (search.trim() === '') {
         fetchNotesFromApi();
      } else {
         fetchNotesFromApiRech(search);
      }
   });

   return (
      <View style={{ flex: 1, backgroundColor: COLOR.oran1 }}>
         <View style={{ zIndex: 1000 }}>
            <Toast />
         </View>
         <Header
            titre={t("screens.home.title")}
            isDrawerShown={true}
            onSubmit={() => navigation.openDrawer()}
         />
         <View style={homeStyle.body}>
            <View style={{ marginTop: 20, flexDirection: 'row', }}>
               <SearchBar
                  platform="android"
                  lightTheme
                  containerStyle={{
                     width: 364,
                     height: 50,
                     paddingHorizontal: 10,
                     marginHorizontal: 15,
                     borderColor: '#666',
                     borderWidth: 1,
                     borderRadius: 20,
                     elevation: 1000,
                     justifyContent: 'center'
                  }}
                  // inputContainerStyle={{ width: 400, }}

                  placeholder={t('screens.home.search')}
                  placeholderTextColor={'#888'}
                  onChangeText={updateSearch}
                  onCancel={() => updateSearch("")}
                  onClearText={() => console.log(onClearText())}

                  value={search}
               />
            </View>

            <DivBar />

            <View >
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
