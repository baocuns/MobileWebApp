import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Map from './Map';
import Blog from './Blog'
import Mail from './Mail';
import Users from './Users';
import User from './User';
import Cart from './Cart';
import FavoriteService from './FavoriteService';
import BookNow from './BookNow';
import BookNowX from './BookNowX';
import Friends from './Friends';



function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed 123456</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Map')}
                style={{ borderWidth: 1, padding: 20 }}>
                <Text>Map</Text>
            </TouchableOpacity>
        </View>
    );
}
function Feed1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed1</Text>
        </View>
    );
}
function Feed2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed2</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function Index() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: 'blue',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Mail"
                component={Mail}
                options={{
                    tabBarLabel: 'Mail',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="envelope" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="compass" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Blog"
                component={Blog}
                options={{
                    tabBarLabel: 'Blog',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="book" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Friends"
                component={Friends}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Index;
