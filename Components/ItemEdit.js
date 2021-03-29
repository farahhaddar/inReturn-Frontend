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
            name: "",
            categoryID: "",
            categoryData: [],
            desc: "",
            image: "",
            exchangeID: [],
            nameErr: "",
            categoryErr: "",
            descErr: "",
            imageErr: "",
            exchangeErr: '',
            oldData: [],

        };
    }









    // on change of inputs setState
    onChangeValue = (name, text) => {
        this.setState({ [name]: text });
    };

    // Category select
    updateCategoryId = (e) => {
        this.setState({ categoryID: e });
    };

    // Category  of exchange select
    updateExchangeId = (e) => {
        this.setState({ exchangeID: e });
    };


    // image picker  from gallery
    selectPicture = async () => {

        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }

    }


    //  image Picker from camera 
    takePicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
            allowsEditing: true
        });
        this.setState({ image: uri });
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




                {/* success */}

                <Modal
                    transparent
                    visible={this.state.show}
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

                                Item  Successfully Added  :)

                            </Text>


                            <View style={{ marginTop: 50, width: "80%" }}>

                                <TouchableOpacity
                                    style={styles.signIn}
                                    onPress={() => {
                                        this.setState({ show: false })
                                        // this.props.navigation.navigate('LogIn')
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



                <View>

                    <SafeAreaView>

                        <ScrollView>
                         
                            <View >

                                <TouchableOpacity
                                    onPress={this.props.showitemEdit}
                                >

                                    <Icon
                                        name="arrow-back-ios"
                                        size={25}
                                        color="grey"
                                        style={{ margin: 10, marginTop: 20 }}

                                    />
                                </TouchableOpacity>


                            </View>
                            <Text
                                style={{ marginLeft: 90, fontSize: 25, color: Expo.Constants.manifest.extra.COLOR, fontWeight: "bold", margin: 20 }}
                            > Edit Item </Text>



                            {/* item */}
                            <Text style={styles.errorSingUp}> {this.state.nameErr}</Text>
                            <Text
                                style={styles.text_footer}
                            >
                                Item Name
                            </Text>

                            <View style={styles.action}>
                                <MaterialCommunityIcons
                                    name="shopping"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder="Red T-Shirt"
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("name", text)}
                                />
                            </View>


                            {/* DESCRIPTION */}

                            <Text style={styles.errorSingUp}> {this.state.emailErr}</Text>

                            < Text style={[styles.text_footer, { marginTop: 4 }]}>Item Description </Text>

                            <View style={styles.action}>

                                <MaterialCommunityIcons
                                    name="information"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    multiline={true}
                                    numberOfLines={3}
                                    placeholder="Brand New T-shirt size xs can fit ... "
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("email", text)}
                                />

                            </View>

                            {/* category drop down */}
                            <Text style={styles.errorSingUp}> {this.state.cityIdErr}</Text>

                            <View>

                                <Text
                                    style={[styles.text_footer, { marginBottom: 20 }]}>

                                    Exchange Categories:</Text>



                                {this.state.categoryData.length > 0 ?

                                    <View style={{ borderWidth: 2, borderColor: Expo.Constants.manifest.extra.COLOR, borderRadius: 15 }}>
                                        <Picker
                                            style={{ color: "#666666" }}
                                            selectedValue={this.state.categoryID}
                                            onValueChange={this.updateCategoryId}
                                        >

                                            <Picker.defaultValue label="Choose Category" ></Picker.defaultValue>
                                            {this.state.categoryData.map((data) => (
                                                <Picker.Item label={data.name} value={data.id} />
                                            ))}

                                        </Picker>
                                    </View>

                                    :
                                    <Text></Text>
                                }

                            </View>

                            {/* exchange Categories */}
                            <View>
                                <Text
                                    style={[styles.text_footer, { marginTop: 15, marginBottom: 20 }]}>

                                    Item Category:</Text>

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






                            {/* Image Picker */}


                            <Text style={styles.errorSingUp}> {this.state.cityIdErr}</Text>

                            <View>

                                <Text
                                    style={[styles.text_footer, { marginTop: 5, marginBottom: 20 }]}>

                                    Item Image </Text>

                                <View style={styles.container2}>
                                    <Image style={styles.image} source={{ uri: this.state.image }} />
                                    <View style={styles.row}>

                                        <TouchableOpacity
                                            onPress={this.selectPicture}
                                        >
                                            <MaterialCommunityIcons
                                                name="image"
                                                color={Expo.Constants.manifest.extra.COLOR}
                                                size={35}
                                                style={{ margin: 20 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={this.takePicture}
                                        >
                                            <MaterialCommunityIcons
                                                name="camera"
                                                color={Expo.Constants.manifest.extra.COLOR}
                                                size={35}
                                                style={{ margin: 20 }}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                </View>






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
                                        }]}> Edit </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
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
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    header: {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28,
    },
    text_header_Slog: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 3
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom:15,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorSingUp: {
        color: "#ff0000",
        marginTop: 20,
        fontStyle: 'italic',
        fontSize: 12

    },
    row: {
        flexDirection: 'row'
    },

    image: {
        width: 200,
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    button2: {
        padding: 13,
        margin: 15,
        backgroundColor: '#dddddd',
    },
    container2: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
