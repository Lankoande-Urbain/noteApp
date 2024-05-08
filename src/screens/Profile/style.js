import { StyleSheet } from "react-native";
import { COLOR, FONTSIZE, PADDING } from "../../outils/constantes";


const ProfileStyle = StyleSheet.create({
   body: {
      backgroundColor: COLOR.oran1,
      flex: 1,
   },
   content: {
      paddingHorizontal: 25,
      borderTopRightRadius: 400,
      backgroundColor: '#fff',
      elevation: 30,
      marginTop: '7%',
   },
   contentHeader: {
      padding: 25,
      alignItems: 'center',
      marginTop: '-13%',
   },
   btn: {
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
      elevation: 10,
      borderRadius: 25,
      backgroundColor: COLOR.oran1,
      marginBottom: '75%',
      marginTop: '10%'

   },
   btnText: {
      fontWeight: 'bold',
      fontSize: 21,
      letterSpacing: 2.5,
   },
   label: {
      color: COLOR.gris,
      fontWeight: 'bold',
      fontSize: 18,
   }

});


export default ProfileStyle