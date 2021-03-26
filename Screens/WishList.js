import React, { Component } from 'react'
import { SafeAreaView,Text, FlatList, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import WishListFlat from "../Components/WishListFlat"
import { SearchBar } from "react-native-elements";


export default class WishList extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }
    
    handleSearch = (text) => {
        this.setState({ search: text })
    }



    render() {

        return (

           <SafeAreaView>
               {/* searchbar */}
                <SearchBar
                    containerStyle={{
                        backgroundColor: "wite",
                        borderTopColor: "transparent",
                        borderBottomColor: "transparent",
                        borderRightColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRadius: 90,
                    }}
                    lightTheme={true}
                    round="true"
                    showLoading={true}
                    inputContainerStyle={{
                        borderWidth: 0,
                        backgroundColor: "rgba(0,0,0,0.1)",
                        borderRadius: 90,
                    }}
                    placeholderTextColor={"rgba(255,25,146)"}
                    placeholder={"Search By Name..."}
                    onChangeText={(text) => { this.handleSearch(text) }}
                    value={this.state.search}
                />

                {/* flatlist  */}

                <WishListFlat/>

           </SafeAreaView>
        )
    }
}
