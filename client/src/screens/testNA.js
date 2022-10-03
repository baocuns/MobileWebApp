import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function testNA() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  <View style={{}}>
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
    }}>
    <View>
      <View>
        <Text
          style={{
            color: 'black',
            height: 60,
            width: 100,
            backgroundColor: '#fc5a00',
            textAlign: 'center',
            margin: 10,
            borderRadius: 10,
            color: 'white',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
            }}>
            <Icon name="plus" />
          </Text>
          Mã ưu đãi
        </Text>
      </View>
    </View>

    <View>
      <Text
        style={{
          color: 'black',
          height: 60,
          width: 100,
          backgroundColor: '#ff9c00',
          margin: 10,
          textAlign: 'center',
          borderRadius: 10,
          color: 'white',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 10,
          }}>
          <Icon name="plus" />
        </Text>
        Credit
      </Text>
    </View>

    <View>
      <Text
        style={{
          color: 'black',
          height: 60,
          width: 100,
          backgroundColor: '#01c8cf',
          textAlign: 'center',
          margin: 10,
          borderRadius: 10,
          color: 'white',
        }}>
        <View></View>
        <Text
          style={{
            color: 'white',
            fontSize: 10,
          }}>
          {''} {''}
          <Icon name="plus" />
        </Text>
        Gift Card
      </Text>
    </View>
  </View>
</View>

export default testNA
// yarn react-native run-android --active-arch-only