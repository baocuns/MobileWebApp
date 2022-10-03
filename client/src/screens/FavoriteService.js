import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteService = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 0.1,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderColor: 'gray',
          }}>
          <View
            style={{
              padding: 5,
              paddingLeft: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'orange',
                width: 100,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Thanh Toán
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 5}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 130,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'gray',
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Điểm tham quan
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'center',
              paddingLeft: 50,
            }}>
            <TouchableOpacity>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'gray',
                }}
                name="chevron-down"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 0.9,
        }}>
        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Image
              style={{
                width: 320,
                height: 200,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
              source={require('../assets/images/levi.jpg')}
            />
            <Text
              style={{
                color: 'gray',
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              Hồng Kông
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              Vé công viên Hong Kong Disney (vào cổng trực tiếp bằng QR Code)
            </Text>
            <Text
              style={{
                color: 'black',
                paddingLeft: 10,
              }}>
              <Icon
                name="star"
                style={{
                  fontSize: 15,
                  color: 'orange',
                }}
              />
              <Text
                style={{
                  color: 'orange',
                }}>
                {''} 4.8 {''}
              </Text>
              (145,020)
            </Text>
            <Text
              style={{
                color: 'gray',
                paddingTop: 10,
                paddingBottom: 30,
                paddingLeft: 10,
              }}>
              Xác nhận tức thời
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingBottom: 20,
                paddingLeft: 10,
              }}>
              Từ ₫ 1,444,151.00
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FavoriteService;

// yarn react-native run-android --active-arch-only
