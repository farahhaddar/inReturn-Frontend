import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';


export default class SentFlatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "Cat Bed",
                    id: "1",
                    username: "Hadi",
                    date: "2021/3/29",
                    image: require("../assets/cats.jpeg"),
                    color:"#98B82A",
                    status:"Yay"
                },
                {
                    name: "Tshirt",
                    id: "2",
                    username: "Hassan",
                    date: "2021/3/3",
                    image: require("../assets/shirt.jpeg"),
                    color: "red",
                    status: "Nay"
                },
                {
                    name: "Lamp",
                    id: "3",
                    image: require("../assets/Lamp.jpeg"),
                    username: "Johne Doe",
                    date: "2021/3/30",
                    color: "black",
                    status:"Pending"

                },
                {
                    name: "Cans",
                    id: "4",
                    image: require("../assets/food.jpeg"),
                    username: "Samar",
                    date: "2021/3/5",
                    color: "red",
                    status: "Nay"
                },
                {
                    name: "Phones",
                    id: "6",
                    image: require("../assets/phones.jpeg"),
                    username: "Khaldoun",
                    date: "2021/3/5",
                    color: "#98B82A",
                    status:"Yay"

                }

            ]

        }
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

                        <TouchableOpacity style={styles.Top}>
                            <View style={styles.wrapper}>
                                <View style={styles.wrapperPhoto}>
                                    <Image
                                        source={item.image}
                                        style={styles.itemPhoto}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View>

                                    <View style={styles.itemBtn}>
                                        <Text style={styles.itemName}>
                                            {item.name}
                                       </Text>

                                        <TouchableOpacity>
                                            <Feather
                                                name="delete"
                                                color={Expo.Constants.manifest.extra.RED}
                                                size={20}
                                            />
                                        </TouchableOpacity>

                                    </View>

                                    <Text style={styles.itemdata}>
                                        To:<Text style={styles.itemdata}>{item.username}</Text>
                                    </Text>
                                    <Text style={styles.itemDate}>
                                        Sent On: {item.date}
                                </Text>
                                </View>
                            </View>

                            <View style={styles.emoticon}>

                                <Text style={styles.emoticonquest}> Status: </Text>

                                 {item.status=="Yay"?
                                    <View style={styles.emoticontext}>
                                        <Text > Yay </Text>
                                        <MaterialCommunityIcons
                                            name="emoticon-happy"
                                        color={item.color}
                                            size={20}
                                        />
                                    </View>
                                    : 
                                    item.status=="Nay"?

                                 <View style={styles.emoticontext}>
                                    <Text>  Nay</Text>
                                    <MaterialCommunityIcons
                                        name="emoticon-sad"
                                        color={item.color}
                                        size={20}
                                    />
                                </View>
                                
                                 :
                                
                                
                                    <View style={styles.emoticontext}>
                                        <Text> Pending</Text>
                                        <MaterialCommunityIcons
                                            name="emoticon-neutral"
                                            color="black"
                                            size={20}
                                        />
                                    </View> 
                               
                                }

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
        height: 560,
    }, 
    Top: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 3,

    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",

    },
    itemPhoto: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    wrapperPhoto: {
        marginRight: 10,
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 15,
        flexWrap: "wrap",
        width: 200,
        marginRight: 25,
    },
    itemDate: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.5)",
        fontStyle: "italic",
        marginTop: 4,
    },
    itemdata: {
        marginTop: 2,
    },
    emoticon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    emoticontext: {
        display: "flex",
        flexDirection: "row",
        marginTop: 35,
        fontSize: 7,

    }, emoticonquest: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 35,
        marginLeft: 90,
        flexDirection: 'column',
        color: Expo.Constants.manifest.extra.COLOR,

    },
    itemBtn: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 3,

    }

})