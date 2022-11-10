import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Map from './Map';
import Blog from './Blog';
import Mail from './Mail';
import Users from './Users';
import Lottie from 'lottie-react-native';
import Login from './Login';

import Cart from './Cart';
import BookNow from './BookNow';
import BookNowX from './BookNowX';
import ActionRaiting from './ActionRaiting';
const Tab = createBottomTabNavigator();

function Index() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarActiveTintColor: '#FA7000',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarLabel: 'Mail',
          tabBarIcon: ({ focused, color, size }) => (
            // <Icon name="envelope" size={30} color={color} />
            <Lottie
              style={{ position: 'absolute', top: 0, zIndex: 100 }}
              source={require('../assets/lotties/76038-contact-mail.json')}
              autoPlay={focused}
              loop
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ focused, color, size }) => (
            <Lottie
              style={{ position: 'absolute', top: 0, zIndex: 100 }}
              source={require('../assets/lotties/47956-area-map.json')}
              autoPlay={focused}
              loop
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({ focused, color, size }) => (
            <Lottie
              style={{ position: 'absolute', top: 0, zIndex: 100 }}
              source={require('../assets/lotties/95909-home-3d-illustration.json')}
              autoPlay={focused}
              loop
            />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Login}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ focused, color, size }) => (
            <Lottie
              style={{ position: 'absolute', top: 0, zIndex: 100 }}
              source={require('../assets/lotties/48849-blog-post.json')}
              autoPlay={focused}
              loop
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ focused, color, size }) => (
            <Lottie
              style={{ position: 'absolute', top: 0, zIndex: 100, color: 'red' }}
              source={require('../assets/lotties/72874-user-profile-v2.json')}
              autoPlay={focused}
              loop
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Index;
