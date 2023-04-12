import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = (props) => (
    <Tab.Navigator
    initialRouteName='Feed'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
                case 'Feed':
                    iconName = focused
                        ? 'home'
                        : 'home'
                break;
                case 'AddPhoto':
                    iconName = focused
                        ? 'camera'
                        : 'camera'
                break;
                case 'Profile':
                    iconName = focused
                        ? 'user'
                        : 'user'
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6495ED',
            tabBarInactiveTintColor: 'gray',
            // tabBarLabelStyle: { fontSize: 30 },
            tabBarShowLabel: false,
            headerShown: false
        })}
    >
        <Tab.Screen 
            name='Feed' 
            component={Feed}
            options={{ title: 'Feed'}}
        />
        <Tab.Screen
            name='AddPhoto'
            component={AddPhoto}
            options={{ title: 'Add Picture'}}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{ title: 'Profile'}}
        />
    </Tab.Navigator>
)

export default function Navigator(props) {
    return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Tab"
        >
            <Stack.Screen
                name='Auth'
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Tab'
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Register'
                component={Register}
            />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }