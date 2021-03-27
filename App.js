import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./Navigations/StackNavigation";
import { MaterialScreens } from "./Navigations/MaterialScreens";
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs();
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigation } from "react-native";



export default function App() {

  const [token, setToken] = useState('')
  const [render, setRender] = useState(false)

  const render2 = (value) => {
    setRender(value)

  }

  useEffect(() => {
    const getToken = async () => {
      setToken(await AsyncStorage.getItem('token'))
    }
    getToken()
  }, [render, render2])

  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (error, stores) => {
  //     stores.map((result, i, store) => {
  //       console.log({ [store[i][0]]: store[i][1] });
  //       return true;
  //     });
  //   });
  // });


  return (
    <NavigationContainer>

      {token ?
        <MaterialScreens render2={render2} render={render} />
        :
        <AuthStackNavigator render2={render2} render={render} />
      }


    </NavigationContainer>
  );
}



