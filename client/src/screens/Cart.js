import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import BackArrow from '../components/BackArrow';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { PhotoRoute } from '../utils/constant';
import { formatVND } from '../utils/function';
import moment from 'moment'
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Loader from './Loader/Loader';



const Cart = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state.auth.login.currentUser);
  const [carts, setCarts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const loadingCart = async (accessToken, userId) => {
    try {
      setIsFetching(true)
      const res = await axios.post('https://api.travels.games/api/v1/cart/show', {
        a: 1
      },
        {
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "token": `Travel ${accessToken}`,
            "_id": userId
          }
        }
      );
      setCarts(res.data.data[0].tours);
      setIsFetching(false)

    } catch (error) {
      console.log(error);
      setIsFetching(false)
    }
  }
  const sumTotal = () => {
    let sum = 0;
    carts.map((cart) => {
      sum += cart.sale;
    })
    return sum;
  }

  const removeToCart = async (slug) => {
    setIsFetching(true);
    try {
      const res = await axios.delete('https://api.travels.games/api/v1/cart/delete/' + slug,
        {
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "token": `Travel ${user.accessToken}`,
            "_id": user._id
          }
        }
      );
      loadingCart(
        user.accessToken,
        user._id
      );
      setIsFetching(false);
      return res.data;
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  }

  useEffect(() => {
    loadingCart(
      user.accessToken,
      user._id
    );

  }, [])

  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const handleChangeItems = (value) => {
    var it = items
    if (it.some(e => e === value)) {
      it = it.filter(e => e !== value)
    } else {
      it.push(value)
    }
    // total
    var _total = 0
    carts && carts.map(tour => {
      if (it.some(e => e === tour._id)) {
        _total += tour.sale
      }
    })

    setItems(it)
    setTotal(_total)
  }

  const handleCreateOrder = () => {
    if (items.length > 0) {
      ToastAndroid.show("Hệ thống đang tạo đơn hàng !", ToastAndroid.SHORT);
      setIsLoader(true)
      const data = {
        items: items
      }
      axios.post(`https://api.travels.games/api/v1/order/create`, data, {
        headers: {
          "token": `Travel ${user?.accessToken}`,
          "_id": user?._id,
        }
      })
        .then(res => {
          setIsLoader(false)
          ToastAndroid.show("Hệ thống tạo đơn hàng thành công !", ToastAndroid.SHORT);
          const { _id } = res.data.data
          // console.log('data:', res.data.data);
          navigation.navigate('Checkout', { oid: _id })
        })
        .catch(err => {
          setIsLoader(false)
          const { data } = err?.response
          // console.log(data);
          ToastAndroid.show("Hệ thống tạo đơn hàng thất bại !", ToastAndroid.SHORT);
        })
    } else {
      ToastAndroid.show("Vui lòng chọn dịch vụ !", ToastAndroid.SHORT);
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {isLoader && (
        <Loader />
      )}
      <BackArrow name="Giỏ hàng" />
      <ScrollView
        style={{
          flex: 0.9,
        }}>
        <View
          style={{
            paddingLeft: 10,
          }}>

          <View className='mt-8'>
            {/* hình ảnh */}
            {carts.map((cart, index) => {
              return (
                <View key={index} className='border border-gray-200 p-2 m-2 drop-shadow-lg'>
                  <View
                    style={{
                      flexDirection: 'row',

                      alignSelf: 'center',
                    }}>
                    <View className='pt-2 pl-2'>
                      <Checkbox
                        status={items.some(e => e === cart._id) ? 'checked' : 'unchecked'}
                        onPress={() => handleChangeItems(cart._id)}
                        color={'red'}
                      />
                    </View>

                    <View
                      style={{
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      <FastImage
                        className='h-12 w-12 rounded'
                        source={{ uri: PhotoRoute + cart.images[0] }}
                      />
                    </View>

                    <View
                      style={{
                        paddingLeft: 20,
                        marginRight: 10,
                      }}>
                      <View
                        style={{
                          width: 250,
                        }}>
                        <Text
                          numberOfLines={2}
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 17,
                            paddingBottom: 5,
                          }}>
                          {cart.title}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: 'black', paddingBottom: 5 }} className='line-through'>
                          {formatVND(cart.price)}
                        </Text>
                        <Text style={{ color: 'black', paddingBottom: 5 }}>
                          {formatVND(cart.sale)}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: 'black', paddingBottom: 5 }}>
                          Ngày đi: {moment(cart.time_start).format('DD-MM-yyyy')}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ color: 'orange' }}>Dịch vụ không hổ trợ</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          Alert.alert(
                            "Travel app",
                            "Hey guys, are you sure ?",
                            [
                              {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                              },
                              {
                                text: "Xóa", onPress: () => {
                                  removeToCart(cart._id)
                                }
                              },
                            ]
                          );
                        }}
                        style={{
                          alignItems: 'flex-end',
                          marginRight: 20,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            textDecorationLine: 'underline',
                          }}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>

        </View>
        {isFetching && <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>

      <View
        style={{
          width: '100%',
          paddingLeft: 10,
          flex: 0.1,
          borderTopWidth: 1,
          borderColor: 'gray',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <View
            style={{
              paddingRight: '30%',
            }}>
            <Text
              style={{
                paddingBottom: 10,
                color: 'gray',
              }}>
              Tổng cộng ({items.length} đơn vị)
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              ₫ {total > 0 ? total : sumTotal()}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={handleCreateOrder}
              style={{
                backgroundColor: 'orange',
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Tạo Đơn Hàng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
// yarn react-native run-android --active-arch-only
