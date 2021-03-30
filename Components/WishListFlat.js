import React, { Component } from 'react'
import { Text, FlatList, Modal, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import ItemDetails from "../Screens/ItemDetails"

export default class WishListFlat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: "",
            itemId: "",
            data: [
                {
                    name: "Cat Bed",
                    id: "1",
                    date: "2021/3/29",
                    image: require("../assets/cats.jpeg"),
                    dets:" Cats White Bed"
                },
                {
                    name: "Tshirt",
                    id: "2",
                    date: "2021/3/3",
                    image: require("../assets/shirt.jpeg"),
                    dets:" new Tshirt "
                },
                {
                    name: "Lamp",
                    id: "3",
                    image: require("../assets/Lamp.jpeg"),
                    date: "2021/2/4",
                    dets:" Classic 6W Led b"

                },
                {
                    name: "Cans",
                    id: "4",
                    image: require("../assets/food.jpeg"),
                    date: "2021/3/5",
                    dets:"expiry in 4 months"
                },
                {
                    name: "Phones",
                    id: "6",
                    image: require("../assets/phones.jpeg"),
                    date: "2021/3/5",
                    dets:" New Phone",

                }

            ]

            
        }
    }

    handleDets = (dets) => {
        var x = dets;
        var y = x.split(' ').slice(0, 3).join(' ');
        return y + "...";

    }
  
    handleItem = () => {
        this.setState({ show: !this.state.show })
    }


    render() {

        return (
            <View>
                <Modal
                    transparent
                    visible={this.state.show}
                    animationType="fade"
                >
                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.handleItem

                            }}
                        >

                        </TouchableOpacity>
                        <ItemDetails itemId={this.state.itemId} show={this.handleItem} />


                    </View>
                </Modal>





                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.flat}
                >



                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={this.state.data}
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ show: !this.state.show, itemId: item.id })
                                }}

                                style={styles.wrapper}>

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

                                        <TouchableOpacity
                                        
                
                                        >
                                            <Feather
                                                name="delete"
                                                color={Expo.Constants.manifest.extra.RED}
                                                size={20}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                    <Text style={styles.itemDate}>{item.date}</Text>
                                    <Text style={styles.itemdata}>
                                        {this.handleDets(item.dets)}
                                    </Text>
                                </View>

                            </TouchableOpacity>





                        )}

                    />

                </ScrollView>

            </View>

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
        flexWrap: "wrap",
        width: 200
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
        marginLeft: 3,

    }

})