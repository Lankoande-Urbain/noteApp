import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import homeStyle from './style';
import Card from '../../composentes/noteCard';
import DivBar from '../../composentes/divBar';
import BtnAdd from '../../composentes/btnAdd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MonImageSvg from './../../doc/svg/empty.svg';
import { API_BASE_URL } from '../../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchBar } from '@rneui/themed';
import { COLOR } from '../../outils/constantes';
import Toast from 'react-native-toast-message';
import Header from '../../composentes/header';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';

const Home = (props) => {

   const { navigation } = props;
   const [notes, setNotes] = useState(null);
   const [userFullName, setUserFullName] = useState('');
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const insets = useSafeAreaInsets();
   const { t } = useTranslation();
   const [search, setSearch] = useState('');
   const [userId, setUserId] = useState('');
   const [isReload, setIsReload] = useState(false);

   const updateSearch = (search) => {
      setSearch(search);
      // console.log(search);
   };

   const isFocused = useIsFocused();

   const gestAsyncData = async () => {
      const storedIsLogin = await AsyncStorage.getItem('isLogin');
      const storedFullname = await AsyncStorage.getItem('userFullname');
      const storedUserId = await AsyncStorage.getItem('userId');

      // console.log("storedIsLogin:  " + storedIsLogin);
      // console.log("storedFullname: " + storedFullname);

      setUserId(storedUserId)
      setIsLoggedIn(storedIsLogin)

      if (isLoggedIn) {
         // console.log('Exercution du toast');
         Toast.show({
            type: 'info',
            text1: 'Hello',
            text2: t("screens.home.text.bienvenue") + storedFullname.toUpperCase(),
            visibilityTime: 5000,
         });
         setIsLoggedIn(false);
      }
   };


   useEffect(() => {

      gestAsyncData()
   }, [isFocused])

   useEffect(() => {
      // Fonction pour récupérer les notes depuis l'API
      fetchNotesFromApi();

   }, [search]);

   const fetchNotesFromApi = async () => {
      const userIdd = await AsyncStorage.getItem('userId');
      const url = !search
         ? `${API_BASE_URL}/${userIdd}`
         : `${API_BASE_URL}/user/${userIdd}/titre/${search}`;
      console.log(url);
      try {
         const response = await fetch(url, {
            method: 'GET',
         });
         if (!response.ok) {
            console.log(t("screens.home.error.database"));
         }
         const data = await response.json();
         setNotes(data || null); // Met à jour l'état avec les données renvoyées par l'API ou null si les données sont vides
      } catch (error) {
         console.log(t("screens.home.error.database"), error);
      }
   };

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
                     width: '85%',
                     height: 50,
                     paddingHorizontal: 10,
                     borderColor: '#666',
                     borderWidth: 1,
                     borderBottomWidth: 3,
                     borderRadius: 20,
                     elevation: 10,
                     justifyContent: 'center',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                     elevation: 10,
                  }}

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
                     style={{ height: '84%', paddingBottom: 60, backgroundColor: '#fff' }}
                     data={notes}
                     keyExtractor={(item) => item.id.toString()}
                     renderItem={({ item }) => {
                        return <Card item={item} navigation={navigation} fetchNotesFromApi={fetchNotesFromApi} />;
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
