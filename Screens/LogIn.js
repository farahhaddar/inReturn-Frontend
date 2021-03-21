import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { navigation } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            secureTextEntry: true,
            error: "",
        };
    }


    onChangeValue = (name, text) => {
        this.setState({ [name]: text });
    };

    // toggle
    updateSecureTextEntry = (e) => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }


    onSubmit = async (e) => {
        e.preventDefault();

        const request = await fetch("http://192.168.0.105:8000/api/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        });
       
        const response = await request.json();
        const result = request.status;
        if (result == 200) {

            const storeData = async () => {
                const token = response.access_token;
                const user = JSON.stringify(response.user);
                try {
                    await AsyncStorage.setItem("token", token);
                    await AsyncStorage.setItem("user", user);
                    this.props.setToken(true);
            
                } catch (e) {
                    alert("Faild To Log In ")
                    console.log(e);
                }
            };
            storeData();
            const store = await AsyncStorage.getItem("token");
            console.log(store);
        } else {
            alert("You are not authorized to login !");
            this.setState({ error:response.error})
        }
    };













    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F2808A' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>WELCOME !</Text>
                    <Text style={styles.text_header_Slog}> Alot Of Old Stuff ??  </Text>
                    <Text style={styles.text_header_Slog}> Login And Exchnage It With New Things !! </Text>
                </View>


                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>

                    <SafeAreaView>

                        <ScrollView>
                              

                            <Text>{this.state.error}</Text>
                            
                            {/* email */}
                            < Text style={styles.text_footer}>Email </Text>

                            <View style={styles.action}>

                                <MaterialIcons
                                    name="email"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    onChangeText={(text) => this.onChangeValue("email", text)}
                                    placeholder="Johne@example.com"
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"

                                />

                            </View>



                            {/* pass */}

                            <Text style={[styles.text_footer, { marginTop: 35 }]}>
                                Password
                            </Text>

                            <View style={styles.action}>
                                <MaterialIcons
                                    name="lock"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}
                                />

                                <TextInput
                                    onChangeText={(text) => this.onChangeValue("password", text)}
                                    placeholder="8 character password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={this.state.secureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize="none"

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


                            {/* button */}

                            <View style={styles.button}>

                                {/* login */}
                                <TouchableOpacity
    
                                    onPress={(e) => this.onSubmit(e)}
                                    style={styles.signIn}
                                >
                                    <LinearGradient
                                        colors={['#fa93a1', Expo.Constants.manifest.extra.COLOR]}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}>Sign In</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                {/* forget password */}
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                                >
                                    <Text style={{ color: 'grey', marginTop: 10 }}>Forgot  Your Password?</Text>
                                </TouchableOpacity>

                                {/* signup */}
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignUp')}
                                    style={[styles.signIn, {
                                        borderColor: Expo.Constants.manifest.extra.COLOR,
                                        borderWidth: 1,
                                        marginTop: 15
                                    }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: Expo.Constants.manifest.extra.COLOR,
                                    }]}>Sign Up</Text>
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
    }
});
