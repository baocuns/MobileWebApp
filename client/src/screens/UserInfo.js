import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

// const [number, onChangeNumber] = React.useState(null);

const UserInfo = () => {
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
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Họ
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Tên
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Họ (như trên các Giấy tờ Du Lịch Khác)
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Tên (như trên các Giấy tờ Du Lịch Khác)
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Quốc gia
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Mã quốc gia
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Danh xưng
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Số điện thoại
        </TextInput>
        <TextInput
          style={{
            color: 'gray',
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 15,
            marginBottom: 10,
          }}>
          {''} Email
        </TextInput>
      </View>
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
    </ScrollView>
  );
};

export default UserInfo;
// yarn react-native run-android --active-arch-only
