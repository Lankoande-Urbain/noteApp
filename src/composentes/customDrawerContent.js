import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stopMapper } from 'react-native-reanimated';
import { COLOR } from '../outils/constantes';
import { Icon } from '@rneui/themed';
import DrawerHeader from './drawerHeader';

function CustomDrawerContent(props) {
   const { navigation } = props;

   return (
      <DrawerContentScrollView {...props}>
         {/* <DrawerItemList {...props} /> */}
         <DrawerHeader />
         <View style={{ flex: 1, minHeight: 700 }}>

            <View style={styles.about}>

               <View style={styles.aboutHeader}>
                  <Icon name='info' color={COLOR.oran1} size={50} style={styles.aboutIcon} />
                  <Text style={styles.aboutTitre}>About</Text>
               </View>
               <View style={styles.aboutTextCard}>
                  <Text style={styles.aboutText}>
                     <View style={{ width: 35, backgroundColor: '#fff' }}></View>
                     ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus est, sagittis nec ligula eget, sollicitudin egestas neque. Nunc id libero sapien. Fusce iaculis, odio ut ornare ultrices, magna lacus sollicitudin lorem, quis iaculis nulla justo et nibh
                  </Text>
               </View>
               <View style={styles.athor}>
                  <View style={styles.aboutHeader}>
                     <Icon name='badge' color={COLOR.oran1} size={50} style={styles.aboutIcon} />
                     <Text style={styles.aboutTitre}>Athor</Text>
                  </View>
                  <View style={styles.athorName}>
                     <Icon name='account-circle' color={COLOR.oran1} size={25} />
                     <Text>Lankoande Urbain</Text>
                  </View>
                  <View style={styles.athorMail}>
                     <Icon name='alternate-email' color={COLOR.oran1} size={25} />
                     <Text>lankoandeurbain8@gmail.com</Text>
                  </View>
               </View>

            </View>
            {/* btn Lougout */}
            <TouchableOpacity style={styles.btnLogout}>
               <Icon name='power-settings-new' color={COLOR.bg_White} size={33} style={styles.btnIcon} />
               <Text style={styles.btnText}>logout</Text>

            </TouchableOpacity>
         </View>

      </DrawerContentScrollView>
   );
}

const styles = StyleSheet.create({
   btnLogout: {
      flexDirection: 'row',
      marginVertical: 10,
      alignSelf: 'center',
      backgroundColor: COLOR.oran2,
      borderRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 7,
      opacity: 0.9,
      position: 'absolute',
      bottom: 0,

   },
   btnIcon: {
      paddingRight: 3,
      alignSelf: 'center',
   },
   btnText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: COLOR.bg_White,
      textTransform: 'uppercase',
   },

   about: {
      elevation: 10,
      paddingHorizontal: 25,
   },
   aboutHeader: {
      flexDirection: 'row',
   },
   abouticon: {
      marginRight: 3
   },
   aboutTitre: {
      color: COLOR.black,
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'flex-end',

   },
   aboutTextCard: {
      flexDirection: 'row'
   },
   aboutText: {
      letterSpacing: 2,
      lineHeight: 30,

   },
   athor: {
      marginTop: 15,
      flexDirection: 'column',
   },
   athorName: {
      flexDirection: 'row',
      paddingTop: 10,
   },
   athorMail: {
      flexDirection: 'row',
   }
});
export default CustomDrawerContent;