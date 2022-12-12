import {View, Text, styles, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const LoginGoogle = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  // import statusCodes along with GoogleSignin

  // Somewhere in your code
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info', userInfo);
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        onPress={googleLogin}
        style={{
          backgroundColor: 'blue',
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          GoogleSignin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginGoogle;
