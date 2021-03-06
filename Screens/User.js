import React, { Component } from 'react'
import { Touchable } from 'react-native'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "../Components/Profile"

export default class User extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout = async () => {
        const response = await fetch(Expo.Constants.manifest.extra.API_URL+'logout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
            }
        })
        const data = await response.json()
        console.log(await AsyncStorage.getItem('token'))
        if (data.message) {
            await AsyncStorage.removeItem('token');
            this.props.handleRedner2(!this.props.render)

        }
    }


    render() {
        return (
            <View >

                {/* <TouchableOpacity onPress={(e) => this.handleLogout(e)}>
                    <Text>Logout</Text>
                </TouchableOpacity> */}
                <Profile  navigation={this.props.navigation}handleLogout={this.handleLogout}/>
            </View>
        )
    }
}
