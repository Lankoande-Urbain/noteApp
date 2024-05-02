import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONTSIZE } from '../outils/constantes'
import { Dropdown } from 'react-native-element-dropdown';
// import { Icon } from 'react-native-vector-icons/Icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 65, }}>
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
         <View style={headerStyles.header}>
            <Text style={[headerStyles.title,]}>
               {titre}
            </Text>
         </View>

         <View>
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

                     <CountryFlag isoCode={value} size={16} style={{}} />

                  )}
               />
            </View>
         </View>
      </View>
   )
}

const headerStyles = StyleSheet.create({

   header: {
      minWidth: 200,
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
})


const styles = StyleSheet.create({
   container: {
      backgroundColor: COLOR.oran1,
      width: 85,
      marginTop: 'auto',
      marginBottom: 'auto'
      // marginRight: 15
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