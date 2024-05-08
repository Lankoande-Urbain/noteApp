import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR, FONTSIZE } from '../outils/constantes';
import { Icon, Button } from '@rneui/themed';
import DrawerHeader from './drawerHeader';
import { useTranslation } from 'react-i18next';


function CustomDrawerContent({ props, handleLogout, navigation }) {

   const { t } = useTranslation();
   return (
      <DrawerContentScrollView {...props}>
         <View style={{ flex: 1, }}>
            <TouchableOpacity
               activeOpacity={1}
               onPress={() => navigation.navigate('profile')}
            >
               <DrawerHeader />
            </TouchableOpacity>

            <View >


               {/* <View style={styles.about}>
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
               </View> */}
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

               {/* btn Lougout */}
               <Button
                  buttonStyle={styles.btn}

                  titleStyle={styles.btnTitre}
                  color={COLOR.oran2}

                  onPress={() => {
                     Alert.alert(t('screens.drawer.btnOption.title'), t('screens.drawer.btnOption.body'), [
                        { text: t('screens.drawer.btnOption.no'), style: 'cancel' },
                        { text: t('screens.drawer.btnOption.yes'), onPress: () => handleLogout() },
                     ]);
                  }}
                  icon={
                     <Icon name='power-settings-new' color={COLOR.bg_White} size={33} style={styles.btnIcon} />
                  }
               >
                  {t('screens.drawer.btnLogout')}
               </Button>
            </View>
         </View>
      </DrawerContentScrollView>
   );
}

const styles = StyleSheet.create({
   about: {
      paddingHorizontal: 25,
   },
   aboutHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 7,
   },
   abouticon: {
      marginRight: 3,
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
      marginTop: '15%',
      flexDirection: 'column',
      paddingHorizontal: 25,
      marginBottom: 15,

   },
   athorName: {
      flexDirection: 'row',
      paddingTop: 10,
      color: COLOR.gris,
   },
   athorMail: {
      flexDirection: 'row',
      color: COLOR.gris,
   },
   btn: {
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
      elevation: 10,
      borderRadius: 20,
      marginBottom: 30,
      marginTop: '93%',
   },
   btnTitre: {
      fontWeight: 'bold',
      fontSize: FONTSIZE.title2,
      letterSpacing: 2.5,
   }
});
export default CustomDrawerContent;