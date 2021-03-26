import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';


export default class WishListFlat extends Component {

    constructor(props) {
        super(props);
        this.state = {

            data: [
                {
                    name: "farah",
                    id: "1",
                    dets: 'hello beautiful people how are u doing'
                },
                {
                    name: "ali",
                    id: "2",
                    dets: 'hello beautiful people how are u doing'
                },
                {
                    name: "hsen",
                    id: "3",
                    dets: 'hello beautiful people how are u doing'
                },
                {
                    name: "hassan",
                    id: "4",
                    dets: 'hello beautiful people how are u doing'
                },
                {
                    name: "khaldoun",
                    id: "6",
                    dets: 'hello beautiful people how are u doing'
                },


            ]
        }
    }

    handleDets = (dets) => {
        var x = dets;
        var y = x.split(' ').slice(0, 3).join(' ');
        return y + "...";

    }



    render() {
    
        return (

            <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.flat}
            >


                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.state.data}
                    renderItem={({ item }) => (
        
                        <TouchableOpacity style={styles.wrapper}>
                          
                            <View style={styles.wrapperPhoto}>
                                <Image
                                    source={require("../assets/avatar1.jpeg")}
                                    style={styles.itemPhoto}
                                    resizeMode="cover"
                                />
                            </View>
                            <View>
                                <View style={styles.itemBtn}>
                                    <Text style={styles.itemName}>
                                        Item Name 
                                </Text>

                                 <TouchableOpacity>
                                    <Feather
                                        name="delete"
                                        color={Expo.Constants.manifest.extra.COLOR}
                                        size={20}
                                    />
                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.itemDate}>2021/3/29</Text>
                                <Text style={styles.itemdata}>
                                    {this.handleDets(item.dets)}
                                </Text>
                            </View>
        
                        </TouchableOpacity>
                       



                    )}

                />

            </ScrollView>



        )
    }
}

const styles = StyleSheet.create({
    flat: {
        height: 540,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        textAlign: "left",
        backgroundColor: "white",
        shadowColor: "#192a56",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 15,
    },
    itemPhoto: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    wrapperPhoto: {
        marginRight: 10,
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 15,
        flexWrap:"wrap",
        width:200
    },
    itemDate: {
        fontSize: 10,
        color: "rgba(0, 0, 0, 0.5)",
        fontStyle: "italic",
        marginTop: 8,
    },
    itemdata: {
        marginTop: 8,
        fontStyle: "italic",
    },
    itemBtn: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        marginLeft:3,

    }

})