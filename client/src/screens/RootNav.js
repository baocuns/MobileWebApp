import { createStackNavigator } from '@react-navigation/stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import Index from '.';
import FavariteList from '../components/FavoriteList';
import FavouriteItem from '../components/FavouriteItem';
import ActionRaiting from './ActionRaiting';
import BookNow from './BookNow';
import BookNowX from './BookNowX';
import LoginNew from './LoginNew';
import RegisterNew from './RegisterNew';
import Cart from './Cart';
import DetailPlace from './DetailPlace';
import Favorite from './Favorite';
import FavoriteService from './FavoriteService';
import Friends from './Friends';
import Login from './Login';
import ProvinceDetail from './ProvinceDetail';
import UserInfo from './UserInfo';
import changeLanguage from '../HOC/changeLanguage';
import Setting from './Setting';
import Camera from './Camera';
import LoginGoogle from './LoginGoogle';
import Orders from './Order/Orders';
import Details from './Order/Details';
import { NativeBaseProvider } from 'native-base';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import Checkout from './Checkout/Checkout';
import Payment from './Checkout/Payment';

const Stack = createStackNavigator();

function RootNav() {
  let theme = useSelector(state => state.status.theme);
  // init theme getting started app
  if (theme === null) {
    theme = useColorScheme();
  }
  useEffect(() => {
    console.log('theme: ', theme);
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="DetailPlace" component={DetailPlace} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProvinceDetail" component={ProvinceDetail} />
          <Stack.Screen name="FavariteList" component={FavariteList} />
          <Stack.Screen name="FavouriteItem" component={FavouriteItem} />
          <Stack.Screen name="ActionRaiting" component={ActionRaiting} />
          <Stack.Screen name="Setting" component={Setting} />
          {/* bao */}
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Payment" component={Payment} />
          {/* Khiêm */}
          <Stack.Screen name="UserInfo" component={UserInfo} />
          <Stack.Screen name="BookNow" component={BookNow} />
          <Stack.Screen name="BookNowX" component={BookNowX} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="FavoriteService" component={FavoriteService} />
          <Stack.Screen name="LoginNew" component={LoginNew}></Stack.Screen>
          <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
          <Stack.Screen name="Milo" component={Milo}></Stack.Screen>
          <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
          <Stack.Screen name="Order" component={Details}></Stack.Screen>
          <Stack.Screen
            name="LoginGoogle"
            component={LoginGoogle}></Stack.Screen>
          <Stack.Screen
            name="RegisterNew"
            component={RegisterNew}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default changeLanguage(RootNav);
