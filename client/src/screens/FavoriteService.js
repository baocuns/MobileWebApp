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
                backgroundColor: 'orange',
                width: 130,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Điểm tham quan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 0.9,
        }}>
        <View
          style={{
            flex: 1,
            marginTop: 50,
            backgroundColor: 'white',
            borderRadius: 20,
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
            source={require('../assets/images/wibu.jpg')}
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
                color: 'yellow',
              }}
            />
            <Text
              style={{
                color: 'yellow',
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
        <View
          style={{
            flex: 1,
            marginTop: 50,
            backgroundColor: 'white',
            borderRadius: 20,
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
            source={require('../assets/images/wibu.jpg')}
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
                color: 'yellow',
              }}
            />
            <Text
              style={{
                color: 'yellow',
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
        <View
          style={{
            flex: 1,
            marginTop: 50,
            backgroundColor: 'white',
            borderRadius: 20,
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
            source={require('../assets/images/wibu.jpg')}
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
                color: 'yellow',
              }}
            />
            <Text
              style={{
                color: 'yellow',
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
      </ScrollView>
    </View>
  );
};

export default FavoriteService;

// yarn react-native run-android --active-arch-only
