import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";


const loginStyle = StyleSheet.create({
   titre: {
      color: '#ff9800',
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      marginLeft: 'auto', marginRight: 'auto'
   },
   form: {
      paddingHorizontal: 35,
   },
   btnReturn: {
      fontSize: 100,
   }

});


export default loginStyle