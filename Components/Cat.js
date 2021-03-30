import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            activeIndex: false,
            catId:5,
        }
    }

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
                        this.setState({ categories: JSON.parse(res).data })
                    });


            } catch (e) {
                console.log(e)
            }
        }
        request();
    }

    CatPress = (id) => {
        this.setState({ catId: id })
        this.props.catSearch(id)

    }

    render() {

        return (
            <SafeAreaView style={styles.main}>

                <Text style={styles.title} >Filter By Category: </Text>

                <View style={styles.catContainer}>
                    <ScrollView horizontal={true} >

                        {this.state.categories.length > 0 ?

                            this.state.categories.map((data) => (
                                (data.id) == this.state.catId ? (
                                    <View>
                                        {data.id == 5 ? 
                                            <TouchableOpacity
                                                onPress={() => { this.CatPress(5) }}
                                            >
                                                <View style={styles.categoryContainer} >

                                                    <View style={styles.categoryIcon}>
                                                        <MaterialCommunityIcons name={data.icon_name} size={30} color={Expo.Constants.manifest.extra.COLOR} />
                                                    </View>

                                                    <Text style={styles.categoryBtnTxt2}>{data.name}</Text>
                                                </View>
                                            </TouchableOpacity>

                                            :
                                            <TouchableOpacity
                                            onPress = { () => { this.CatPress(data.id)}}
                                        >
                                        <View style={styles.categoryContainer} >

                                            <View style={styles.categoryIcon}>
                                                <MaterialCommunityIcons name={data.icon_name} size={30} color={Expo.Constants.manifest.extra.COLOR} />
                                            </View>

                                            <Text style={styles.categoryBtnTxt2}>{data.name}</Text>
                                        </View>
                                        </TouchableOpacity>
                                        }
                                    </View>





                                ) :

                                    <View>
                        <TouchableOpacity
                            onPress={() => { this.CatPress(data.id) }}
                        >
                            <View style={styles.categoryContainer} >

                                <View style={styles.categoryIcon}>
                                    <MaterialCommunityIcons name={data.icon_name} size={30} color='black' />
                                </View>

                                <Text style={styles.categoryBtnTxt}>{data.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                            ))
                            :
                            <Text></Text>
                        }

                    </ScrollView>
                </View>



            </SafeAreaView >
        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10,
    },
    catContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    categoryContainer: {
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
        padding:10,
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 5,
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        width: 80,
        height: 18,
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    categoryBtnTxt2: {
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 5,
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        width: 80,
        height: 18,
        borderRadius: 50,
        backgroundColor: Expo.Constants.manifest.extra.COLOR,
    },
    main: {
        backgroundColor: 'white'
    }


})

