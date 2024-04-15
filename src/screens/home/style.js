import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";
import BtnAdd from "../../composentes/btnAdd";


const homeStyle = StyleSheet.create({
   header: {
      flexDirection: 'row',
      backgroundColor: COLOR.oran1,
      padding: 7,
      justifyContent: 'space-between',

   },
   headerTitre: {
      color: COLOR.bg_White,
      fontSize: FONTSIZE.title,
      fontWeight: 'bold',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 120,
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
      backgroundColor: COLOR.bg_White,
      flex: 1,
      shadowColor: COLOR.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
   },

   card: {
      flex: 1,
      backgroundColor: 'white',
      elevation: 10,
      padding: 10,
      marginHorizontal: 25,
      marginVertical: 10,
      borderRadius: 15,
      borderColor: COLOR.oran1,
      borderWidth: 2
   },
   cardTitle: {
      fontSize: 17,
      marginBottom: 5,
      fontWeight: 'bold',
      color: COLOR.black,
      textAlign: 'center'
   },

   cardInfo: {
      flexDirection: 'column',
      paddingHorizontal: 20
   },
   linearGradient: {
      flex: 1,
      paddingLeft: 1,
      paddingRight: 1,
   },
   cardIcon: {
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'flex-end'
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
   centeredView: {
      flex: 1,
      marginTop: 10,
      marginLeft: 0,
   },
   modalView: {
      marginTop: 10,
      backgroundColor: 'white',
      padding: 35,
      flex: 1,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 5,
      width: 270,
      shadowColor: COLOR.oran1,
      shadowOffset: {
         width: 100,
         height: 100,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
   },
   button: {
      borderRadius: 1,
      padding: 10,
      elevation: 2,
   },
   buttonOpen: {
      backgroundColor: '#F194FF',
   },
   buttonClose: {
      backgroundColor: '#2196F3',
   },
   textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
   },
   modalText: {
      marginBottom: 15,
      textAlign: 'center',
   },



});


export default homeStyle