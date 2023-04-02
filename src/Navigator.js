import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const Tab = createBottomTabNavigator()

export default props => (
    <NavigationContainer>
        <Tab.Navigator
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
                component={Feed}
                options={{ title: 'Add Picture'}}
            />
            <Tab.Screen
                name='Profile'
                component={Feed}
                options={{ title: 'Profile'}}
            />
        </Tab.Navigator>
    </NavigationContainer>
)