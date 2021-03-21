import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./Navigations/StackNavigation";
import { MaterialScreens } from "./Navigations/MaterialScreens";
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs();
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {

   token = () => {  AsyncStorage.getItem(token) }

  }, [])
  
  return (
    <NavigationContainer>

      {token ? <MaterialScreens  /> : <AuthStackNavigator  />}
     


    </NavigationContainer>
  );
}


const styles = StyleSheet.create({


});
