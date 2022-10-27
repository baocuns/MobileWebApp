import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
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
  Pressable,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import homeScreen from '../assets/images/launch_screen.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  getSliderRoute,
  getToursLastHourRoute,
  HOST_CRAWL,
} from '../routes/APIRoute';
import IconAnt from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';

const {width: screenWidth} = Dimensions.get('window');

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home = ({navigation}) => {
  // const [imagelist, setImagelist] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [lastTours, setLastTours] = useState([]);
  const [search, setSearch] = useState('');
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get(getSliderRoute);
      setPlaceList(res.data);
      const res2 = await axios.get(getToursLastHourRoute);
      setLastTours(res2.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ImageBackground source={homeScreen} style={{flex: 1}}>
      <StatusBar hidden />
      <SafeAreaView style={{flex: 1}}>
        {!isFetching ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                width: '100%',
              }}>
              <Text style={{color: '#fff', fontSize: 25, fontWeight: '600'}}>
                Tìm kiếm niềm vui của bạn
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                width: '100%',
              }}>
              <Icon
                style={{position: 'absolute', left: 55, zIndex: 1}}
                name="search"
                size={20}
                color="#000"
              />
              <TextInput
                onSubmitEditing={() =>
                  navigation.navigate('ProvinceDetail', {
                    url: `https://travel.com.vn/tim-tour/${search}/ket-qua-tim-kiem.aspx`,
                    name: search,
                  })
                }
                value={search}
                onChangeText={setSearch}
                style={{
                  paddingLeft: 40,
                  borderRadius: 50,
                  width: '80%',
                  height: 40,
                  backgroundColor: '#fff',
                  fontWeight: '600',
                }}
                placeholder="Tìm địa điểm"
              />
            </View>
            {/* ScrollView */}
            <View style={{width: screenWidth, height: 220}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {placeList.map((place, index) => {
                  return (
                    <Pressable
                      onPress={() =>
                        navigation.navigate('ProvinceDetail', {
                          area_slug: place.slug,
                          image: place.thumb,
                          name: place.title,
                        })
                      }
                      key={index}
                      style={{position: 'relative'}}>
                      <FastImage
                        style={styles.imageSlideContainer}
                        source={{uri: place.thumb}}
                        resizeMode="cover"></FastImage>
                      <Text
                        style={{
                          position: 'absolute',
                          left: 20,
                          bottom: 10,
                          color: '#fff',
                        }}>
                        {place.title}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
            {/* Tour giờ chót */}
            <Text
              style={{
                color: '#000',
                fontSize: 25,
                fontWeight: '600',
                margin: 10,
                shadowColor: 'grey',
              }}>
              Tour giờ chót
            </Text>
            {lastTours.map((data, index) => (
              <View key={index} style={{marginHorizontal: 10}}>
                <Pressable
                  key={data.code}
                  onPress={() =>
                    navigation.navigate('DetailPlace', {
                      url: data.detailURL,
                    })
                  }
                  style={{
                    width: '100%',
                    marginVertical: 10,
                    borderRadius: 10,
                    backgroundColor: '#F5F5F5',
                  }}>
                  <FastImage
                    source={{uri: data.image}}
                    style={{
                      width: '100%',
                      height: 200,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      margin: 10,
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 10}}>{data.start}</Text>
                      <Text style={{fontWeight: 'bold', color: '#000'}}>
                        {data.name}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>({data.time})</Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: '#000',
                          fontWeight: 'bold',
                          fontSize: 10,
                          textDecorationLine: 'line-through',
                        }}>
                        Giá gốc: {data.newPrice}
                      </Text>
                      <Text
                        style={{
                          color: '#000',
                          fontWeight: 'bold',
                          justifyContent: 'flex-end',
                        }}>
                        Chỉ từ: {data.newPrice}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageSlideContainer: {
    width: screenWidth / 3,
    height: '100%',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  imgListPlace: {
    flexDirection: 'row',
  },
  titlePlace: {
    margin: 10,
    color: '#fff',
    fontWeight: '600',
    fontSize: 30,
  },
  imgPlace: {
    marginLeft: 10,
    marginRight: 10,
    width: 120,
    height: 80,
    borderRadius: 10,
  },
});

export default Home;
