import React, { Component } from 'react'
import { Text, FlatList, Modal, StatusBar, ActivityIndicator, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ItemDetails from '../Screens/ItemDetails';
import SendOffer from './SendOffer'
import AsyncStorage from "@react-native-async-storage/async-storage";



export default class Flatlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showTrade: false,
            itemId: "",
            data: [],
            wishlist:"",
            userItemId:"",
        }
    }
 
    handleItem = () => {
        this.setState({ show: !this.state.show })
    }

    handleTrade = (id,item) => {
        this.setState({ showTrade: !this.state.showTrade })
        this.setState({ userItemId:id});
        this.setState({ itemId: item});
    }

    wishlist=(id)=>{
        let i=0;
        for(;i<this.state.wishlist.length;i++){
            if (id == this.state.wishlist[i].item_id)
                break;
        }
        if (i== this.state.wishlist.length)
        return false;
       

        return true;

    }

    componentDidMount() {

        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "wishLists/2", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ wishlist: JSON.parse(res).data })
                        console.log(JSON.parse(res).data)
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
    }


    addWishList=(id)=>{

        const request = async () => {
            user = await AsyncStorage.getItem('user')
            user=JSON.parse(user);
            userId = user.id;

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "wishList", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    }, body: JSON.stringify({
                        item_id: id,
                        user_id:userId,
                    }),
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.componentDidMount()
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
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


                        <SendOffer itemId={this.state.itemId} userItemId={this.state.userItemId}  handleTrade={this.handleTrade} />



                    </View>
                </Modal>










                <FlatList
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    data={this.props.data}
                    renderItem={({ item }) => (

                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ show: !this.state.show ,itemId: item.id })
                                }}

                            >
                                <View style={styles.cardMain} >
                                        
                                   
                                       <Image
                                        style={{ width: 'auto', height: 150, marginBottom: 15, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}

                                        source={{ uri: Expo.Constants.manifest.extra.IMAGE+item.image }}
                                    />
                                   

                                    <Text style={styles.title}> {item.name} </Text>


                                    <View style={styles.footer}>
                                        <View style={styles.section}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.addWishList(item.id)
                                                }}

                                            >
                                                {this.wishlist(item.id)?
                                                <MaterialCommunityIcons style={styles.Iconsection} name="heart" size={20} color='red' />
                                                :
                                               <MaterialCommunityIcons style={styles.Iconsection} name="heart" size={20} color='black' />

                                         }
                                                <Text style={styles.txtsection}> WishList </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.section}>
                                            <TouchableOpacity
                                                onPress={() => { this.handleTrade(item.users.id,item.id)}}
                
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