import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Users = () => {
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <View style={{}}>
          <View>
            <Icon
              name="user-circle-o"
              style={{
                fontSize: 80,
                color: 'gray',

                textAlign: 'center',
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Thông tin người dùng
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Thông tin người dùng
                {''}{' '}
                <Icon
                  name="chevron-right"
                  style={{
                    fontSize: 10,
                  }}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginRight: 5,
            }}>
            <View
              style={{
                backgroundColor: '#fc5a00',
                height: 60,
                width: 110,
                borderRadius: 10,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              <View>
                <Icon
                  style={{
                    color: 'white',
                  }}
                  name="plus"></Icon>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Mã ưu đãi
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 5,
            }}>
            <View
              style={{
                backgroundColor: '#ff9c00',
                height: 60,
                width: 110,
                borderRadius: 10,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              <View>
                <Icon
                  style={{
                    color: 'white',
                  }}
                  name="plus"></Icon>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Credit
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#01c8cf',
                height: 60,
                width: 110,
                borderRadius: 10,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              <View>
                <Icon
                  style={{
                    color: 'white',
                  }}
                  name="plus"></Icon>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Gift Card
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          margin: 15,
          borderRadius: 10,
        }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="list-alt"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Đơn hàng của tôi
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="user"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Thông tin người dùng
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="comment"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Đánh giá
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="vk"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Thông báo
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="question"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Trợ giúp
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="thumbs-o-up"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Đánh giá ứng dụng
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="gear"
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                }}>
                Cài đặt
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Users;

// yarn react-native run-android --active-arch-only
