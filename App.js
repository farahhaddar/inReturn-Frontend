import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {MaterialScreens} from "./Navigations/MaterialScreens";
// import AsyncStorage from "@react-native-async-storage/async-storage";




export default function App() {


  return (
    <NavigationContainer>
      {/* {token ? <StackScreen /> : <AuthStackScreen />} */}
      {/* <TabNavigation></TabNavigation> */}
      {/* <StackScreens></StackScreens> */}
      <MaterialScreens></MaterialScreens>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  

});
