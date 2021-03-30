import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SearchBar } from "react-native-elements";

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state={
         search:""
        }
    }

    handleSearch=(text)=>{
        this.setState({search:text})
        this.props.search(text)
    }


  


    

    render() {
        return (
            <View style={styles.main}>
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

            </View>
        )
    }
}

const styles = StyleSheet.create({

    main: {
        backgroundColor: 'white'
    }
})

