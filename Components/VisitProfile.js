import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Platform,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    Alert,
    Modal,
    FlatList,
    Button
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Picker } from "@react-native-community/picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ItemDetails from '../Screens/ItemDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class VisitProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
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
                    name: "hassan1",
                    id: "5"
                },
                {
                    name: "hassan2",
                    id: "6"
                },
                {
                    name: "hassan3",
                    id: "7"
                },
                {
                    name: "hassan3",
                    id: "7"
                },

                {
                    name: "hassan6",
                    id: "7"
                },




            ]

        }
    }

    handleItem = () => {
        this.setState({ show: !this.state.show })
    }

    render() {

        return (
            <SafeAreaView style={{ backgroundColor: "white", maxHeight: 800 }}>

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















                <ScrollView style={{ minHeight: 500 }} nestedScrollEnabled={true}>
                  
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress = { this.props.showUser }
                         >
                             
                        <Icon
                            name="arrow-back-ios"
                            size={38}
                            color="black"
                            onPress={this.props.show}
                        />
                     </TouchableOpacity>

                    </View>
                    {/* image  */}
                    <View style={styles.itemPhotoCont}>
                        <Image
                            source={require("../assets/avatar1.jpeg")}
                            style={styles.itemPhoto}
                        />
                        <Text
                            style={styles.text_footer}
                        >
                          Johne Doe
                 </Text>
                    </View>

                    {/* dashBoard */}
                    <View style={styles.DashCon} >
                        <View style={styles.DashConDat}>
                            <Text style={styles.DashContxt}>
                         Posts   
                        </Text>
                            <Text style={styles.DashConNb}>
                          4
                        </Text>


                    </View>
                        <View style={styles.DashConDatt}>
                            <Text style={styles.DashContxt}>
                                Deals
                        </Text>
                            <Text style={styles.DashConNb}>

                                2
                        </Text>


                        </View>


                    </View>






                    {/* data */}

                    {/* email */}
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    
                        <View style={styles.action}>

                            <MaterialIcons
                                name="email"
                                color={Expo.Constants.manifest.extra.COLOR}
                                size={20}
                                
                            />

                        </View>
                    < Text style={styles.text_footer}>
                    Email:
                    </Text>
                    
                    <Text style={styles.contdata}>
                            Johne@gmail.com
                    </Text>
                    </View>





                    {/* phone Nummber */}
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.action}>
                            <FontAwesome
                                name="phone"
                                color={Expo.Constants.manifest.extra.COLOR}
                                size={20}
                                style={{ marginRight: 5 }}
                            />

                        </View>
                    <Text
                        style={styles.text_footer}>
                    
                    Phone Nummber :
                  
                    </Text>
                        <Text style={styles.contdata}>
                            01111111
                        </Text>
                    </View>




                    {/* city  */}

                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.action}>
                            <MaterialIcons
                                name="location-city"
                                color={Expo.Constants.manifest.extra.COLOR}
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                        </View>
                        
                        <Text
                            style={styles.text_footer}>
                        
                        City :
                        </Text>
                        <Text style={styles.contdata}>
                            Tyre
                           </Text>
                    </View>


                    {/* address */}
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.action}>
                            <MaterialIcons
                                name="location-pin"
                                color={Expo.Constants.manifest.extra.COLOR}
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                        </View>
                        <Text
                            style={styles.text_footer}>
            
                       Address:
                        </Text>

                        <Text style={styles.contdata}>
                            XYZ st
                         </Text>
                    </View>



                    {/* extra info */}
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.action}>
                            <MaterialIcons
                                name="add-location-alt"
                                color={Expo.Constants.manifest.extra.COLOR}
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                        </View>
                        <Text
                            style={styles.text_footer}>
                    
                     Address Details:
                     </Text>
                        <Text style={styles.contdata}>
                            Near ABC Mall
                    </Text>
                    </View>
                    

                    {/* All posts */}

                    <View style={styles.Allposts}>

                        <View style={styles.AllpostsTitleCont}>
                        <Text style={styles.AllpostsTitle} >
                         All Posts:
                        </Text>
                        </View>
                       
                
                        <ScrollView
                            nestedScrollEnabled={true}

                            contentContainerStyle={styles.contentContainer}
                            style={styles.flat}
                        >
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
                                                        <TouchableOpacity>
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
                          







 
            
{/* here */}
                    </View>














                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    itemPhoto: {
        width: 100,
        height: 100,
        borderRadius: 235,
    },
    itemPhotoCont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        fontWeight: "bold",
        padding:2
    },
    action: {
        marginRight: 5,
        marginLeft: 10,

    },
    contdata: {
        fontWeight: "normal",
        color:"rgba(0,0,0,0.7)"

    },
    DashCon:{
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        borderColor:"green",
        marginBottom:20
    },
    DashConDat:{
        alignItems:"center",
          marginTop:20,
          borderRightWidth: 2,      
    },
    DashConDatt: {
        alignItems: "center",
        marginTop: 20,
    },
    DashContxt:{
        fontWeight: "bold",
        fontSize: 16
    },
    
    DashConNb:{
      padding: 45,
      paddingTop:0,
      paddingBottom:0
    },
    AllpostsTitle:{
        fontSize:25,
        fontWeight:"bold",
        // fontStyle:"italic",
        color: Expo.Constants.manifest.extra.COLOR,
      
    },
    AllpostsTitleCont: {
        alignItems: "center",
        margin:20,
    },
    main: {
        maxHeight: 670,
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

    },
    sv:{
        height:500
    },
    flat:{
        maxHeight:550,
    },
    header: {
        marginTop: 10,
        paddingHorizontal: 10,
    },


    


})