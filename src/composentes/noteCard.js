import { Text, TouchableOpacity, View } from "react-native-picasso";

import Icons from 'react-native-vector-icons/MaterialIcons'
import homeStyle from "../screens/home/style";
import { Alert, Animated } from "react-native";
import { useState } from "react";
import { COLOR } from "../outils/constantes";
import { API_BASE_URL } from "../../apiConfig";
import Toast from "react-native-toast-message";

const Card = ({ item, navigation }) => {


   const [isTextVisible, setTextVisibility] = useState(false);
   const [heightAnim] = useState(new Animated.Value(0)); // Initialisation de l'animation
   const date = new Date(item.creationDate);
   // Convertir la date au format "yyyy-mm-dd"
   const noteDate = date.toISOString().split('T')[0];
   // Extraire l'heure de la date
   const NoteTime = date.toISOString().split('T')[1].split('.')[0];

   const deleteNOTE = async (id) => {

      try {
         const response = await fetch(`${API_BASE_URL}/${String(id)}`, {
            method: 'DELETE',
         });
         if (!response.ok) {
            throw new Error('Erreur lors de la supresion de la note');

         }
         Toast.show({
            type: 'info',
            text1: 'Info!!',
            text2: 'The note has been deleted',
            visibilityTime: 5000,
         });
      } catch (error) {
         console.error('Erreur :', error);
      }
   }

   const toggleText = () => {
      setTextVisibility(!isTextVisible);
      Animated.timing(heightAnim, {
         toValue: isTextVisible ? 0 : item.description.length * 0.5 > 20 ? item.description.length * 0.5 : 20, // Modifier la valeur en fonction de l'état
         duration: 500, // Durée de l'animation
         useNativeDriver: false, // Ajouter cette ligne si vous utilisez une version de React Native < 0.62
      }).start();
   };

   return (
      <View style={homeStyle.card}>
         <Text style={homeStyle.cardTitle}>{item.titre}</Text>

         <Animated.View style={{ height: heightAnim }}>
            {isTextVisible && <Text style={homeStyle.cardInfo}>
               {item.description}</Text>}
         </Animated.View>

         <View style={homeStyle.cardIcon}>

            <View style={homeStyle.timeCard}>
               <View style={{ flexDirection: 'row' }}>
                  <Icons name="today" style={homeStyle.timeIcon} />
                  <Text style={homeStyle.timeText}>{noteDate}</Text>
               </View>

               <View style={{ flexDirection: 'row' }}>
                  <Icons name="schedule" style={homeStyle.timeIcon} />
                  <Text style={homeStyle.timeText}>{NoteTime}</Text>
               </View>
            </View>

            <View style={homeStyle.actionCard}>
               <TouchableOpacity onPress={toggleText}>
                  {
                     isTextVisible ? <Icons name='keyboard-double-arrow-up' style={{ ...homeStyle.icon, color: 'blue' }} /> : <Icons name='keyboard-double-arrow-down' style={{ ...homeStyle.icon, color: 'blue' }} />
                  }
               </TouchableOpacity>
               <Icons name='update' style={{ ...homeStyle.icon, color: 'green' }}
                  onPress={() => {
                     navigation.navigate('update', {
                        paramId: item.id,
                        paramTitre: item.titre,
                        paramDescrip: item.description
                     })
                  }}
               />
               <Icons name='delete' style={{ ...homeStyle.icon, color: 'red' }}
                  onPress={() => {
                     Alert.alert('Confirmation', 'Are you sure you want to delete this note ?', [
                        { text: 'No', style: 'cancel' },
                        { text: 'Yes', onPress: () => deleteNOTE(item.id) },
                     ]);
                  }}
               />
            </View>
         </View>
      </View>
   );
};
export default Card;