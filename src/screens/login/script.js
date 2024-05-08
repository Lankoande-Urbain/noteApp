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
      letterSpacing: 1.5
   },
   form: {
      paddingHorizontal: 35,
   },
   link: {
      color: 'blue',
   },
   linkText: {
      paddingHorizontal: 20,
      color: '#000',
   },
   btn: {
      paddingHorizontal: -45,
      width: 150,
      marginTop: 15,
      backgroundColor: COLOR.oran1,
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
      elevation: 10,
      borderRadius: 25,
      marginBottom: '10%'

   },
   btnText: {
      fontWeight: 'bold',
      fontSize: 21,
      letterSpacing: 2.5,
   }

});


export default loginStyle