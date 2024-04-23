import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";


const loginStyle = StyleSheet.create({
   titre: {
      color: '#ff9800',
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 5,
   },
   form: {
      paddingHorizontal: 35,
   },
   link: {
      color: 'blue',
   },
   linkText: {
      paddingHorizontal: 20,
      marginTop: 25,
      color: '#000',
   }

});


export default loginStyle