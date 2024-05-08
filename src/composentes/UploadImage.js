import React, { useEffect, useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCropPicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import { COLOR } from '../outils/constantes';
import { Images } from '@rneui/themed';
import { Avatar } from '@rneui/themed';


const UploadImage = ({ imgPathOld, onImageChange, sourcePath, userId }) => {

   console.log('imgPathOld: ' + imgPathOld);
   const [image, setImage] = useState();
   const [imgPath, setImgPath] = useState(null);

   const addImage = () => {
      ImageCropPicker.openPicker({
         width: 300,
         height: 400,
         cropping: true
      }).then(image => {
         console.log('Contenue image: ' + image);
         const source = { uri: image.path };
         source && setImage(source);
         sourcePath(source.uri)

         // Chemin où la photo sera enregistrée sur le serveur
         const destinationPath = `${RNFS.DocumentDirectoryPath}/image_User_000${userId}.jpg`;
         // console.log('destinationPath:  ' + destinationPath);
         onImageChange(destinationPath);


      });
   };


   return (
      <View style={imageUploaderStyles.container}>
         {
            <Image source={image ? image : { uri: "file://" + imgPathOld }} style={imageUploaderStyles.img} />

         }

         <View style={imageUploaderStyles.uploadBtnContainer}>
            <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
               <Text>{image ? 'Edit' : 'Upload'} Image</Text>
               <AntDesign name="camera" size={20} color={COLOR.oran1} />
            </TouchableOpacity>
         </View>
      </View>
   )
}

const imageUploaderStyles = StyleSheet.create({
   container: {
      elevation: 20,
      height: 150,
      width: 150,
      backgroundColor: '#efefef',
      position: 'relative',
      borderRadius: 999,
      overflow: 'hidden',
   },
   uploadBtnContainer: {
      opacity: 0.7,
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'lightgrey',
      width: '100%',
      height: '25%',
   },
   uploadBtn: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center'
   },
   img: {
      width: 150,
      height: 150,
      alignSelf: 'center'
   }
})



export default UploadImage;
