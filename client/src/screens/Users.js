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
import {useDispatch, useSelector} from 'react-redux';

import {loginUser} from '../redux/apiRequest';
import {logoutUser} from '../redux/apiRequest';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {logoutRoute} from '../routes/APIRoute';

const Users = ({navigation}) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState('');
  const user = useSelector(state => state.auth.login.currentUser);

  // useEffect(() => {
  //   user && setAccessToken(user.accessToken);
  // }, []);

  // const id = user?._id;
  // setAccessToken(
  //   useSelector(state => state.auth.login.currentUser).accessToken,
  // );
  // const accessToken = accessToken();

  // if (user) {
  //   console.log('>>> check user: ' + user.username);

  // }
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
              {user ? user.username : 'Thông tin người dùng'}
            </Text>
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
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'gray',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
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
                height: 40,
                width: 50,
                backgroundColor: '#cfbda1',
                alignItems: 'center',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderRightWidth: 1,
                borderRightColor: 'gray',
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="user"
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                {user ? user.username : 'Thông tin người dùng'}
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
                height: 40,
                width: 50,
                backgroundColor: '#cfbda1',
                alignItems: 'center',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderRightWidth: 1,
                borderRightColor: 'gray',
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="list-alt"
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
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
                height: 40,
                width: 50,
                backgroundColor: '#cfbda1',
                alignItems: 'center',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderRightWidth: 1,
                borderRightColor: 'gray',
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                  alignItems: 'center',
                }}
                name="thumbs-o-up"
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
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
                height: 40,
                width: 50,
                backgroundColor: '#cfbda1',
                alignItems: 'center',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderRightWidth: 1,
                borderRightColor: 'gray',
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="gear"
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Cài đặt
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            logoutUser(user?.accessToken, dispatch);
          }}>
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
                height: 40,
                width: 50,
                backgroundColor: '#ef921b',
                alignItems: 'center',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderRightWidth: 1,
                borderRightColor: 'gray',
              }}>
              <Icon
                style={{
                  fontSize: 20,
                  color: 'black',
                }}
                name="user-times"
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                logout
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Users;
