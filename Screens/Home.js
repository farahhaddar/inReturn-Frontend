import React, { Component } from 'react'
import { Text, StyleSheet,View,ScrollView,SafeAreaView } from 'react-native'
import Search from "../Components/Search"
import Cat from "../Components/Cat"
import FlatList from "../Components/Flatlist"

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchValue:"",
            data:[],
            CatSearch:"",
             
        }
    }

    componentDidMount() {

        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "items", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ data: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
    }

    CatSearch=(e)=>{
     this.setState({catSearch:e})
        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "items?catId="+e+"&name="+this.state.searchValue, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ data: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();



    }
    
    SearchItem=(e)=>{
        this.setState({ searchValue:e})
        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "items?name="+e+"&catId="+this.state.catSearch, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ data: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
        
    }

    render() {
        return (
            <SafeAreaView >

                <View style={styles.main}>
                    <Search search={(e) => {this.SearchItem(e) }}/>
                    <Cat  catSearch={(e)=>{ this.CatSearch(e) }}/>
                    <Text style={styles.title}>Products To Trade With: </Text>
       
                    <FlatList data={this.state.data}   search={this.state.searchValue}  />
                   
                        
                   
                  
    
               
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


