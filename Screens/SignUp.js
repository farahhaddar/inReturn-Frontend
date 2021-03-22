import React, { Component } from 'react'
import {
    View,
    Text,
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
import { navigation } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Picker } from "@react-native-community/picker";

const width = Dimensions.get("window").width;


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            show: false,
            secureTextEntry: true,
            secureTextEntryConfirm: true,
            phoneNumber: '',
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            address: "",
            extraInfo: "",
            cityId: "",
            cityData: [],
            phoneNumberErr: '',
            nameErr: "",
            emailErr: "",
            passwordErr: "",
            passwordConfirmErr: "",
            addressErr: "",
            extraInfoErr: "",
            cityIdErr: "",


        };
    }


    // on change of inputs setState
    onChangeValue = (name, text) => {
        this.setState({ [name]: text });
    };

    // drop down piccker
    updateCityId = (e) => {
        this.setState({ cityId: e });
    };

    
   

    // Phone Number numric validation and setState
    handlePhoneNumber = (number) => {
        if (/^\d+$/.test(number) || number === '') {
            this.setState({
                phoneNumber: number
            });
        }
    }

    // toggle hide  for password
    updateSecureTextEntry = (e) => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }

    // toggle hide password for confirmation
    updateSecureTextEntryConfirm = (e) => {
        this.setState({
            secureTextEntryConfirm: !this.state.secureTextEntryConfirm
        });
    }


    onSubmit = async (e) => {

        e.preventDefault();
        this.setState({ isLoading:true})

    
        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({ isLoading: false })
            this.setState({nameErr: "", cityIdErr: "", addressErr: "", phoneNumberErr: "", passwordErr: "", emailErr: "", })

            this.setState({ passwordConfirmErr: "Your password must match !" });
        } else {
            try {

                fetch(Expo.Constants.manifest.extra.API_URL +"register", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        phoneNb: this.state.phoneNumber,
                        address: this.state.address,
                        extraInfo: this.state.extraInfo,
                        city_id: this.state.cityId
                    }),
                }).then((response) => response.text())
                    .then((res) => {
                        this.setState({ isLoading: false })
                        if (JSON.parse(res).status == 200) {
                            this.setState({ show: true, nameErr: "", cityIdErr: "", addressErr: "", phoneNumberErr: "", passwordErr: "", emailErr: "",})
                        } else {
                            this.setState({ passwordConfirmErr: "" })
                            
                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.name &&
                                JSON.parse(res).error.message.name[0] &&
                                this.setState({ nameErr: JSON.parse(res).error.message.name[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.email &&
                                JSON.parse(res).error.message.email[0] &&
                                this.setState({ emailErr: JSON.parse(res).error.message.email[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.password &&
                                JSON.parse(res).error.message.password[0] &&
                                this.setState({ passwordErr: JSON.parse(res).error.message.password[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.phoneNb &&
                                JSON.parse(res).error.message.phoneNb[0] &&
                                this.setState({ phoneNumberErr: JSON.parse(res).error.message.phoneNb[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.city_id &&
                                JSON.parse(res).error.message.city_id[0] &&
                                this.setState({ cityIdErr: JSON.parse(res).error.message.city_id[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.address &&
                                JSON.parse(res).error.message.address[0] &&
                                this.setState({ addressErr: JSON.parse(res).error.message.address[0] });
                        }

                    });


            } catch (e) {
                console.log(e)
            }
        }


    };





    componentDidMount() {


        const request = async () => {

            try {

                fetch(Expo.Constants.manifest.extra.API_URL +"cities", {

                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                })
                    .then((response) => response.text())
                    .then((res) => {
                        this.setState({ cityData: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
    }




    render() {


        return (

            <View style={styles.container}>
                <StatusBar backgroundColor={Expo.Constants.manifest.extra.COLOR} barStyle="light-content" />

              
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

                                Successfully Registerd :)

                            </Text>

                            <Text
                                style={{
                                    color: 'grey',
                                    fontSize: 20,
                                    marginTop: 30
                                }}>
                                Please Log In !
                            </Text>

                            <View style={{ marginTop: 50, width: "80%" }}>

                                <TouchableOpacity
                                    style={styles.signIn}



                                    onPress={() => {
                                        this.setState({ show: false })
                                        this.props.navigation.navigate('LogIn')
                                    }}

                                >
                                    <LinearGradient
                                        colors={['#fa93b3', Expo.Constants.manifest.extra.COLOR]}
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

                <View style={styles.header}>
                    <Text style={styles.text_header}> Sign Up !</Text>
                    <Text style={styles.text_header_Slog}> You Have Thing You Don't Want Anymore? Sign Up And Exchnage It With New Things !! </Text>
                </View>


                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>

                    <SafeAreaView>

                        <ScrollView>

                            {/* user */}
                            <Text style={styles.errorSingUp}> {this.state.nameErr}</Text>
                            <Text
                                style={styles.text_footer}
                            >
                                User Name
                            </Text>

                            <View style={styles.action}>
                                <FontAwesome
                                    name="user"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder="Johne_Doe"
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("name", text)}
                                />
                            </View>


                            {/* email */}
                            <Text style={styles.errorSingUp}> {this.state.emailErr}</Text>

                            < Text style={[styles.text_footer, { marginTop: 4 }]}>Email </Text>

                            <View style={styles.action}>

                                <MaterialIcons
                                    name="email"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder="Johne@example.com"
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("email", text)}
                                />

                            </View>



                            {/* pass */}
                            <Text style={styles.errorSingUp}> {this.state.passwordErr}</Text>

                            <Text style={[styles.text_footer, { marginTop: 4 }]}>
                                Password
                            </Text>

                            <View style={styles.action}>
                                <MaterialIcons
                                    name="lock"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder="8 character password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={this.state.secureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("password", text)}

                                />
                                <TouchableOpacity
                                    onPress={this.updateSecureTextEntry}
                                >
                                    {this.state.secureTextEntry ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>



                            </View>






                            {/* confirm Pass */}

                            <Text style={styles.errorSingUp}> {this.state.passwordConfirmErr}</Text>


                            <Text
                                style={[styles.text_footer, { marginTop: 4 }]}>
                                Confirm Password
                           </Text>

                            <View style={styles.action}>
                                <MaterialIcons
                                    name="lock"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder="8 character password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={this.state.secureTextEntryConfirm ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("passwordConfirm", text)}

                                />
                                <TouchableOpacity
                                    onPress={this.updateSecureTextEntryConfirm}
                                >
                                    {this.state.secureTextEntryConfirm ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>



                            </View>


                            {/* phone Nummber */}
                            <Text style={styles.errorSingUp}> {this.state.phoneNumberErr}</Text>

                            <Text
                                style={[styles.text_footer, { marginTop: 4 }]}>
                                Phone Nummber
                            </Text>

                            <View style={styles.action}>
                                <FontAwesome
                                    name="phone"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    keyboardType={'numeric'}
                                    placeholder="96103123456"
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    onChangeText={this.handlePhoneNumber}
                                    value={this.state.phoneNumber}
                                />
                            </View>


                            {/* city drop down */}
                            <Text style={styles.errorSingUp}> {this.state.cityIdErr}</Text>

                            <View>

                                <Text
                                    style={[styles.text_footer, { marginTop: 5, marginBottom: 20 }]}>

                                    City</Text>



                                {this.state.cityData.length > 0 ?

                                    <View style={{ borderWidth: 2, borderColor: Expo.Constants.manifest.extra.COLOR, borderRadius: 15 }}>
                                        <Picker
                                            style={{ color: "#666666" }}

                                            selectedValue={this.state.cityId}
                                            onValueChange={this.updateCityId}
                                        >

                                            <Picker.defaultValue label="Choose a city" ></Picker.defaultValue>
                                            {this.state.cityData.map((data) => (
                                                <Picker.Item label={data.name} value={data.id} />
                                            ))}

                                        </Picker>
                                    </View>

                                    :
                                    <Text></Text>
                                }

                            </View>




                            {/* address */}

                            <Text style={styles.errorSingUp}> {this.state.addressErr}</Text>

                            <Text
                                style={[styles.text_footer, { marginTop: 4 }]}>
                                Address
                            </Text>

                            <View style={styles.action}>
                                <MaterialIcons
                                    name="location-pin"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder=" XYZ street..."
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("address", text)}
                                />
                            </View>


                            {/* extra info */}
                            <Text
                                style={[styles.text_footer, { marginTop: 20 }]}>
                                Address Details
                            </Text>

                            <View style={styles.action}>
                                <MaterialIcons
                                    name="add-location-alt"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    placeholder=" Near XYZ store... "
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("extraInfo", text)}
                                />
                            </View>






                            {/* button */}


                            <View style={styles.button}>
                                <TouchableOpacity style={styles.signIn}

                                    onPress={(e) => this.onSubmit(e)}

                                >
                                    <LinearGradient
                                        colors={['#fa93a1', Expo.Constants.manifest.extra.COLOR]}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}> Sign Up Now</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>


                        </ScrollView>
                    </SafeAreaView>
                </Animatable.View>
            </View>
        )
    }
}











const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Expo.Constants.manifest.extra.COLOR,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28
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
        borderRadius: 10
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

    }

});
