import React, { Component } from 'react'
import { Text, FlatList, Modal, StatusBar, ActivityIndicator, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ItemDetails from '../Screens/ItemDetails';
import SendOffer from './SendOffer'



export default class Flatlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showTrade: false,
            itemId: "",
            data: [
                {
                    name: "farah",
                    id: "1"
                },
                {
                    name: "ali",
                    id: "2"
                },
                {
                    name: "hsen",
                    id: "3"
                },
                {
                    name: "hassan",
                    id: "4"
                },
                {
                    name: "khaldoun",
                    id: "6"
                },


            ]
        }
    }

    handleItem = () => {
        this.setState({ show: !this.state.show })
    }

    handleTrade = () => {
        this.setState({ showTrade: !this.state.showTrade })
    }


    render() {


        return (


            <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.flat}
            >

                {/* item detail page */}
                <Modal
                    transparent
                    visible={this.state.show}
                    animationType="fade"
                >
                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}>
        
                        <ItemDetails itemId={this.state.itemId} show={this.handleItem} />


                    </View>
                </Modal>


                {/* trade model */}
                <Modal
                    transparent
                    visible={this.state.showTrade}
                    animationType="fade"
                >
                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}>
                       
                      
                        <SendOffer itemId={this.state.itemId} handleTrade={this.handleTrade} />
                       
                      

                    </View>
                </Modal>










                <FlatList
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={({ item }) => (

                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ show: !this.state.show, itemId: item.id })
                                }}

                            >
                                <View style={styles.cardMain} >

                                    <Image
                                        style={{ width: 'auto', height: 150, marginBottom: 15, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                                        source={require("../assets/avatar1.jpeg")}
                                    />



                                    <Text style={styles.title}> {item.name} </Text>


                                    <View style={styles.footer}>
                                        <View style={styles.section}>
                                            <TouchableOpacity


                                            >
                                                <MaterialCommunityIcons style={styles.Iconsection} name="heart" size={20} color='black' />
                                                <Text style={styles.txtsection}> WishList </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.section}>
                                            <TouchableOpacity
                                                onPress={
                                                    this.handleTrade}
                                            
                                            >
                                                <FontAwesome style={styles.Iconsection} name="exchange" size={20} color='black' />
                                                <Text style={styles.txtsection} > Trade Now! </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>


                    )}

                />

            </ScrollView>



        )
    }
}

const styles = StyleSheet.create({
    flat: {
        height: 555,
    },
    container: {
        margin: "3%",
        marginLeft: 10,
        height: "100%",
        marginBottom: 10
    },
    cardMain: {
        backgroundColor: "white",
        width: 160,
        height: 280,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.7)',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
        flexWrap: 'wrap'
    },
    footer: {
        marginTop: 7,
        justifyContent: 'space-around',
        display: "flex",
        flexDirection: "row"
    },
    section: {
        margin: 7,
        display: "flex",
        flexDirection: "column",
    },
    Iconsection: {
        textAlign: 'center',
        marginBottom: 4,

    }, txtsection: {
        fontSize: 10,

    }


})