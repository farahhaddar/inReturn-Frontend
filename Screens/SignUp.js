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

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
            secureTextEntryConfirm: true,
            phoneNumber:'',
        };
    }



    // Phone Number
    handlePhoneNumber = (number) => {
        if (/^\d+$/.test(number) || number === ''){
            this.setState({
                phoneNumber: number
            });
        }
    }

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


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F2808A' barStyle="light-content" />
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
                                />
                            </View>


                            {/* email */}
                            < Text style={[styles.text_footer, { marginTop: 35 }]}>Email </Text>

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






                            {/* confirm Pass */}


                            <Text
                                style={[styles.text_footer, { marginTop: 35 }]}>
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
                            <Text
                                style={[styles.text_footer, { marginTop: 35 }]}>
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



                            {/* address */}
                            <Text
                                style={[styles.text_footer, { marginTop: 35 }]}>
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
                                />
                            </View>


                            {/* extra info */}
                            <Text
                                style={[styles.text_footer, { marginTop: 35 }]}>
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
                                />
                            </View>






                            {/* button */}


                            <View style={styles.button}>
                                <TouchableOpacity style={styles.signIn}>
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
    }
});
