import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  I18nManager,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';

import FastImage from 'react-native-fast-image';

import {useTheme} from '@react-navigation/native';

const Milo = ({route, navigation}) => {
  const [profile, setProfile] = useState(null);

  const dispatch = useDispatch();

  const [singleFile, setSingleFile] = useState(null);
  const selectFile = async () => {
    try {
      let res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      res.map(e => {
        Image.getSize(e.uri, (width, height) => {
          e.width = width;
          e.height = height;
          setSingleFile(e);
        });
      });
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const [imageUri, setimageUri] = useState(null);

  const createUser = async () => {
    if (singleFile != null) {
      let formData = new FormData();

      formData.append('photos', singleFile);

      console.log(user);
      console.log(formData);
      fetch('https://api.travels.games/api/v1/profile/store', {
        method: 'post',
        body: formData,
        headers: {
          token: `Travel ${user?.accessToken}`,
          _id: user?._id,
        },
      })
        .then(res => {
          console.log('res.data.data', res.data);
          navigation.goBack();
        })
        .catch(err => {
          console.log('err.response.data', err);
        });
    }
  };

  // const { profile } = route.params;
  const {colors} = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 10,
        }}>
        {profile && (
          <FastImage
            source={{uri: profile?.images[0]}}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        )}
        <View
          style={
            {
              // paddingLeft: 30,
              // paddingRight: 30,
            }
          }>
          {singleFile && (
            <Image
              style={{
                padding: 10,
                height:
                  ((screenWidth - 200) / singleFile.width) * singleFile.height,
                width: screenWidth,
              }}
              source={{uri: singleFile.uri}}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={selectFile}
          className="bg-gray-600 my-4 px-4 rounded flex flex-row items-center justify-center py-2">
          <Text className="text-white mr-2 text-base, font-bold, items-center">
            Select Photo
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Milo;
