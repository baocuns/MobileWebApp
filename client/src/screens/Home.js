import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import homeScreen from '../assets/images/home.jpg';

const Home = ({navigation}) => {
  return (
    <ImageBackground source={homeScreen} style={{flex: 1}}>
      <StatusBar hidden />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '10%',
            width: '100%',
          }}>
          <Text style={{color: '#fff', fontSize: 25, fontWeight: '600'}}>
            Tìm kiếm niềm vui của bạn
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '10%',
            width: '100%',
          }}>
          <TextInput style={{color: '#fff', fontSize: 25, fontWeight: '600'}} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default Home;
