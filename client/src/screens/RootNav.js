import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import Index from '.'
import FavariteList from '../components/FavoriteList'
import FavouriteItem from '../components/FavouriteItem'
import ActionRaiting from './ActionRaiting'
import BookNow from './BookNow'
import BookNowX from './BookNowX'
import Cart from './Cart'
import DetailPlace from './DetailPlace'
import Favorite from './Favorite'
import FavoriteService from './FavoriteService'
import Friends from './Friends'
import Login from './Login'
import ProvinceDetail from './ProvinceDetail'
import UserInfo from './UserInfo'
import changeLanguage from '../HOC/changeLanguage';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

function RootNav() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Index" component={Index} />
                    <Stack.Screen name="Favorite" component={Favorite} />
                    <Stack.Screen name="DetailPlace" component={DetailPlace} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="ProvinceDetail" component={ProvinceDetail} />
                    <Stack.Screen name="FavariteList" component={FavariteList} />
                    <Stack.Screen name="FavouriteItem" component={FavouriteItem} />
                    <Stack.Screen name="ActionRaiting" component={ActionRaiting} />
                    {/* Khiêm */}
                    <Stack.Screen name="UserInfo" component={UserInfo} />
                    <Stack.Screen name="BookNow" component={BookNow} />
                    <Stack.Screen name="BookNowX" component={BookNowX} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Friends" component={Friends} />
                    <Stack.Screen name="FavoriteService" component={FavoriteService} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

export default changeLanguage(RootNav)