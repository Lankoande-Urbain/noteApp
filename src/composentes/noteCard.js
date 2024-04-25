import { Text, TouchableOpacity, View } from "react-native-picasso";
import Icons from 'react-native-vector-icons/MaterialIcons'
import homeStyle from "../screens/home/style";
import { Alert, Animated } from "react-native";
import { useState } from "react";
import { COLOR } from "../outils/constantes";
import { API_BASE_URL } from "../../apiConfig";
import Toast from "react-native-toast-message";
import { useTranslation } from 'react-i18next';
import EntypoIcon from 'react-native-vector-icons/Entypo'
const Card = ({ item, navigation }) => {


   const { t } = useTranslation();
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
            text1: t('screens.delete.info.text1'),
            text2: t('screens.delete.info.text2'),
            visibilityTime: 5000,
         });
      } catch (error) {
         console.error('Erreur :', error);
      }
   }

   const toggleText = () => {
      setTextVisibility(!isTextVisible);
      Animated.timing(heightAnim, {
         toValue: isTextVisible ? 0 : item.description.length * 0.5 > 20 ? (item.description.length * 0.5) + 10 : 25, // Modifier la valeur en fonction de l'état
         duration: 1000, // Durée de l'animation
         useNativeDriver: false, // Ajouter cette ligne si vous utilisez une version de React Native < 0.62
      }).start();
   };

   return (
      <View style={homeStyle.card}>
         <Text style={homeStyle.cardTitle}>{item.titre}</Text>

         <Animated.View style={{ height: heightAnim, }}>
            {isTextVisible && <Text style={homeStyle.cardInfo}>
               {item.description}</Text>}
         </Animated.View>

         <View style={homeStyle.cardIcon}>

            <View style={homeStyle.timeCard}>
               <View style={{ flexDirection: 'row' }}>
                  <Icons
                     name="today"
                     color={COLOR.gris}
                     style={homeStyle.timeIcon}
                  />
                  <Text style={homeStyle.timeText}>
                     {noteDate}
                  </Text>
               </View>

               <View style={{ flexDirection: 'row' }}>
                  <Icons
                     name="schedule"
                     color={COLOR.gris}
                     style={homeStyle.timeIcon}
                  />
                  <Text style={homeStyle.timeText}>
                     {NoteTime}
                  </Text>
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
               {/* <Icons name='delete' style={{ ...homeStyle.icon, color: 'red' }}
                  onPress={() => {
                     Alert.alert(t('screens.delete.text.title'), t('screens.delete.text.body'), [
                        { text: t('screens.delete.btnOption.no'), style: 'cancel' },
                        { text: t('screens.delete.btnOption.yes'), onPress: () => deleteNOTE(item.id) },
                     ]);
                  }}
               /> */}
            </View>
         </View>
         <EntypoIcon name="circle-with-cross" size={36} color={'red'}
            style={{ position: 'absolute', zIndex: 1000, right: -16, top: -18, elevation: 100, backgroundColor: '#fff', padding: -15, borderRadius: 100, }}

            onPress={() => {
               Alert.alert(t('screens.delete.text.title'), t('screens.delete.text.body'), [
                  { text: t('screens.delete.btnOption.no'), style: 'cancel' },
                  { text: t('screens.delete.btnOption.yes'), onPress: () => deleteNOTE(item.id) },
               ]);
            }}
         />
      </View>
   );
};
export default Card;