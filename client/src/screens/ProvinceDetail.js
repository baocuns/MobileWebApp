import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ImagePlace from '../components/ImagePlace';
import IconAnt from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { getAllPlaceForNameRoute, searchByNameRoute } from '../routes/APIRoute';
import FastImage from 'react-native-fast-image';
import { saveNearSawTour } from '../redux/tourSlice';
import i18n from '../i18n';
import Lottie from 'lottie-react-native';
import { useTheme } from '@react-navigation/native';
import { Box, Button } from 'native-base';

const ProvinceDetail = ({ navigation, route }) => {
  const { area_slug, image, name, status } = route.params;
  const [itemPlaceList, setItemPlaceList] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const { colors } = useTheme();

  const fetchData = async () => {
    setIsFetching(true);
    try {
      if (status === 'search') {
        const res = await axios.get(`${searchByNameRoute}/${area_slug}`);
        setItemPlaceList(res.data.data);
      } else {
        const res = await axios.get(`${getAllPlaceForNameRoute}/${area_slug}`);
        setItemPlaceList(res.data.data);
      }
      if (itemPlaceList.length == 0) {
        setIsFound(false);
      }
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isFetching && (
        <Lottie
          style={{ zIndex: 10 }}
          source={require('../assets/lotties/travel.json')}
          autoPlay
          loop
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          {!image ? (
            <ImagePlace
              navigation={navigation}
              image={itemPlaceList[0]?.images[0]}
            />
          ) : (
            <ImagePlace navigation={navigation} image={image} />
          )}
          {itemPlaceList.length > 0 && (
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 26 }}>
                {status === 'search' && 'Tìm kiếm với: '}
                {name}
              </Text>
              <Text
                style={{
                  color: colors.text,
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginVertical: 10,
                }}>
                {i18n.t('activity_should_try')}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {itemPlaceList.map(data => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailPlace', {
                        slug: data.slug,
                        data: data
                      })
                    }
                    style={{
                      width: 150,
                      marginRight: 10,
                      borderRadius: 10,
                      backgroundColor: 'rgba(0, 255, 255, 0.7)',
                    }}>
                    <FastImage
                      key={data.id}
                      source={{ uri: data.images[0] }}
                      style={{
                        width: 150,
                        height: 100,
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
                        <Text style={{ fontSize: 10 }}>{data.tourdate}</Text>
                        <Text style={{ fontWeight: 'bold', color: colors.text }}>
                          {data.title}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: colors.text, fontWeight: 'bold' }}>
                          Chỉ từ: {data.price}đ
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Text
                style={{
                  color: colors.text,
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginVertical: 20,
                }}>
                {i18n.t('outstanding_activity')}
              </Text>
              {itemPlaceList.map(data => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailPlace', {
                      slug: data.slug,
                    })
                  }
                  style={{
                    width: '100%',
                    marginVertical: 10,
                    borderRadius: 10,
                    backgroundColor: 'rgba(0, 255, 255, 0.7)',
                  }}>
                  <FastImage
                    key={data.id}
                    source={{ uri: data.images[0] }}
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
                      <Text style={{ fontSize: 10 }}>{data.tourdate}</Text>
                      <Text style={{ fontWeight: 'bold', color: colors.text }}>
                        {data.title}
                      </Text>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <Text>{data.numberStarAvarage}</Text>
                                    <IconAnt name='star' color='#FFD700' />
                                    <Text>({data.numberComment})</Text> */}
                      </View>
                    </View>
                    <View>
                      <Text style={{ color: colors.text, fontWeight: 'bold' }}>
                        Chỉ từ: {data.price}đ
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {!isFound && itemPlaceList.length == 0 && (
            <View>
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 24,
                  fontWeight: '600',
                  color: colors.text,
                }}>
                {name}
              </Text>
              <Text
                style={{ marginHorizontal: 20, fontSize: 18, fontWeight: '600' }}>
                Không tìm thấy địa điểm này
              </Text>
              <Box alignItems="center">
                <Button onPress={() => navigation.goBack()}>Trở về</Button>
              </Box>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default ProvinceDetail;
