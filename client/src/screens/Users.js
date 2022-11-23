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
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import {userInfo} from '../redux/apiRequest';
import i18n from '../i18n';
const Users = ({navigation}) => {
import changeLanguage from '../HOC/changeLanguage';
const Users = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  // const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState('');
  const user = useSelector(state => state.auth.login.currentUser);

  useEffect(() => {
    axios
      .post(
        `https://api.travels.games/api/v1/profile/show/details/${user?.username}`,
        user?._id,
        {
          headers: {
            token: `Travel ${user?.accessToken}`,
          },
        },
      )
      .then(res => {
        console.log(res.data.data[0]);

        setProfile(res.data.data[0]);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, [user]);

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <View style={{}}>
          <View
            style={{
              flex: 1,
              padding: 10,
              alignItems: 'center',
            }}>
            <FastImage
              source={{uri: profile?.images[0]}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              resizeMode="cover"
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
              {user ? user.username : i18n.t('user_info')}
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
                  {i18n.t('code')}
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
                  {i18n.t('credit')}
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
                  {i18n.t('gift_card')}
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
        <TouchableOpacity
          onPress={() => {
            userInfo(user?.accessToken, dispatch);
            navigation.navigate('UserInfo', {
              profile: profile,
            });
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
                {user ? user.username : i18n.t('user_info')}
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
                {i18n.t('my_order')}
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
                {i18n.t('rating_app')}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
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
                {i18n.t('setting')}
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
                {i18n.t('logout')}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginNew');
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
                {i18n.t('login')}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default changeLanguage(Users);