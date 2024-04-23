import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";


const loginStyle = StyleSheet.create({
   titre: {
      color: '#ff9800',
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      left: 110
   },
   form: {
      paddingHorizontal: 35,
   },
   btnReturn: {
      fontSize: 100,
   }

});


export default loginStyle