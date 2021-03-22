import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
    Modal,
    ActivityIndicator,
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

const width = Dimensions.get("window").width;

export default class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            show:false,
            successMessage:"",
            email:"",
            password:'',
            passwordConfirm:"",
            token:"",
            emailErr:"",
            passwordErr:"",
            tokenErr:"",
            passwordConfirmErr: "",
            secureTextEntry: true,
            secureTextEntryConfirm: true,
        };
    }


    // on change of inputs setState
    onChangeValue = (name, text) => {
        this.setState({ [name]: text });
    };


    // toggle
    updateSecureTextEntry = (e) => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }
    updateSecureTextEntryConfirm = (e) => {
        this.setState({
            secureTextEntryConfirm: !this.state.secureTextEntryConfirm
        });
    }



    onSubmit = async (e) => {

        e.preventDefault();
        this.setState({ isLoading: true })

    
        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({ passwordErr: "", emailErr: "" ,tokenErr:"" })

            this.setState({ passwordConfirmErr: "Your password must match !" });
        } else {
            try {

                fetch(Expo.Constants.manifest.extra.API_URL +"reset", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({

                        email: this.state.email,
                        password: this.state.password,
                       token:this.state.token
                    }),
                }).then((response) => response.text())
                    .then((res) => {
                        
                        this.setState({isLoading:false})
                        if (JSON.parse(res).status == 200) {
                            this.setState({ show: true,isloading:false, tokenErr: "", passwordErr: "", emailErr: "", successMessage:JSON.parse(res).data })
                        } else {


                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.email &&
                                JSON.parse(res).error.message.email[0] &&
                                this.setState({ emailErr: JSON.parse(res).error.message.email[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.password &&
                                JSON.parse(res).error.message.password[0] &&
                                this.setState({ passwordErr: JSON.parse(res).error.message.password[0] });

                            JSON.parse(res).error.message &&
                                JSON.parse(res).error.message.token &&
                                JSON.parse(res).error.message.token[0] &&
                                this.setState({ tokenErr: JSON.parse(res).error.message.token[0] });

                         }

                    });


            } catch (e) {
                console.log(e)
            }
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
                                borderRadius: 20
                            }} >

                            <Text style={{
                                color: '#000',
                                width: "86%",
                                fontSize: 23
                            }}>

                               {this.state.successMessage}

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
                    <Text style={styles.text_header}> Reset Your Password</Text>
                </View>


                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>

                    <SafeAreaView>

                        <ScrollView>

                            {/* email */}
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

                            {/* Pin Code  */}
                            <Text style={styles.errorSingUp}> {this.state.tokenErr}</Text>
                            <Text
                                style={[styles.text_footer, { marginTop: 2
                                 }]}>
                                Pin Code
                            </Text>

                            <View style={styles.action}>
                                <FontAwesome
                                    name="key"
                                    color={Expo.Constants.manifest.extra.COLOR}
                                    size={20}

                                />

                                <TextInput
                                    placeholder="Pin Code...."
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.onChangeValue("token", text)}

                                />
                            </View>




                            {/* pass */}
                            <Text style={styles.errorSingUp}> {this.state.passwordErr}</Text>

                            <Text style={[styles.text_footer, { marginTop: 2
                             }]}>
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
                                style={[styles.text_footer, { marginTop: 2
                                 }]}>
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





                            {/* Button */}

                            <View style={styles.button}>
                                <TouchableOpacity 
                                    style={styles.signIn}
                                    onPress={(e) => this.onSubmit(e)}
                                    
                                    >
                                <LinearGradient
                                    colors={['#fa93a1', Expo.Constants.manifest.extra.COLOR]}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}> Rest Now</Text>
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
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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
