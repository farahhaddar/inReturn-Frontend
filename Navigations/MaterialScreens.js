import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { HomeStackNavigator, WishListStackNavigator, DealsStackNavigator, UserStackNavigator} from "./StackNavigation";


const MaterialTab = createMaterialBottomTabNavigator();

const MaterialScreens = () => {
    return (
        <MaterialTab.Navigator
            initialRouteName="inReturn"
            activeColor="white"
            barStyle={{ backgroundColor: Expo.Constants.manifest.extra.COLOR }}
        >
            {/* #9AC4F8 */}
            {/* F2808A */}
            <MaterialTab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarColor:"yellow",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MaterialTab.Screen
                name="WishList"
                component={WishListStackNavigator}
                options={{
                    tabBarLabel: 'Wish List',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={26} />
                    ),
                }}
            />
            <MaterialTab.Screen
                name="NewOffer"
                component={DealsStackNavigator}
                options={{
                    tabBarLabel: 'New Offer',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
                    ),
                }}
            />
            <MaterialTab.Screen
                name="Deals"
                component={DealsStackNavigator}
                options={{
                    tabBarLabel: 'Deals',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="handshake" color={color} size={26} />
                    ),
                }}
            />
            <MaterialTab.Screen
                name="Profile"
                component={UserStackNavigator}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

        </MaterialTab.Navigator>
    );
};

export { MaterialScreens };