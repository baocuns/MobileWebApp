import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-vector-icons/icon';

const Cart = () => {
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
          <View style={{paddingBottom: 20, paddingLeft: 10, paddingTop: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Đã hết hạn
            </Text>
          </View>

          {/* hình ảnh */}
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
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                  }}
                  source={require('../assets/images/wibu.jpg')}
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
                    Mua 1 tặng khỏi chả nha con
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'black', paddingBottom: 5}}>
                    vé vào cổng HappyLand
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'black', paddingBottom: 5}}>
                    23/9/2022
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'black', paddingBottom: 5}}>
                    1 X Trẻ Em (cao tử 1m mấy ai biết)
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'orange'}}>Dịch vụ không hổ trợ</Text>
                </View>
              </View>
            </View>
            <View>
              <View>
                <TouchableOpacity
                  style={{
                    alignItems: 'flex-end',
                    marginRight: 20,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      textDecorationLine: 'underline',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          width: '100%',
          paddingLeft: 10,
          flex: 0.1,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              paddingRight: '50%',
            }}>
            <Text
              style={{
                paddingBottom: 10,
                color: 'gray',
              }}>
              Tổng cộng
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              0Đ
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
