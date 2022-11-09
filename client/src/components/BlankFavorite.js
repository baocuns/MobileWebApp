import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import blankFavorive from '../assets/images/blank-favorite.png';
import {useNavigation} from '@react-navigation/native';

const BlankFavorite = () => {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Image source={blankFavorive}></Image>
      <Text>Mục Yêu thích đang trống</Text>
      <Text>Nhấn vào icon hình tim trên trang dịch vụ để lưu vào đây</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          marginTop: 10,
          borderWidth: 1,
          paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: '#ffa500',
          borderRadius: 10,
        }}>
        <Text style={{color: '#000', fontSize: 20}}>Khám phá ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlankFavorite;
