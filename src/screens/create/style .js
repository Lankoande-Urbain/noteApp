import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";


const createStyle = StyleSheet.create({
   header: {
      flexDirection: 'row',
      backgroundColor: COLOR.oran1,
      height: 65,
      justifyContent: 'space-between',

   },
   title: {
      color: COLOR.oran1,
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginVertical: 15,
   },
   body: {
      paddingTop: 35,
      elevation: 5,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: COLOR.bg_White,
      flex: 1,
      shadowColor: COLOR.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
   },
   form: {
      marginHorizontal: 30,
      marginTop: 15
   },
   label: {
      color: COLOR.black,
      fontSize: 16,
      fontWeight: '500',
      paddingTop: 15,
   },
   input: {
      borderWidth: 2,
      borderColor: COLOR.main,
      borderRadius: 10,
      marginTop: 5,

   },
   bar: {
      backgroundColor: COLOR.main,
      height: 4,
   },
   valideMessage: {
      color: '#30e63f',
      textAlign: 'center',
      marginBottom: 5,
      fontSize: 16


   }


});


export default createStyle