import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";
import BtnAdd from "../../composentes/btnAdd";


const homeStyle = StyleSheet.create({
   // drawer style

   headerDrawer: {
      flexDirection: 'row',
      backgroundColor: COLOR.oran1,
      padding: 5,
      justifyContent: 'space-between',
      marginTop: -4,
      elevation: 5,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,


   },
   headerDrawerTitre: {
      color: COLOR.bg_White,
      fontSize: FONTSIZE.title,
      fontWeight: 'bold',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 20,

   },
   // home style
   header: {
      flexDirection: 'row',
      backgroundColor: COLOR.oran1,
      padding: 7,
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
      elevation: 5,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#fff',
      flex: 1,
      shadowColor: COLOR.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
   },

   card: {
      backgroundColor: 'white',
      elevation: 7,
      padding: 10,
      marginHorizontal: 25,
      marginVertical: 10,
      borderRadius: 15,
      borderColor: COLOR.oran1,
      borderWidth: 2,
      borderBottomWidth: 6,
      borderLeftWidth: 3,
      borderRightWidth: 3,
   },
   cardTitle: {
      fontSize: 17,
      marginBottom: 5,
      fontWeight: 'bold',
      color: COLOR.black,
      textAlign: 'center',
      elevation: 5,
   },

   cardInfo: {
      flexDirection: 'column',
      paddingHorizontal: 20,
   },
   timeCard: {
      flexDirection: 'row',
   },
   timeIcon: {
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 14,
   },
   timeText: {
      color: COLOR.gris,
      fontStyle: 'italic',
      fontSize: 12,
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingRight: 5,
      paddingLeft: 2,
   },
   actionCard: {
      flexDirection: 'row',
      marginLeft: 'auto',
   },

   cardIcon: {
      flexDirection: 'row',
      padding: 5,
   },
   icon: {
      fontSize: 20,
      paddingHorizontal: PADDING.hori
   },
   img: {
      width: 350,
      height: 350,
   },
   btnAdd: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      zIndex: 1000
      // Ajoutez d'autres styles pour votre élément ici
   },

});


export default homeStyle