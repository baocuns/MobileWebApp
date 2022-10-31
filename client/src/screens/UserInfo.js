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
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const UserInfo = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
        }}>
        <Icon
          style={{
            color: 'gray',
            fontSize: 80,
          }}
          name="user-circle-o"
        />
      </View>
      <View
        style={{
          flex: 3,
        }}>
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
            placeholder="address"
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
            placeholder="photos"
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
// yarn react-native run-android --active-arch-only
