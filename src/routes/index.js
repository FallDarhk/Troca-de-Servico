import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SigIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import New from '../pages/New'
import Notification from '../pages/Notification'
import Search from '../pages/Search'
import Profile from '../pages/Profile'

import ButtonNew from '../components/ButtonNew'

import { Entypo, Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: '#fff',
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name='Busca'
                component={Search}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Criar' 
                component={New}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color, focused }) => (
                        <ButtonNew size={size} color={color} focused={focused}/>
                    )
                }}
            />
            <Tab.Screen
                name='Notificações'
                component={Notification}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="bell" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name='Perfil'
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes(){
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SignIn'
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name='TabBar'
                    component={TabBar}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    )
}

