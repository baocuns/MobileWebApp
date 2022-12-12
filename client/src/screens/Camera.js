import {View, Text, Button, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

const Camera = () => {
  const [imageUri, setimageUri] = useState('');
  const openCamera = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image piker');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button:', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        setimageUri(source);
      }
    });
  };
  return (
    // <SafeAreaView>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
      }}>
      <Button
        title={'Open Camara'}
        onPress={() => {
          openCamera();
          //   alert('presed');
        }}
      />
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
          // borderWidth: 2,
          borderColor: 'black',
        }}
        source={imageUri}
      />
    </View>
    // </SafeAreaView>
  );
};

export default Camera;
