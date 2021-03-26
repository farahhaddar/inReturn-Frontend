import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RecivedFlatList from "../Components/RecivedFlatList"

export default class RecivedOffers extends Component {
    render() {
        return (
            <View >
                <RecivedFlatList/>
            </View>
        )
    }
}
