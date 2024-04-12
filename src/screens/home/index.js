import React, { StrictMode, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import homeStyle from './style';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../composentes/noteCard';
import { COLOR } from '../../outils/constantes';
import DivBar from '../../composentes/divBar';
import BtnAdd from '../../composentes/btnAdd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MonImageSvg from './../../doc/svg/empty.svg';
import NoDataSvg from './../../doc/svg/nodata.svg';
import Avatar from '../../composentes/avatar';
import { API_BASE_URL } from '../../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, Button } from '@rneui/themed';

const Home = ({ navigation }) => {
   const [notes, setNotes] = useState(null);
   const [userFullName, setUserFullName] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
   const insets = useSafeAreaInsets();
   useEffect(() => {

      AsyncStorage.getItem('user_fullname').then(value => {
         if (value !== null) {
            setUserFullName(value);
         }
      });
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

   return (
      <View style={{ flex: 1 }}>
         <View style={homeStyle.header}>

            {/* fenetre modal  */}
            <View style={homeStyle.centeredView}>
               <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                     Alert.alert('Modal has been closed.');
                     setModalVisible(!modalVisible);
                  }}>
                  <View style={homeStyle.centeredView}>
                     <View style={homeStyle.modalView}>
                        <Text style={homeStyle.modalText}>Hello World!</Text>
                        <Pressable
                           style={[homeStyle.button, homeStyle.buttonClose]}
                           onPress={() => setModalVisible(!modalVisible)}>
                           <Text style={homeStyle.textStyle}>Hide Modal</Text>
                        </Pressable>
                     </View>
                  </View>
               </Modal>
               <TouchableOpacity onPress={() => setModalVisible(true)}>

                  <Button type='clear'>
                     <Icon
                        name='menu'
                        color={'#fff'}
                        size={32}
                        onPress={() => setModalVisible(true)}

                     /></Button>
               </TouchableOpacity>

            </View>
            <Text style={homeStyle.headerTitre}>{userFullName}</Text>
            <Avatar style={homeStyle.headerImg} fullName={userFullName} size={55} />
         </View>
         <View style={homeStyle.body}>
            <Text style={homeStyle.title}>List of Notes</Text>

         </View>

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


      </View >
   );
};

export default Home;
