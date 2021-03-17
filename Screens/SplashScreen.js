import React, { Component } from 'react'
import { Text,Button, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigation } from "react-native";

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text> Splash </Text>
                <Button
                 title="go to next screen"
                    onPress={() => this.props.navigation.navigate("LogIn")}
                
                ></Button>
            </View>
        )
    }
}
