import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONTSIZE } from '../outils/constantes'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import CountryFlag from "react-native-country-flag";
import { useTranslation } from 'react-i18next';


const Header = ({ titre, isDrawerShown, onSubmit }) => {

   const [value, setValue] = useState('us');
   const [isFocus, setIsFocus] = useState(false);
   const { t, i18n } = useTranslation();


   const data = [
      { label: t('langue.us'), value: 'us' },
      { label: t('langue.fr'), value: 'fr' },
   ];

   const ChangeLange = (lang) => {
      // console.log(lang)
      i18n.changeLanguage(lang);
   }
   return (
      <View style={styles.body}>
         {isDrawerShown ?
            // icon menu
            <TouchableOpacity
               style={{
                  marginTop: 'auto',
                  marginBottom: 'auto'
               }}
               activeOpacity={1}
               onPress={onSubmit}
            >
               <Icon name='menu' color={'#fff'} size={36} style={{ marginLeft: 15, }} />
            </TouchableOpacity>
            :
            // icon de goback
            <TouchableOpacity
               style={{
                  marginTop: 'auto',
                  marginBottom: 'auto'
               }}
               activeOpacity={1}
               onPress={onSubmit}
            >
               <Icon name='west' color={'#fff'} size={36} style={{ marginLeft: 15, }} />
            </TouchableOpacity>
         }
         <View style={styles.header}>
            <Text style={[styles.title,]}>
               {titre}
            </Text>
         </View>

         <View style={styles.container}>
            <Dropdown
               style={[styles.dropdown, isFocus && { borderColor: COLOR.oran1 }]}
               placeholderStyle={styles.placeholderStyle}
               selectedTextStyle={styles.selectedTextStyle}
               inputSearchStyle={styles.inputSearchStyle}

               iconColor='#fff'
               data={data}
               // search
               maxHeight={300}
               labelField="label"
               valueField="value"
               placeholder={!isFocus ? 'Select ' : '...'}
               value={value}
               itemTextStyle={{ color: COLOR.oran1 }}

               onFocus={() => setIsFocus(true)}
               onBlur={() => setIsFocus(false)}

               onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                  ChangeLange(item.value);
               }}
               renderLeftIcon={() => (

                  <CountryFlag isoCode={value} size={14} />

               )}
            />
         </View>
      </View>

   )
}


const styles = StyleSheet.create({
   body: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 65,
   },
   container: {
      backgroundColor: COLOR.oran1,
      width: 85,
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: '3%',

   },
   header: {
      minWidth: '64%',
      maxWidth: 280,
      // backgroundColor: 'red'

   },
   title: {
      color: COLOR.bg_White,
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',

   },
   dropdown: {
      height: 50,
      borderColor: COLOR.bg_White,
      paddingHorizontal: 8,

   },
   icon: {
      marginRight: 5,
   },
   placeholderStyle: {
      fontSize: 16,
      color: COLOR.bg_White,
   },
   selectedTextStyle: {
      fontSize: 16,
      color: COLOR.bg_White,
      fontWeight: 'bold',
      marginLeft: 3
   },

});
export default Header