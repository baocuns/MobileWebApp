import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

import { userInfo } from '../redux/apiRequest';
import { useTheme } from '@react-navigation/native';
import i18n from '../i18n'

const UserInfo = ({ route, navigation }) => {
  // const [profile, setProfile] = useState(null);
  const { profile } = route.params;
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
        }}>
        <FastImage
          source={{ uri: profile?.images[0] }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flex: 3,
        }}>
        {/* full name */}
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={profile?.fullname}
            // onChangeText={value => setFullname(value)}
            placeholder="fullname"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={profile?.email}
            // onChangeText={value => setEmail(value)}
            placeholder="email"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={profile?.phone}
            // onChangeText={value => setPhone(value)}
            placeholder="phone"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={new Date(profile?.birthday).toLocaleString()}
            // onChangeText={value => setBirthday(value)}
            placeholder="birthday"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={profile?.sex}
            // onChangeText={value => setSex(value)}
            placeholder="sex"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={profile?.country}
            onChangeText={value => setCountry(value)}
            placeholder="country"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: 'gray',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,

          }}>
          <TextInput
            value={profile?.address}
            onChangeText={value => setAddress(value)}
            placeholder="address"
            style={{
              fontWeight: 'bold', color: colors.text
            }}
          />
        </View>
      </View>
      <TouchableOpacity>
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
