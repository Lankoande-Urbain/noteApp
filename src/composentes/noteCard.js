import { Text, TouchableOpacity, View } from "react-native-picasso";

import Icons from 'react-native-vector-icons/MaterialIcons'
import homeStyle from "../screens/home/style";
import { Animated } from "react-native";
import { useState } from "react";

const Card = ({ item, navigation }) => {
   const [isTextVisible, setTextVisibility] = useState(false);
   const [heightAnim] = useState(new Animated.Value(0)); // Initialisation de l'animation

   const toggleText = () => {
      setTextVisibility(!isTextVisible);
      Animated.timing(heightAnim, {
         toValue: isTextVisible ? 0 : item.description.length * 0.5, // Modifier la valeur en fonction de l'état
         duration: 500, // Durée de l'animation
         useNativeDriver: false, // Ajouter cette ligne si vous utilisez une version de React Native < 0.62
      }).start();
   };

   return (
      <View style={homeStyle.card}>
         <Text style={homeStyle.cardTitle}>{item.titre}</Text>
         <Animated.View style={{ height: heightAnim }}>
            {isTextVisible && <Text style={homeStyle.cardInfo}>{item.description}</Text>}
         </Animated.View>
         <View style={homeStyle.cardIcon}>
            <TouchableOpacity onPress={toggleText}>
               <Icons name='keyboard-double-arrow-down' style={{ ...homeStyle.icon, color: 'blue' }} />
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
            <Icons name='delete' style={{ ...homeStyle.icon, color: 'red' }} />
         </View>
      </View>
   );
};
export default Card;