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

import { useNavigation, useTheme } from '@react-navigation/native';
import i18n from '../i18n';

const BlankFavorite = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Image source={blankFavorive}></Image>
      <Text style={{ color: colors.text }}>{i18n.t('blank_favourite')}</Text>
      <Text style={{ color: colors.text }}>{i18n.t('action_discover')}</Text>
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
        <Text style={{ color: colors.text, fontSize: 20 }}>{i18n.t('discover')}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({});

export default BlankFavorite;
