import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import WishList from "../Screens/WishList";
import User from "../Screens/User";
import Deals from "../Screens/Deals";
import Login from "../Screens/LogIn";
import SignUp from "../Screens/SignUp";
import ForgetPassword from "../Screens/ForgetPassword";
import ResetPassword from "../Screens/ResetPassword";
import Splash from "../Screens/SplashScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        
        backgroundColor: "#F2808A",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerTitleStyle: { alignSelf: 'center' },

};

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

const WishListStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Wish List" component={WishList} />
        </Stack.Navigator>
    );
};
const DealsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Deals" component={Deals} />
        </Stack.Navigator>
    );
};
const UserStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="My Profile" component={User} />
        </Stack.Navigator>
    );
};
const AuthStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LogIn" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );
};

export { HomeStackNavigator, WishListStackNavigator, DealsStackNavigator, UserStackNavigator, AuthStackNavigator};