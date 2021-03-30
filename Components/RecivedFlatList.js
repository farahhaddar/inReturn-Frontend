import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ReciveOffer from './ReciveOffer';


export default class RecivedFlatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide:1,
            id:"",
            color:"",
            

            data: [
                {
                    name: "Cat Bed",
                    id: "1",
                    username: "Hadi",
                    date: "2021/3/29",
                    image: require("../assets/cats.jpeg"),
                },
                {
                    name: "Tshirt",
                    id: "2",
                    username: "Hassan",
                    date: "2021/3/3",
                    image: require("../assets/shirt.jpeg"),
                },
                {
                    name: "Lamp",
                    id: "3",
                    image: require("../assets/Lamp.jpeg"),
                    username: "Shadi",
                    date: "2021/2/4",

                },
                {
                    name: "Cans",
                    id: "4",
                    image: require("../assets/food.jpeg"),
                    username: "Samar",
                    date: "2021/3/5",
                },
                {
                    name: "Phones",
                    id: "6",
                    image: require("../assets/phones.jpeg"),
                    username: "Khaldoun",
                    date: "2021/3/5",

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

                        <TouchableOpacity 
                        onPress={()=>{ <ReciveOffer handleClose={}/> }}
                        
                        
                        style={styles.Top}>
                            <View style={styles.wrapper}>
                                <View style={styles.wrapperPhoto}>
                                    <Image
                                        source={item.image}
                                        style={styles.itemPhoto}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View>

                                    <Text style={styles.itemName}>
                                    {()=>{this.setState({id:item.id})}}
                                        {item.name}
                                    </Text>

                                    <Text style={styles.itemdata}>
                                        From:<Text style={styles.itemdata}> {item.username}</Text>
                                    </Text>
                                    <Text style={styles.itemDate}>
                                        Recived On:{item.date}
                                    </Text>
                                </View>
                            </View>

                            { this.state.hide==1?
                            <View style={styles.emoticon}>

                                <Text style={styles.emoticonquest}> How did it go? </Text>
                                
                                <TouchableOpacity
                                onPress={()=>{
                                   
                                    this.setState({hide:2})}}    
                                >
                                    <View style={styles.emoticontext}>
                                        <Text> Yay </Text>
                                        <MaterialCommunityIcons
                                            name="emoticon-happy"
                                            color="black"
                                            size={20}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <Text style={styles.or}> OR </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        
                                         this.setState({ hide:3}) }}                                
                                >
                                    <View style={styles.emoticontext}>
                                        <Text>Nay</Text>
                                        <MaterialCommunityIcons
                                            name="emoticon-sad"
                                            color="black"
                                            size={20}
                                        />
                                    </View>
                                </TouchableOpacity>
                
                            </View>
                            :
                               this.state.hide == 2  ?
                                <View style={styles.emoticon}>

                                    <Text style={styles.emoticonquest}> How did it go? </Text>

                                    <TouchableOpacity
                            
                                    >
                                        <View style={styles.emoticontext}>
                                            <Text> Yay </Text>
                                            <MaterialCommunityIcons
                                                name="emoticon-happy"
                                                color="#98B82A"
                                                size={20}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                :
                                    this.state.hide == 3 ?

                                    <View style={styles.emoticon}>

                                        <Text style={styles.emoticonquest}> How did it go? </Text>

                                    <TouchableOpacity
                        
                                    >
                                        <View style={styles.emoticontext}>
                                            <Text>Nay</Text>
                                            <MaterialCommunityIcons
                                                name="emoticon-sad"
                                                color="red"
                                                size={20}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    </View>
                                    :
                                    ""

                    }


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
    }, Top: {
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
        width: 200
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
    itemBtn: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        marginLeft: 3,

    }, emoticon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"

    },
    emoticontext: {
        display: "flex",
        flexDirection: "row",
        marginTop: 35,
        fontSize: 7,
        justifyContent: "space-around"

    }, emoticonquest: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 35,
        marginRight: 10,
        flexDirection: 'column',
        color: Expo.Constants.manifest.extra.COLOR,

    },
    or: {
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 7,
        margin: 10,
        marginTop: 45,

    }

})