import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import User from './User';
import UserInfo from './UserInfo';
import FavoriteService from './FavoriteService';
import Cart from './Cart';
import testNA from './testNA';
import text from './text';
import BookNow from './BookNow';
import BookNowX from './BookNowX';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed 123456</Text>
    </View>
  );
}
function Feed1() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed1</Text>
    </View>
  );
}
function Feed2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed2</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Index() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
      }}>
      
    
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Mail',
          tabBarIcon: ({color, size}) => (
            <Icon name="envelope" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed1"
        component={Feed1}
        options={{
          tabBarLabel: 'Travel',
          tabBarIcon: ({color, size}) => (
            <Icon name="compass" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" size={30} color={color} />
          ),
        }}                            
      />
        <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={30} color={color} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}

export default Index;
