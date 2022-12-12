import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Map from './Map';
import Blog from './Blog/Blog';
import Mail from './Mail';
import Users from './Users';
import Lottie from 'lottie-react-native';
import i18n from '../i18n';
import changeLanguage from '../HOC/changeLanguage';
import {useTheme} from '@react-navigation/native';
import LoginNew from './LoginNew';
import RegisterNew from './RegisterNew';
import Camera from './Camera';
import LoginGoogle from './LoginGoogle';
import BookNowX from './BookNowX';
import BookNow from './BookNow';
import Orders from './Orders';
import Order from './Order';
const Tab = createBottomTabNavigator();

function Index() {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {height: 80},
        tabBarActiveTintColor: '#FA7000',
        tabBarInactiveTintColor: colors.text,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarLabel: i18n.t('mail'),
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              style={{position: 'absolute', top: 0, zIndex: 100}}
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
          tabBarLabel: i18n.t('map'),
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              style={{position: 'absolute', top: 0, zIndex: 100}}
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
          tabBarLabel: i18n.t('home'),

          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              style={{position: 'absolute', top: 0, zIndex: 100}}
              source={require('../assets/lotties/95909-home-3d-illustration.json')}
              autoPlay={focused}
              loop
            />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: i18n.t('blog'),
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              style={{position: 'absolute', top: 0, zIndex: 100}}
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
          tabBarLabel: i18n.t('users'),
          tabBarIcon: ({focused, color, size}) => (
            <Lottie
              style={{position: 'absolute', top: 0, zIndex: 100, color: 'red'}}
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

export default changeLanguage(Index);
