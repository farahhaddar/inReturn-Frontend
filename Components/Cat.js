import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList,ScrollView, SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            activeIndex:false,
        }
    }

    componentDidMount() {


        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "categories", {

                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ categories: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
    }

    render() {

        return (
            <SafeAreaView>
          
                <Text style={styles.title} >Filter By Category: </Text>

                <View style={styles.catContainer}>
                    <ScrollView horizontal={true} >
                    {this.state.categories.length > 0 ? 

                        this.state.categories.map((data) => (
                             
                        <View style={styles.categoryContainer} >
                            <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name={data.icon_name} size={30} color='black' />
                            </View>
                        <Text style={styles.categoryBtnTxt}>{data.name}</Text>
                        </View>
                        ))
                        :
                        <Text></Text>
                    }
                  </ScrollView>
                </View>
                

           
           </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10,
    },
    catContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    categoryContainer: {
        flexDirection: 'column',
        width: '10%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        // backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 5,
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        width: 80,
        height: 18,
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },


})

