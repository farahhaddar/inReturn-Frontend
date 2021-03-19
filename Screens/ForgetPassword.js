import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    SafeAreaView,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';




const ForgotPassword = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    // email
    const textInputChange = (val) => {
        if (val.trim().length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,

            });
        }
    }
    



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F2808A' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}> Forgot Your Password ?</Text>
                <Text style={styles.text_header_Slog}> Don't Worry ! We Got Your Back :)</Text>
            </View>


            <Animatable.View
                animation="fadeInUpBig"

                style={styles.footer}>

               < SafeAreaView>
               <ScrollView>

                {/* email */}
                < Text style={[styles.text_footer, {

                }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="envelope-o"
                        color={Expo.Constants.manifest.extra.COLOR}
                        size={20}
                    />

                    <TextInput
                        placeholder="Email ...."
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}

                </View>


               
            

                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResetPassword')}
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
                        onPress={() => navigation.navigate('LogIn')}
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
    );
};

export default ForgotPassword;

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
        marginTop:30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 0
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
