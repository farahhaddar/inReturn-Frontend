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


export default class EditItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            show: false,
            exchangeID: [],
            exchangeErr: '',
           

        };
    }





    // exchange items select
    updateExchangeId = (e) => {
        this.setState({ exchangeID: e });
    };






    componentDidMount() {


        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL + "categories", {

                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ categoryData: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.exchangeID + "ExId")
        console.log(this.state.categoryID + "catId")
        console.log(this.state.image + "image")

    }









    render() {


        return (

            <View style={styles.container}>
                <StatusBar backgroundColor={Expo.Constants.manifest.extra.COLOR} barStyle="light-content" />


                {/* loader */}
                <Modal
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
                </Modal>




                {/* Offer Creation */}

                <Modal
                    transparent
                    visible={this.state.show}
                    animationType="fade"
                >

                    <View style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}>

                        <StatusBar backgroundColor='#000000aa' barStyle="light-content" />
                        









                    </View>
                </Modal>



                <View>

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
                                style={{fontSize: 25, color: Expo.Constants.manifest.extra.COLOR, fontWeight: "bold", margin: 20 }}
                            > 
                            Select Items To Exchange With: 
                            </Text>


                            {/* exchange Categories */}
                            <View>
 
                                <MultiSelect
                                    hideTags
                                    items={this.state.categoryData}
                                    uniqueKey="id"
                                    onSelectedItemsChange={this.updateExchangeId}
                                    selectedItems={this.state.exchangeID}
                                    selectText="Select Categories"
                                    searchInputPlaceholderText="Search Items..."
                                    onChangeInput={(text) => console.log(text)}
                                    displayKey="name"
                                    searchInputStyle={{ color: '#CCC' }}
                                    submitButtonColor={Expo.Constants.manifest.extra.COLOR}
                                    submitButtonText="Submit"
                                />
                            </View>


                            {/* button */}


                            <View style={styles.button}>
                                <TouchableOpacity style={styles.signIn}

                                    onPress={(e) => this.onSubmit(e)}

                                >
                                    <LinearGradient
                                        colors={[Expo.Constants.manifest.extra.SHADE, Expo.Constants.manifest.extra.COLOR]}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}> Create Offer </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
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
   
});
