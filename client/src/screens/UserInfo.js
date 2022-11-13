import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

import {userInfo} from '../redux/apiRequest';

const UserInfo = ({route, navigation}) => {
  // const [profile, setProfile] = useState(null);
  const {profile} = route.params;
  const user = useSelector(state => state.auth.login.currentUser);
  // const [fullname, setFullname] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [birthday, setBirthday] = useState('');
  // const [sex, setSex] = useState('');
  // const [country, setCountry] = useState('');
  // const [address, setAddress] = useState('');
  // const [image, setImage] = useState('');
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getList()
  // },[])
  // const onChangeFullname = value => {
  //   setFullname(value);
  // };
  // const onChangeEmail = value => {
  //   setEmail(value);
  // };

  // const onChangePhone = value => {
  //   setPhone(value);
  // };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
        }}>
        <FastImage
          source={{uri: profile?.images[0]}}
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={profile?.fullname}
            // onChangeText={value => setFullname(value)}
            placeholder="fullname"
            style={{
              fontWeight: 'bold',
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={profile?.email}
            // onChangeText={value => setEmail(value)}
            placeholder="email"
            style={{
              fontWeight: 'bold',
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={profile?.phone}
            // onChangeText={value => setPhone(value)}
            placeholder="phone"
            style={{
              fontWeight: 'bold',
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={new Date(profile?.birthday).toLocaleString()}
            // onChangeText={value => setBirthday(value)}
            placeholder="birthday"
            style={{
              fontWeight: 'bold',
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={profile?.sex}
            // onChangeText={value => setSex(value)}
            placeholder="sex"
            style={{
              fontWeight: 'bold',
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={profile?.country}
            onChangeText={value => setCountry(value)}
            placeholder="country"
            style={{
              fontWeight: 'bold',
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
            backgroundColor: 'white',
          }}>
          <TextInput
            value={profile?.address}
            onChangeText={value => setAddress(value)}
            placeholder="address"
            style={{
              fontWeight: 'bold',
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
              Save
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
