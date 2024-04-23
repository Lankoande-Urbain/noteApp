import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stopMapper } from 'react-native-reanimated';
import { COLOR } from '../outils/constantes';
import { Icon } from '@rneui/themed';
import DrawerHeader from './drawerHeader';
import { useTranslation } from 'react-i18next';


function CustomDrawerContent({ props, handleLogout }) {

   const { t } = useTranslation();
   return (
      <DrawerContentScrollView {...props}>
         {/* <DrawerItemList {...props} /> */}
         <DrawerHeader />
         <View style={{ flex: 1, minHeight: 600 }}>

            <View style={styles.about}>

               <View style={styles.aboutHeader}>
                  <Icon name='info' color={COLOR.oran1} size={50} style={styles.aboutIcon} />
                  <Text style={styles.aboutTitre}>
                     {t('screens.drawer.about')}
                  </Text>
               </View>
               <View style={styles.aboutTextCard}>
                  <Text style={styles.aboutText}>
                     <View style={{ width: 35, backgroundColor: '#fff' }}></View>
                     {t('screens.drawer.text')}
                  </Text>
               </View>
               <View style={styles.athor}>
                  <View style={styles.aboutHeader}>
                     <Icon name='badge' color={COLOR.oran1} size={50} style={styles.aboutIcon} />
                     <Text style={styles.aboutTitre}>
                        {t('screens.drawer.athor')}
                     </Text>
                  </View>
                  <View style={styles.athorName}>
                     <Icon name='account-circle' color={COLOR.oran1} size={25} />
                     <Text style={{ color: COLOR.gris }}>Lankoande Urbain</Text>
                  </View>
                  <View style={styles.athorMail}>
                     <Icon name='alternate-email' color={COLOR.oran1} size={25} />
                     <Text style={{ color: COLOR.gris }}>lankoandeurbain8@gmail.com</Text>
                  </View>
               </View>

            </View>
            {/* btn Lougout */}
            <TouchableOpacity style={styles.btnLogout}
               // onPress={() => handleLogout()}

               onPress={() => {
                  Alert.alert(t('screens.drawer.btnOption.title'), t('screens.drawer.btnOption.body'), [
                     { text: t('screens.drawer.btnOption.no'), style: 'cancel' },
                     { text: t('screens.drawer.btnOption.yes'), onPress: () => handleLogout() },
                  ]);
               }}
            >
               <Icon name='power-settings-new' color={COLOR.bg_White} size={33} style={styles.btnIcon} />
               <Text style={styles.btnText}>
                  {t('screens.drawer.btnLogout')}
               </Text>

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
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'flex-end',

   },
   aboutTextCard: {
      flexDirection: 'row'
   },
   aboutText: {
      letterSpacing: 2,
      lineHeight: 30,
      color: COLOR.gris,

   },
   athor: {
      marginTop: 15,
      flexDirection: 'column',
   },
   athorName: {
      flexDirection: 'row',
      paddingTop: 10,
      color: COLOR.gris,
   },
   athorMail: {
      flexDirection: 'row',
      color: COLOR.gris,
   }
});
export default CustomDrawerContent;