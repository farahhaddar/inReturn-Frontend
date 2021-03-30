import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    SafeAreaView,
    ScrollView,
    Modal,
    Image,
    ImageBackground,
    ActivityIndicator,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import VisitProfile from '../Components/VisitProfile';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default class ItemDetails extends Component {
  
    constructor(props) {
      super(props)
  
      this.state = {
          showUser:false,
          userId:'',
          data:[
              {
                  name: "Pets",
                  id: "1",
                  icon_name:'cat',
                 
              },
              {
                  name: "Arts",
                  id: "1",
                  icon_name: "music",

              },
              {
                  name: "Fashion",
                  id: "1",
                  icon_name:"tshirt-crew",

              },

          ]

          
      }
  }

    handleUser= () => {
    this.setState({ showUser: !this.state.showUser })
}
  

    render() {
        return (


            <SafeAreaView style={{ flex: 1 }}>
  

         {/* User Profile vist model */}

                <Modal
                    transparent
                    visible={this.state.showUser}
                    animationType="fade"
                >
                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}>
                      
                        <VisitProfile userId={this.state.userId} showUser={this.handleUser} />


                    </View>
                </Modal>


                <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

                 
                 {/* backGround item image */}

                <ImageBackground style={{ flex: 0.5 }}
                    source={require("../assets/Lamp.jpeg")}
                >

                     {/* go back button button */}

                    <View style={style.header}>
                        <Icon
                            name="arrow-back-ios"
                            size={38}
                            color="white"
                            onPress={this.props.show}
                        />

                    </View>


                      {/* item name on image */}
                    <View style={style.imageDetails}>
                        <Text
                            style={{
                                width: '70%',
                                fontSize: 25,
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                fontWeight: 'bold',
                                color: "white",
                                paddingLeft:40,
                                marginBottom: 0,
                            }}>
                              Light Lamp
                       </Text>
                    </View>

                </ImageBackground>


                <Animatable.View
                    animation="fadeInUpBig"
                    style={style.detailsContainer}>

                      {/* add to wishlist button */}

                    <View style={style.iconContainer}>
                        <Icon name="favorite" color="red" size={22} />
                    </View>


                    <ScrollView nestedScrollEnabled={true}>
                          
                           {/* user name and image */}
                        <TouchableOpacity onPress={() => {
                            this.setState({ showUser: !this.state.showUser, userId:'id' })
                        }} >
                        <View style={{ flexDirection: 'row',alignItems:"center", marginTop: 5 }}>

                           

                            <Image
                                source={require("../assets/avatar1.jpeg")}
                                style={style.itemPhoto}
                                resizeMode="cover"
                            />
                            <Text
                                style={{
                                    marginLeft: 5,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: "black",
                                }}>
                                 Johen Doe
                            </Text>
                           
                        </View>
                        </TouchableOpacity>
                          


                          {/* date posted  */}

                        <Text style={{ marginLeft:70,marginTop:-8,fontSize: 15, color:"grey" }}>
                            Posted on : <Text style={{ fontStyle: "italic"}}> 2021/2/3</Text>
                        </Text>

                        {/* category it belongs to */}
                        <View>
                        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
                            Category :  
                            <Text style={{ fontSize: 15, fontWeight: 'normal'}}> House Hold</Text>
                        </Text>
                        </View>

                        {/* description */}
                         <View>
                        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
                        Description:
                        </Text>
                            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'normal' }}>
                                Classic Lamp 6W Led bulb is included.
                                 
                            </Text>

                        </View>

                        {/* category of exchange */}

                        <View style={style.main}>
                            <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }} >
                                Exchange Category: 
                                </Text>

                            <View style={style.catContainer}>
                                <ScrollView nestedScrollEnabled={true} horizontal={true}  >
                                    {

                                        this.state.data.map((data) => (

                                            <View style={style.categoryContainer} >
                                                <View style={style.categoryIcon}>
                                                    <MaterialCommunityIcons name={data.icon_name} size={30} color='black' />
                                                </View>
                                                <Text style={style.categoryBtnTxt}>{data.name}</Text>
                                            </View>
                                        ))
                                        
                                    }
                                </ScrollView>
                            </View> 

                        </View> 


















                    </ScrollView>
                </Animatable.View>


                          {/* trade now button */}
                        <TouchableOpacity >
                          <View style={style.footer}>
                          <FontAwesome  name="exchange" size={25} color='white' />
                          <Text style={style.button} > Trade Now! </Text>
                          </View>
                       </TouchableOpacity>

            </SafeAreaView>
        )
    }
}



















const style = StyleSheet.create({
    iconContainer: {
        height: 45,
        width: 45,
        position: 'absolute',
        top: -30,
        backgroundColor: "white",
        borderRadius: 30,
        right: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        top: -25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 0.5
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    imageDetails: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        position: 'absolute',
        bottom: 40,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor:Expo.Constants.manifest.extra.COLOR,
        height: 50,
        paddingHorizontal: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 245,
        color: "white"
        
    },
    button:{
        display: "flex",
        flexDirection: "row",
        fontSize:20,
        color:"white"

    },
    itemPhoto: {
        width: 60,
        height: 60,
        borderRadius: 150,
    },
    title: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10,
    },
    catContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    categoryContainer: {
        flexDirection: 'column',
        width: '34%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 5,
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        width: 80,
        height: 18,
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    main: {
        backgroundColor: 'white'
    }
});
