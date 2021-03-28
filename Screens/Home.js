import React, { Component } from 'react'
import { Text, StyleSheet,View,ScrollView,SafeAreaView } from 'react-native'
import Search from "../Components/Search"
import Cat from "../Components/Cat"
import FlatList from "../Components/Flatlist"

export default class Home extends Component {
    

    render() {
        return (
            <SafeAreaView >

                <View style={styles.main}>
                    <Search />
                    <Cat />
                    <Text style={styles.title}>Products To Trade With: </Text>
       
                    <FlatList/>
                   
                        
                   
                  
    
               
                </View>
    
            </SafeAreaView>
              
                
        
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 10,
        backgroundColor: 'white',
    } ,
     main:{
            backgroundColor:'white',
            height: '100%'
        
    }




})


