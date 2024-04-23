import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONTSIZE } from '../outils/constantes'
import { Dropdown } from 'react-native-element-dropdown';
// import { Icon } from 'react-native-vector-icons/Icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Icon } from '@rneui/themed';

const data = [
   { label: 'Anglais', value: '1' },
   { label: 'Français', value: '2' },
];

const Header = ({ titre, isDrawerShown, onSubmit }) => {

   const [value, setValue] = useState(null);
   const [isFocus, setIsFocus] = useState(false);


   return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
         {isDrawerShown && (
            <TouchableOpacity
               activeOpacity={1}
               onPress={onSubmit}
            >
               <Icon name='menu' color={'#fff'} size={36} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
         )}
         <View style={headerStyles.header}>
            <Text style={headerStyles.title}>{titre}</Text>

         </View>

         <View>
            <View style={styles.container}>

               <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: COLOR.oran1 }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  iconColor='#fff'
                  data={data}
                  // search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select ' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  itemTextStyle={{ color: COLOR.oran1 }}

                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}

                  onChange={item => {
                     setValue(item.value);
                     setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                     <AntDesign
                        style={styles.icon}
                        color={isFocus ? COLOR.oran1 : COLOR.bg_White}
                        name="Safety"
                        size={20}

                     />

                  )}
               />
            </View>
         </View>
      </View>
   )
}

const headerStyles = StyleSheet.create({

   header: {
      backgroundColor: COLOR.oran1,
      padding: 7,
      height: 65,
      justifyContent: 'space-between',

   },
   title: {
      color: COLOR.bg_White,
      fontWeight: 'bold',
      fontSize: FONTSIZE.title,
      textTransform: 'uppercase',
      alignSelf: 'center',
      marginVertical: 15,
      marginLeft: 75,
   },
})


const styles = StyleSheet.create({
   container: {
      backgroundColor: COLOR.oran1,
      width: 125,
      marginRight: 15
   },
   dropdown: {
      height: 50,
      borderColor: COLOR.bg_White,
      borderRadius: 8,
      paddingHorizontal: 8,

   },
   icon: {
      marginRight: 5,
   },
   label: {
      position: 'absolute',
      backgroundColor: COLOR.oran1,
      left: 22,
      top: 15,
      fontWeight: 'bold',
      zIndex: 999,
      marginLeft: 7,
      fontSize: 15,
      color: '#fff'
   },
   placeholderStyle: {
      fontSize: 16,
      color: COLOR.bg_White,
   },
   selectedTextStyle: {
      fontSize: 16,
      color: COLOR.bg_White,
   },
   iconStyle: {
      width: 25,
      height: 25,
      marginLeft: -10

   },
});
export default Header