import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './src/screens';
import { enableLatestRenderer } from 'react-native-maps';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./src/redux/store";
import Favorite from './src/screens/Favorite';
import DetailPlace from './src/screens/DetailPlace';
import Login from './src/screens/Login';
import ProvinceDetail from './src/screens/ProvinceDetail';
import UserInfo from './src/screens/UserInfo';
import BookNow from './src/screens/BookNow';
import BookNowX from './src/screens/BookNowX';
import Cart from './src/screens/Cart'
import Friends from './src/screens/Friends'
import FavoriteService from './src/screens/FavoriteService'
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

enableLatestRenderer();

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="DetailPlace" component={DetailPlace} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ProvinceDetail" component={ProvinceDetail} />
            {/* Khiêm */}
            <Stack.Screen name="UserInfo" component={UserInfo} />
            <Stack.Screen name="BookNow" component={BookNow} />
            <Stack.Screen name="BookNowX" component={BookNowX} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="FavoriteService" component={FavoriteService} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
