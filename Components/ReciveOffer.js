import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    Alert,
    FlatList,
    Linking,
    Modal,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Picker } from "@react-native-community/picker";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get("window").width;


export default class ReciveOffer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
            data: [
                {
                    name: "Phone",
                    id: "1",
                    date: "2021/3/29",
                    image: require("../assets/phones.jpeg"),
                    dets: " New Phone"
                },
                {
                    name: "Tshirt",
                    id: "2",
                    date: "2021/3/3",
                    image: require("../assets/shirt.jpeg"),
                    dets: " new Tshirt "
                },
            ]


        };
    }




    handleDets = (dets) => {
        var x = dets;
        var y = x.split(' ').slice(0, 3).join(' ');
        return y + "...";

    }
  







    render() {


        return (

            <View style={styles.container}>
                <StatusBar backgroundColor={Expo.Constants.manifest.extra.COLOR} barStyle="light-content" />


        






                {/* Offer Creation */}


                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}>

                        <StatusBar backgroundColor='#000000aa' barStyle="light-content" />

                        <SafeAreaView>

                            <ScrollView >
                                <View >

                                    <TouchableOpacity
                                        onPress={this.props.handleTrade}
                                    >

                                        <Icon
                                            name="arrow-back-ios"
                                            size={25}
                                            color="grey"
                                            style={{ margin: 10, marginTop: 20 }}

                                        />
                                    </TouchableOpacity>


                                </View>
                                <View style={styles.container}>

                                    <Text
                                        style={{ fontSize: 25, color: Expo.Constants.manifest.extra.COLOR, fontWeight: "bold", marginLeft: 90 }}
                                    >
                                        Lamp Offer
                                   </Text>
                                    <Image
                                        source={require("../assets/Lamp.jpeg")}
                                        style={{ width: "100%", marginTop: 20 }}
                                        resizeMode="cover"
                                    />

                                    <View>
                                        <Text style={{ marginTop: 20, marginBottom: 50, fontSize: 20 }}>
                                            Hello, I am Farah, I saw your item and I would like to exchange it with the following:
                                        </Text>

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

                                        <Text style={{ marginTop: 20, fontSize: 20 }}>
                                            If you are  intresed please contact me via whatsapp.
                                           </Text>
                                        <Text
                                            style={{ marginTop: 30, marginLeft: 120 }}
                                            onPress={() => {
                                                Linking.openURL(
                                                    'http://api.whatsapp.com/send?phone=961' + 78940942
                                                );
                                            }}>
                                            <MaterialCommunityIcons name="whatsapp" size={70} color='green' />

                                        </Text>



                                    </View>


                                </View>
                            </ScrollView>
                        </SafeAreaView>









                    </View>
              

            </View>
        )
    }
}










const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    button: {
        alignItems: 'center',
        marginTop: 230
    },
    signIn: {
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
    },
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

});
