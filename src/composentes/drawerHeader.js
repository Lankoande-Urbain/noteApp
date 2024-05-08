import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../screens/home/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOR, FONTSIZE } from '../outils/constantes';
import { Avatar } from '@rneui/themed';
import SQLite from 'react-native-sqlite-storage';



const DrawerHeader = () => {

   const [userFullName, setUserFullName] = useState('Lankoande Urbain');
   const [imgPath, setImgPath] = useState('');
   let db;

   useEffect(() => {

      const fetchData = async () => {
         console.log('COpoment did month');
         const id = await AsyncStorage.getItem('userId');

         db = SQLite.openDatabase(
            {
               name: 'mybd',
               location: 'default',
            },
            () => { },
            error => { console.log(error); }
         );

         db.transaction(tx => {
            tx.executeSql(
               'SELECT * FROM Users WHERE user_id = ? ',
               [id],
               (tx, results) => {
                  let len = results.rows.length;
                  if (len > 0) {
                     setUserFullName(results.rows.item(0).user_fullname.toString());
                     setImgPath("file://" + results.rows.item(0).img.toString());
                     console.log('Resultat de la Select DRAWERHEADER: ' + JSON.stringify(results.rows(0)));

                  } else {
                     console.log('Erreur lors de la recuperation des données');
                  }
               },
            );
         })
      };

      fetchData();
      console.log('imgPath: ' + imgPath);


   });


   return (
      <View style={styles.headerDrawer}>

         <Avatar
            size={100}
            rounded
            containerStyle={{ backgroundColor: "#c7c7c5", marginLeft: '3%' }}
            source={imgPath ? { uri: imgPath } : undefined}
            icon={imgPath ? undefined : { name: "pencil", type: "font-awesome" }}
         />

         <Text style={styles.titre} >{userFullName.toUpperCase()}</Text>
      </View>
   )
}



const styles = StyleSheet.create({
   // drawer style

   headerDrawer: {
      flexDirection: 'column',
      backgroundColor: COLOR.oran1,
      marginTop: -5,
      elevation: 25,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      padding: '7%',


   },
   titre: {
      color: COLOR.bg_White,
      fontSize: FONTSIZE.title,
      fontWeight: 'bold',
      alignSelf: 'stretch',
      marginLeft: '3%',

   },
   imgCard: {
      // backgroundColor: '#BBB',
      // width: 150,
      // height: 150,
      // borderRadius: 100,
      // borderColor: COLOR.oran2,
      // marginBottom: '3%',
      // borderTopWidth: 4,
      // borderLeftWidth: 4,
      // borderRightWidth: 4,
   }
});

export default DrawerHeader