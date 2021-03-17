import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Screens/Home";
import WishList from "./Screens/WishList";
import User from "./Screens/User";
import Deals from "./Screens/Deals";
import Login from "./Screens/LogIn";
import SignUp from "./Screens/SignUp";
import ForgetPassword from "./Screens/ForgetPassword";
import ResetPassword from "./Screens/ResetPassword";
import Splash from "./Screens/SplashScreen";



export default function App() {

    const token = 1;


    const Tab = createBottomTabNavigator();
    const TabScreens = () => (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="WishList" component={WishList} />
            <Tab.Screen name="User" component={User} />
            <Tab.Screen name="Deals" component={Deals} />
        </Tab.Navigator>
    );

    const Stack = createStackNavigator();
    const StackScreens = () => (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387",
                margin: "center"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LogIn" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );



    return (
        <NavigationContainer>
            {/* {token ? <StackScreen /> : <AuthStackScreen />} */}
            <TabScreens></TabScreens>
        </NavigationContainer>
    );
}



