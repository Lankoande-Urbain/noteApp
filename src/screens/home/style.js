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
      marginTop: 20,
      marginHorizontal: 25,
      borderRadius: 15,
      borderColor: COLOR.oran1,
      borderWidth: 2,
      borderBottomWidth: 6,
      borderLeftWidth: 3,
      borderRightWidth: 3,
      paddingVertical: 5,
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
      paddingHorizontal: 20,
   },
   timeCard: {
      flexDirection: 'row',
      paddingHorizontal: 3,
      // backgroundColor: 'red'
   },
   timeIcon: {
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 18,
      marginHorizontal: 3,
   },
   timeText: {
      color: COLOR.gris,
      fontStyle: 'italic',
      fontSize: 13,
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
      paddingRight: 20,
   },
   img: {
      width: 350,
      height: 350,
   },
   btnAdd: {
      elevation: 100,
      position: 'absolute',
      right: 0,
      bottom: 0,
      zIndex: 1000,
      shadowColor: COLOR.black,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.50,

   },

});


export default homeStyle