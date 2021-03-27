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
                {
                    name: "khaldoun",
                    id: "6",
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
                                        source={require("../assets/avatar1.jpeg")}
                                        style={styles.itemPhoto}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View>

                                    <View style={styles.itemBtn}>
                                        <Text style={styles.itemName}>
                                            Offer Name
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
                                        To:<Text style={styles.itemdata}> user Name</Text>
                                    </Text>
                                    <Text style={styles.itemDate}>
                                        Sent On: 2021/3/29
                                </Text>
                                </View>
                            </View>

                            <View style={styles.emoticon}>

                                <Text style={styles.emoticonquest}> Status: </Text>

        
                                    <View style={styles.emoticontext}>
                                        <Text > Yay </Text>
                                        <MaterialCommunityIcons
                                            name="emoticon-happy"
                                        color="#98B82A"
                                            size={20}
                                        />
                                    </View>

                                {/* <View style={styles.emoticontext}>
                                    <Text> Pending </Text>
                                    <MaterialCommunityIcons
                                        name="emoticon-neutral"
                                        color="black"
                                        size={20}
                                    />
                                </View>
                                

                                
                                
                                    <View style={styles.emoticontext}>
                                        <Text>Nay</Text>
                                        <MaterialCommunityIcons
                                            name="emoticon-sad"
                                            color="black"
                                            size={20}
                                        />
                                    </View> */}
                               


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