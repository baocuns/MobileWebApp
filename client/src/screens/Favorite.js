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

const Favorite = ({ navigation }) => {
  const renderScene = SceneMap({
    first: () => <FavoriteList navigation={navigation} />,
    second: () => <NearList navigation={navigation} />,
  });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Yêu thích' },
    { key: 'second', title: 'Xem Gần Đây' },
  ]);
  const [isBlankFavarite, setIsBlankFavarite] = useState(true);
  const [isSaved, setisSaved] = useState(true);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ff4500' }}
      style={{ backgroundColor: '#F5F5F5', color: '#000' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? 'red' : '#000', margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <ImageBackground style={{ flex: 1, margin: 10, backgroundColor: '#F5F5F5' }}>
      <View style={{ height: '8%' }}>
        <Text style={{ color: '#000', fontSize: 26, fontWeight: '600' }}>
          Yêu thích
        </Text>
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
