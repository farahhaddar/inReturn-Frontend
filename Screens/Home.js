import React, { Component } from 'react'
import { Text, StyleSheet,View,ScrollView,SafeAreaView } from 'react-native'
import Search from "../Components/Search"
import Cat from "../Components/Cat"
import Profile from "../Components/Profile"


export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                
                    <Search />
                    <Cat />
                    <Text style={styles.title}>Trade Now! </Text>
                <ScrollView>

           
                </ScrollView>
               

            </SafeAreaView>
              
                
        
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 17,
    },
   


})


