import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";
import BtnAdd from "../../composentes/btnAdd";


const homeStyle = StyleSheet.create({
   // drawer style

   headerDrawer: {
      flexDirection: 'column',
      backgroundColor: COLOR.oran1,
      // padding: 10,
      // justifyContent: 'space-between',
      marginTop: -5,
      elevation: 25,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      padding: '7%',


   },
   headerDrawerTitre: {
      color: COLOR.bg_White,
      fontSize: FONTSIZE.title2,
      fontWeight: 'bold',
      alignSelf: 'center',

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
      // elevation: 5,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#fff',
      flex: 1,

   },

   card: {
      backgroundColor: '#fff',
      elevation: 3,
      marginTop: 15,
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
      marginBottom: 3,
      fontWeight: 'bold',
      color: COLOR.black,
      textAlign: 'center',
      // elevation: 3,
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
      // elevation: 10,
      position: 'absolute',
      right: 0,
      bottom: 0,
      zIndex: 1000,
      // shadowColor: COLOR.black,
      // shadowOffset: { width: 1, height: 1 },
      // shadowOpacity: 1,
      backgroundColor: '#fff',
      borderRadius: 50

   },

});


export default homeStyle