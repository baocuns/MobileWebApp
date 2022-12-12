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
import axios from 'axios';
import FastImage from 'react-native-fast-image';

import {userInfo} from '../redux/apiRequest';
import {useTheme} from '@react-navigation/native';
import i18n from '../i18n';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {loadingUser} from '../utils/function';
const UserInfo = ({route, navigation}) => {
  // const [profile, setProfile] = useState(null);
  const [profile, setProfile] = useState();
  const user = useSelector(state => state.auth.login.currentUser);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  // const email = useSelector(state => state.auth.login.currentUser);
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [photos, setPhotos] = useState('');
  // const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  // photos
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

          console.log(e);
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
  const openCamera = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
    };

    launchCamera(options, response => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image piker');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button:', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        // const source = {
        //   uri: 'data:image/jpeg;base64,' + response.data,
        //   isStatic: true,
        // };
        const file = {
          fileCopyUri: null,
          height: response.assets[0].height,
          width: response.assets[0].width,
          name: response.assets[0].fileName,
          size: response.assets[0].fileSize,
          type: response.assets[0].type,
          uri: response.assets[0].uri,
        };
        setSingleFile(file);
        console.log(response.assets[0]);
        setimageUri(source);
      }
    });
  };
  const createUser = async () => {
    if (singleFile != null) {
      let formData = new FormData();
      // formData.append('camera', imageUri);
      formData.append('photos', singleFile);
      formData.append('user_id', user?._id);
      formData.append('fullname', fullname);
      formData.append('email', user?.email);
      formData.append('phone', phone);
      formData.append('birthday', birthday);
      formData.append('sex', sex);
      formData.append('country', country);
      formData.append('address', address);
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
          console.log('res.data.data', res);
          navigation.goBack();
        })
        .catch(err => {
          console.log('err.response.data', err);
        });
    }
  };

  // const { profile } = route.params;
  const {colors} = useTheme();
  const fetchData = async () => {
    console.log('Hello fen');
    const res = await loadingUser(user);
    setProfile(res);
  };
  useEffect(() => {
    fetchData();
  }, [user]);

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
              width: 50,
              height: 50,
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
                padding: 50,
                height: 50,
                borderRadius: 10,
                // height:
                //   ((screenWidth - 200) / singleFile.width) * singleFile.height,
                // width: screenWidth,
              }}
              source={{uri: singleFile.uri}}
            />
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <View>
            <TouchableOpacity className="bg-gray-600 my-4 px-4 rounded flex flex-row items-center justify-center py-2">
              <Text className="text-white mr-2 text-base, font-bold, items-center"></Text>
            </TouchableOpacity>
          </View> */}
          <View style={{padding: 10}}>
            <Button style={{}} title={'Select Photo'} onPress={selectFile} />
          </View>
          {/* camara */}
          {/* hiển hình tại đây */}
          {/* <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
            // borderWidth: 2,
            borderColor: 'black',
          }}
          // source={{uri: imageUri.uri}}
          source={imageUri}
        /> */}
          <View style={{padding: 10}}>
            <Button
              title={'Open Camara'}
              onPress={() => {
                openCamera();
                //   alert('presed');
              }}
            />
          </View>
        </View>
        {/* <FastImage
          source={{uri: profile?.images[0]}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          resizeMode="cover"
        /> */}
      </View>
      <View
        style={{
          flex: 3,
        }}>
        {/* full name */}
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,

            marginBottom: 5,
            backgroundColor: 'white',

            marginBottom: 10,
          }}>
          <TextInput
            value={profile?.fullname}
            onChangeText={fullname => setFullname(fullname)}
            placeholder="fullname"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <TextInput
            value={user ? user.email : email}
            // value={profile?.email}
            onChangeText={email => setEmail(email)}
            placeholder="email"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <TextInput
            value={profile?.phone}
            onChangeText={phone => setPhone(phone)}
            placeholder="phone"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <TextInput
            // value={new Date(profile?.birthday).toLocaleString(Date)}
            value={profile?.birthday}
            onChangeText={birthday => setBirthday(birthday)}
            placeholder="birthday"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <TextInput
            value={profile?.sex}
            onChangeText={sex => setSex(sex)}
            placeholder="sex"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <TextInput
            value={profile?.country}
            onChangeText={country => setCountry(country)}
            placeholder="country"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <TextInput
            value={profile?.address}
            onChangeText={address => setAddress(address)}
            placeholder="address"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}
          />
        </View>
      </View>

      {/* create user */}
      <TouchableOpacity onPress={createUser}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: 'gray',
            borderRadius: 10,
          }}>
          <Pressable>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              create user
              {i18n.t('save')}
            </Text>
          </Pressable>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserInfo;

// useEffect(() => {
// fetch(
//   `https://api.travels.games/api/v1/profile/show/details/${user.username}`,
//   {
//     method: 'post',
//     headers: {
//       token: `Travel ${user.accessToken}`,
//     },
//   },
// )
//   .then(result => {
//     result.data && setProfile(result.data[0]);
//     console.log(result.json());
//   })
//   .catch(err => {
//     console.log('null');
//     setProfile(null);
//   });
// }, []);
// const p = async () => {
//   const res = await fetch(
//     `https://api.travels.games/api/v1/profile/show/details/${user.username}`,
//     {
//       headers: {
//         token: `Travel ${user.accessToken}`,
//       },
//     },
//   );
//   console.log(res.json());
// };
// p();
