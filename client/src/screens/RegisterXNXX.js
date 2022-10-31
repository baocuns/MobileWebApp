import {
  View,
  Text,
  CardItem,
  Input,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';

const RegisterXNXX = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState('');

  myFunny = async () => {
    await fetch('https://api.travels.games/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username": username, "password": password, "email": email})
    }).then(res => res.json())
    .then(resData => {
     
      console.log(resData);
    });
   

  }


  return (
    <View>
      <View
        style={{
          padding: 10,
        }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            placeholderTextColor: 'gray',
          }}
          placeholder="User Name"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            placeholderTextColor: 'gray',
          }}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View
        style={{
          padding: 10,
        }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            placeholderTextColor: 'gray',
          }}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View>
        <Button
          style={{
            color: '#841584',
          }}
          title="Learn More"
          onPress={myFunny}
        />
      </View>
    </View>
  );
};

export default RegisterXNXX;
