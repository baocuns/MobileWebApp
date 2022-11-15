import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import blankFavorive from '../assets/images/blank-favorite.png';
import BlankFavorite from '../components/BlankFavorite';
import FavoriteList from '../components/FavoriteList';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import NearList from '../components/NearList';
import BackArrow from '../components/BackArrow';
import { useTheme } from '@react-navigation/native';
import i18n from '../i18n'

const Favorite = ({ navigation }) => {
  const renderScene = SceneMap({
    first: () => <FavoriteList navigation={navigation} />,
    second: () => <NearList navigation={navigation} />,
  });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: i18n.t('favourite') },
    { key: 'second', title: i18n.t('near_see') },
  ]);
  const [isBlankFavarite, setIsBlankFavarite] = useState(true);
  const [isSaved, setisSaved] = useState(true);
  const { colors } = useTheme();
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ff4500' }}
      style={{ backgroundColor: colors.card, color: colors.text }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? 'red' : colors.text, margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <ImageBackground style={{ flex: 1, margin: 10 }}>
      <View style={{ height: '10%' }}>
        <BackArrow />
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default Favorite;
