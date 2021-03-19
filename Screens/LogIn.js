import React from 'react';
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

// import { useTheme } from 'react-native-paper';

// import { AuthContext } from '../components/context';

// import Users from '../model/users';

const LogIn = ({ navigation }) => {

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
//  password
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
    
            });
        } else {
            setData({
                ...data,
                password: val,
                
            });
        }
    }

    // toggle
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F2808A' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}> WELCOME :)</Text>
                <Text style={styles.text_header_Slog}> Please Log In !</Text>

            </View>


            <Animatable.View
                animation="fadeInUpBig"
            
            style={styles.footer}>
               
                <SafeAreaView>
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


{/* pass */}

                <Text style={[styles.text_footer, {
                    // color: colors.text,
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={Expo.Constants.manifest.extra.COLOR}
                        size={20}
                    />
                    
                    <TextInput
                        placeholder="Password...."
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
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
                
                    <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <Text style={{ color: 'grey', marginTop: 10 }}>Forgot  Your Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
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
           );
};

export default LogIn;

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
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_header_Slog: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 30
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
        marginTop: 50
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
