import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import {Item, Label, Input, Checkbox, Button} from 'native-base';
import React, {useState} from 'react';
import {loginUser} from '../redux/apiRequest';
import {registerUser} from '../redux/apiRequest';
import axios from 'axios';
import {useDispatch, useSelector, useNavigate} from 'react-redux';
const RegisterNew = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisiable, setIsPasswordVisiable] = useState(false);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}
      showVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../assets/images/login.jpg')}
        style={{
          height: Dimensions.get('window').height / 2.5,
        }}>
        <View style={styles.brandView}>
          <Icon
            name="location-pin"
            style={{
              color: '#4632A1',
              fontSize: 100,
            }}
          />
          <Text style={styles.brandViewText}>Vision go</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View
          style={{
            padding: 40,
          }}>
          <Text style={{color: '#4632A1', fontSize: 34}}>Wellcome</Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  color: '#000',
                }}>
                I have an account:
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginNew');
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 15,
                    fontStyle: 'italic',
                  }}>
                  {''} Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* form input */}
          <View
            style={{
              marginTop: 30,
            }}>
            {/* username */}
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                height: 45,
                borderRadius: 5,
                borderWidth: 1,
              }}>
              <Icon
                name="user"
                size={40}
                style={{
                  width: 40,
                  marginLeft: 10,
                  marginRight: 10,
                  color: '#000',
                }}
              />
              <TextInput
                autoCapitalize="none"
                style={{flex: 1, fontSize: 20, color: '#000'}}
                placeholder="User Name"
                value={username}
                onChangeText={value => setUsername(value)}></TextInput>
            </View>
            {/* password */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: 'white',
                height: 45,
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
              }}>
              <Icon
                name="key"
                size={40}
                style={{
                  width: 40,
                  marginLeft: 10,
                  marginRight: 10,
                  color: '#000',
                }}
              />
              <TextInput
                secureTextEntry={!isPasswordVisiable}
                autoCapitalize="none"
                style={{
                  flex: 1,
                  fontSize: 20,
                  paddingRight: 50,
                  color: '#000',
                }}
                placeholder="Password"
                value={password}
                onChangeText={value => setPassword(value)}></TextInput>

              <TouchableOpacity
                onPress={() => setIsPasswordVisiable(!isPasswordVisiable)}
                style={{color: '#000', position: 'absolute', right: 10}}>
                {isPasswordVisiable ? (
                  <Icon name="eye" size={30} style={{color: '#000'}} />
                ) : (
                  <Icon name="eye-slash" size={30} style={{color: '#000'}} />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                borderWidth: 1,
                borderRadius: 5,

                height: 45,
                marginTop: 20,
              }}>
              <Icon
                name="envelope"
                size={40}
                style={{
                  width: 40,
                  marginLeft: 10,
                  marginRight: 10,
                  color: 'black',
                }}
              />
              <TextInput
                autoCapitalize="none"
                style={{flex: 1, fontSize: 20, color: 'black'}}
                placeholder="Email"
                value={email}
                onChangeText={value => setEmail(value)}></TextInput>
            </View>

            {/* button login */}
            <View
              style={{
                height: 100,

                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Button
                onPress={() =>
                  registerUser(username, password, email, dispatch, navigation)
                }
                style={[styles.loginBtn.width, styles.shadowBtn]}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Register
                </Text>
              </Button>
            </View>

            <View>
              <Text
                style={{
                  textAlign: 'center',
                }}>
                or Register with
              </Text>
              <View style={styles.socialLoginView}>
                <Button icon style={{backgroundColor: 'rgb(57, 130, 228)'}}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="facebook"
                    style={{
                      color: '#ffffff',
                    }}
                  />
                </Button>
                <Button icon style={{backgroundColor: 'rgb(29, 155, 240)'}}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="twitter"
                    style={{
                      color: '#ffffff',
                    }}
                  />
                </Button>
                <Button icon style={{backgroundColor: 'red'}}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="google"
                    style={{
                      color: '#ffffff',
                    }}
                  />
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterNew;
const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#4632A1',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  socialLoginView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  shadowBtn: {
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
    backgroundColor: 'rgb(57, 130, 228)',
  },
});
