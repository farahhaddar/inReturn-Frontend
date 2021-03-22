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

  // const [token, setToken] = useState(false);

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

      {/* <MaterialScreens  />  */}
       <AuthStackNavigator  />
     


    </NavigationContainer>
  );
}


const styles = StyleSheet.create({


});
