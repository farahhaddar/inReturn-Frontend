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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { Picker } from "@react-native-community/picker";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import MultiSelect from 'react-native-multiple-select';
import UserEdit from './UserEdit';
import ItemEdit from './ItemEdit';


const width = Dimensions.get("window").width;



export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDelete:false,
            showitemEdit:false,
            showUserEdit:false,
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


    showUserEdit=()=>{
        this.setState({showUserEdit:!this.state.showUserEdit})
    }

    showitemEdit= () => {
        this.setState({ showitemEdit: !this.state.showitemEdit })
    }


    render() {

        return (
            <SafeAreaView style={{ backgroundColor: "white", maxHeight: 800 }}>
                  
                  {/* Modals */}

                  {/* loading model  */}

                {/* <Modal
                    transparent
                    visible={this.state.isLoading}
                    animationType="fade"
                >
                    <View style={{
                        backgroundColor: "#000000aa",
                        flex: 1, alignItems: "center",
                        justifyContent: 'center'
                    }}>

                        <StatusBar backgroundColor='#000000aa' barStyle="light-content" />

                        <ActivityIndicator size="large" color={Expo.Constants.manifest.extra.COLOR} />
                    </View>
                </Modal> */}



               {/* delelet Model */}

                <Modal
                    transparent
                    visible={this.state.showDelete}
                    animationType="fade"
                >

                    <View style={{
                        backgroundColor: "#000000aa",
                        flex: 1, alignItems: "center",
                        justifyContent: 'center'
                    }}>

                        <StatusBar backgroundColor='#000000aa' barStyle="light-content" />

                        <View
                            style={{
                                backgroundColor: "white",
                                width: width - 50,
                                paddingTop: 20,
                                alignItems: "center",
                                height: "39%",
                                borderRadius: 20
                            }} >

                            <Text style={{
                                color: '#000',
                                width: "86%",
                                fontSize: 23
                            }}>

                               Item Successfully Deleted.

                            </Text>

                            
                            <View style={{ marginTop: 50, width: "80%" }}>

                                <TouchableOpacity
                                    style={styles.signIn}
                                    onPress={() => {
                                        this.setState({ showDelete: !this.state.showDelete })
                                        // this.props.navigation.navigate('UserStackNavigator')
                                    }}

                                >
                                    <LinearGradient
                                        colors={[Expo.Constants.manifest.extra.SHADE, Expo.Constants.manifest.extra.COLOR]}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}> OK</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>



                        </View>
                    </View>
                </Modal>
                        

                        {/* edit user profile */}
                <Modal
                    transparent
                    visible={this.state.showUserEdit}
                    animationType="fade"
                >

                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                        
                        
                    }}>

                        <StatusBar backgroundColor='#000000aa' barStyle="light-content" />
                          
                            <UserEdit showUserEdit={this.showUserEdit}/>
                    </View>
                </Modal>



                {/* edit item */}
                <Modal
                    transparent
                    visible={this.state.showitemEdit}
                    animationType="fade"
                >

                    <View style={{
                        backgroundColor: "white",
                        flex: 1
                    }}>

                        <StatusBar backgroundColor='#000000aa' barStyle="light-content" />

                     <ItemEdit  showitemEdit={this.showitemEdit}/>
                      
                    </View>
                </Modal>


































                
                <ScrollView style={{ minHeight: 500 }} nestedScrollEnabled={true}>
                 
                    <TouchableOpacity
                        onPress={this.props.handleLogout}

                    >   
                    <FontAwesome
                            name="sign-out"
                            color='grey'
                            size={20}
                            style={{ margin:5,left:320}}
                        />
                    </TouchableOpacity>


                    {/* image  */}
                    <View style={styles.itemPhotoCont}>
                        <Image
                            source={require("../assets/avatar1.jpeg")}
                            style={styles.itemPhoto}
                        />
                        <View style={{display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"row"}}>
                        <Text
                            style={styles.text_footer2}
                        >
                            Farah Haddar
                              
                 </Text>
                      <TouchableOpacity
                                onPress={() => {
                                    this.setState({ showUserEdit: !this.state.showUserEdit })
                                    // this.props.navigation.navigate('UserStackNavigator')
                                }}
                      
                      >
                        <MaterialCommunityIcons
                            name="account-edit"
                            color={Expo.Constants.manifest.extra.COLOR}
                            size={25}
                        style={{ marginLeft:14 }}
                        />
                    </TouchableOpacity>
                        </View>
                     
                    </View>

                    

                    {/* dashBoard */}
                    <View style={styles.DashCon} >
                        <View style={styles.DashConDat}>
                            <Text style={styles.DashContxt}>
                         Posts   
                        </Text>
                            <Text style={styles.DashConNb}>
                          200 
                        </Text>


                    </View>
                        <View style={styles.DashConDatt}>
                            <Text style={styles.DashContxt}>
                                Deals
                        </Text>
                            <Text style={styles.DashConNb}>

                                200
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
                            farah.haddar99@gmail.com
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
                            78813214
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
                            Beirut
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
                            Chiah
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
                            Near bla bla bla
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
                                    
                                            {/* {this.setState({ itemId: item.id })} */}
       
                                            <View style={styles.cardMain} >

                                                <Image
                                                    style={{ width: 'auto', height: 150, marginBottom: 15, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                                                    source={require("../assets/avatar1.jpeg")}
                                                />



                                                <Text style={styles.title}> {item.name} </Text>


                                                <View style={styles.footer}>
                                                    <View style={styles.section}>
                                                        <TouchableOpacity
                                                        onPress={() => {
                                                            this.setState({ showitemEdit: !this.state.showitemEdit })
                                                            // this.props.navigation.navigate('UserStackNavigator')
                                                        }}

                                                        >
                                                            <MaterialCommunityIcons style={styles.Iconsection} name="circle-edit-outline" size={20} color={Expo.Constants.manifest.extra.COLOR} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={styles.section}>
                                                        <TouchableOpacity
                                                        onPress={()=>{this.setState({showDelete:!this.state.showDelete})}}
                                                        >
                                                            <MaterialCommunityIcons style={styles.Iconsection} name="delete" size={20} color={Expo.Constants.manifest.extra.RED} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </View>
                                    
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
        marginTop: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight:5,
        fontWeight: "bold",
        padding:2
    },
    text_footer2: {
        color: '#05375a',
        fontSize: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 1,
        marginLeft: 35,
        fontWeight: "bold",
        padding: 2
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
        height: 250,
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
        justifyContent: 'space-around',
        display: "flex",
        flexDirection: "row"
    },
    section: {
        margin: 7,
        marginTop: 0,
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
    }, signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },


    


})