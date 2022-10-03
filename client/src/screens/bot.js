import {View, Text} from 'react-native';
import React from 'react';

const bot = () => {
  return (
    <View>
      <View
        style={{
          marginTop: '10%',
          paddingLeft: 10,
          paddingRight: 10,
          flex: 0.1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <View style={{}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              ₫ 99.99
            </Text>
          </View>

          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{
                    color: 'gray',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  Chi tiết
                </Text>
              </View>
              <View>
                <Icon
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    justifyContent: 'center',
                  }}
                  name="chevron-up"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'red',
              height: 'auto',
              width: 80,
              alignItems: 'center',
              borderRadius: 5,
              justifyContent: 'center',
              // marginVertical: 'auto',
            }}>
            <Text
              style={{
                color: 'green',
              }}>
              Credit + 1
            </Text>
          </View>
        </View>
        <View>
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
                Thanh toán
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default bot;
