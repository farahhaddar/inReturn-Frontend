import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class RecivedFlatList extends Component {

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

                                <Text style={styles.itemName}>
                                    offer Name
                                </Text>

                                <Text style={styles.itemdata}>
                                    From:<Text style={styles.itemdata}> user Name</Text>
                                </Text>
                                <Text style={styles.itemDate}>
                                    Recived On: 2021/3/29
                                </Text>
                            </View>
                            </View>

                            <View style={styles.emoticon}>
                              
                                <Text style={styles.emoticonquest}> How did it go? </Text>

                                <TouchableOpacity>
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
                                <TouchableOpacity>
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
    },Top:{
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

    }, emoticon:{
        display:"flex",
        flexDirection:"row",
         justifyContent: "space-around"

    }, 
    emoticontext:{
    display: "flex",
    flexDirection: "row",
    marginTop: 35,
    fontSize:7,
    justifyContent:"space-around"

}, emoticonquest:{
    fontSize:15,
    fontWeight:"bold",
    marginTop: 35,
    marginRight: 10,
    flexDirection:'column',
    color: Expo.Constants.manifest.extra.COLOR,

},
or:{
    fontStyle: "italic",
    fontWeight:"bold",
    fontSize: 7,
    margin:10,
    marginTop: 45,

}

})