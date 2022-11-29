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
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import BackArrow from '../components/BackArrow';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { PhotoRoute } from '../utils/constant';
import { formatVND } from '../utils/function';

const Cart = () => {
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
      sum += cart.price;
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

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 0.9,
        }}>
        <View
          style={{
            paddingLeft: 10,
          }}>
          <BackArrow name="Giỏ hàng" />


          {/* hình ảnh */}
          {carts.map((cart, index) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',

                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      paddingLeft: 20,
                      paddingTop: 5,
                    }}>
                    <FastImage
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 10,
                      }}
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
                      <Text style={{ color: 'black', paddingBottom: 5 }}>
                        {formatVND(cart.price)}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ color: 'black', paddingBottom: 5 }}>
                        Ngày đi: 23/9/2022
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
                                removeToCart(cart.slug)
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
              Tổng cộng (0 đơn vị)
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              ₫ {sumTotal()}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
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
                Thanh Toán
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
