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
    Modal,
    Dimensions,
    ActivityIndicator,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { navigation } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { set } from 'react-native-reanimated';



const width = Dimensions.get("window").width;

export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            redirect: true,
            email: "",
            emailErr: '',
            isLoading:false,
            message: "",
        };
    }

    // on change of inputs setState
    onChangeValue = (name, text) => {
        this.setState({ [name]: text });
    };


    onSubmit = async (e) => {

        e.preventDefault();
        this.setState({ isLoading: true })

        try {

            fetch(Expo.Constants.manifest.extra.API_URL + "forgot", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({

                    email: this.state.email,

                }),
            }).then((response) => response.text())
                .then((res) => {

                    if (JSON.parse(res).status !== 200  ) {
                   
                        this.setState({ isLoading:false})
        
                    }
                    if (JSON.parse(res).status === 200) {

                        this.setState({ emailErr: '', isLoading: false, show: true, redirect: true, message: JSON.parse(res).data })

                    } else if (JSON.parse(res).error.status === 404) {

                     
                        this.setState({ emailErr: "", redirect: false, show: true, message: JSON.parse(res).error.message })


                    } else if (JSON.parse(res).error.status === 401) {

                        this.setState({ emailErr: '', redirect: false, show: true, message: JSON.parse(res).error.message })

                    } else {
                        // this.setState({ isLoading: false })
                        JSON.parse(res).error &&
                            JSON.parse(res).error.message &&
                            JSON.parse(res).error.message.email &&
                            JSON.parse(res).error.message.email[0] &&
                            this.setState({ emailErr: JSON.parse(res).error.message.email[0] });
                    }

                });


        } catch (e) {
            console.log(e)
        }



    };




    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F2808A' barStyle="light-content" />
                
              
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
                                borderRadius: 20,
                                margin: "auto"
                            }} >

                            <Text style={{
                                color: 'grey',
                                fontSize: 20,
                                width: "86%"


                            }}>

                                {this.state.message}

                            </Text>



                            <View style={{ marginTop: 50, width: "80%" }}>

                                {this.state.redirect ?
                                    <TouchableOpacity
                                        style={styles.signIn}



                                        onPress={() => {
                                            this.setState({ show: false })
                                            this.props.navigation.navigate('ResetPassword')

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
                                    :
                                    <TouchableOpacity
                                        style={styles.signIn}



                                        onPress={() => {
                                            this.setState({ show: false })
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
                                }

                            </View>



                        </View>
                    </View>
                </Modal>








                <View style={styles.header}>
                    <Text style={styles.text_header}> Forgot Your Password ?</Text>
                    <Text style={styles.text_header_Slog}> Don't Worry ! We Got Your Back :)</Text>
                </View>


                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>

                    <SafeAreaView>

                        <ScrollView>


                            {/* email created_at*/}
                            <Text style={styles.errorSingUp}> {this.state.emailErr}</Text>

                            < Text style={styles.text_footer}>Email </Text>

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

                            {/* button */}

                            <View style={styles.button}>


                                {/* Send in email */}

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
                                        }]}>Send Email</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('LogIn')}
                                    style={[styles.signIn, {
                                        borderColor: Expo.Constants.manifest.extra.COLOR,
                                        borderWidth: 1,
                                        marginTop: 15
                                    }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: Expo.Constants.manifest.extra.COLOR,
                                    }]}>Sign In</Text>
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
        fontSize: 16,
        marginTop: 5
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
        marginTop: 0,
        fontStyle: 'italic',
        fontSize: 12

    }
});
