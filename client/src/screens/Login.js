import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from 'react-native'; 

import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SIGN_IN = 'SIGN_IN';
const GET_STARTED = 'GET_STARTED';
const COLOR_THEME = '#4D8D6E';
function Login({navigation}) {
  const [page, setPage] = useState(SIGN_IN);
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{height: '25%', width: '100%'}}>
          <RedComponent page={page} setPage={setPage} />
        </View>
        <View style={{height: '40%', width: '100%'}}>
          {page === SIGN_IN ? <GreenComponent /> : null}
        </View>
        <View style={{flex: 1}}>
          <BlueComponent />
        </View>
      </View>
    </>
  );
}

const BlueComponent = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      {/* or connect with */}
      <View
        style={{
          height: 40,
          width: windowWidth - 60,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
        <Text> Or connect with </Text>
        <View
          style={{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
      </View>
      {/* Social Media Network */}
      <View
        style={{
          justifyContent: 'space-between',
          marginBottom: 20,
          marginTop: 20,
          flexDirection: 'row',
          height: 50,
          width: windowWidth - 60,
        }}>
        <TouchableOpacity
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '46%',
          }}>
          <Image
            source={require('../assets/images/Android/icons8-google-48.png')}
          />
          <Text style={{fontSize: 24, color: '#000'}}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '46%',
          }}>
          <Image
            source={require('../assets/images/Android/icons8-facebook-36(-ldpi).png')}
          />
          <Text style={{fontSize: 24, color: '#000'}}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GreenComponent = () => {
  const [isPasswordVisiable, setIsPasswordVisiable] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  myloginxnxx = async () => {
    await fetch('https://api.travels.games/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username": username, "password": password})
    }).then(res => res.json())
    .then(resData => {
     
      console.log(resData);
    });
   
  }
  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        height: '100%',
        width: '100%',
      }}>
      {/* Login in your account */}
      <Text style={{fontSize: 24, color: '#000', fontWeight: '600'}}>
        Login in your account
      </Text>
      {/* Email */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: windowWidth - 60,
          height: 45,
          marginTop: 20,
        }}>
        <Icon
          name="envelope"
          size={40}
          style={{width: 40, marginLeft: 10, marginRight: 10}}
        />
        <TextInput
          autoCapitalize="none"
          style={{flex: 1, fontSize: 20}}
          placeholder="User Name"
          value={username}
          onChangeText={(value) => setUsername(value)}>
          </TextInput>
      </View>
      {/* Password */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: windowWidth - 60,
          height: 45,
          marginTop: 20,
        }}>
        <Icon
          name="key"
          size={40}
          style={{width: 40, marginLeft: 10, marginRight: 10}}
        />
        <TextInput
          secureTextEntry={!isPasswordVisiable}
          autoCapitalize="none"
          style={{flex: 1, fontSize: 20, paddingRight: 50}}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}>
          </TextInput>
        <TouchableOpacity
          onPress={() => setIsPasswordVisiable(!isPasswordVisiable)}
          style={{color: 'white', position: 'absolute', right: 10}}>
          {isPasswordVisiable ? (
            <Icon name="eye" size={30} style={{color: '#000'}} />
          ) : (
            <Icon name="eye-slash" size={30} style={{color: '#000'}} />
          )}
        </TouchableOpacity>
      </View>
      {/* Forgot password */}
      <View
        style={{
          paddingRight: 20,
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
          width: windowWidth - 60,
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      {/* Button Login */}
      <TouchableOpacity
        
        onPress={myloginxnxx}
        style={{
          borderRadius: 50,
          height: 45,
          width: windowWidth - 60,
          backgroundColor: COLOR_THEME,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const RedComponent = ({page, setPage}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR_THEME,
          flex: 1,
        }}>
        <Text style={{fontSize: 50, fontWeight: '600', color: '#fff'}}>
          wasty.
        </Text>
        <Text style={{fontSize: 20, fontWeight: '400', color: '#fff'}}>
          think for nature
        </Text>
      </View>
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          onPress={() => setPage(SIGN_IN)}
          disabled={page === SIGN_IN ? true : false}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100%',
          }}>
          <Text style={{fontSize: 20, color: COLOR_THEME}}>Sign In</Text>
          {page === SIGN_IN ? (
            <View
              style={{
                borderBottomColor: COLOR_THEME,
                position: 'absolute',
                bottom: 0,
                height: 3,
                width: '100%',
                borderBottomWidth: 3,
              }}></View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPage(GET_STARTED)}
          disabled={page === GET_STARTED ? true : false}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100%',
          }}>
          <Text style={{fontSize: 20, color: COLOR_THEME}}>Get Started</Text>
          {page === GET_STARTED ? (
            <View
              style={{
                borderBottomColor: COLOR_THEME,
                position: 'absolute',
                bottom: 0,
                height: 3,
                width: '100%',
                borderBottomWidth: 3,
              }}></View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
