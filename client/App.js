import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './src/screens';
import { enableLatestRenderer } from 'react-native-maps';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import Favorite from './src/screens/Favorite';
import DetailPlace from './src/screens/DetailPlace';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import ProvinceDetail from './src/screens/ProvinceDetail';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

enableLatestRenderer();

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="DetailPlace" component={DetailPlace} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProvinceDetail" component={ProvinceDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({})

export default App;
