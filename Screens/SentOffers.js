import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SentFlatList from "../Components/SentFlatList";

export default class SentOffers extends Component {
    render() {
        return (
            <View >
                <SentFlatList/>
            </View>
        )
    }
}
