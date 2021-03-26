import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView, SafeAreaView } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
            
                 <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                     <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                     <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                     <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                     <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>

                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                     <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>

                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>
                    <View style={styles.cardMain} >
                        <Text> 8 </Text>
                    </View>

                

                   

                
               </View>
            </ScrollView>
            
         
     
        )
    }
}


const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:'row',
        flexWrap: "wrap",
        backgroundColor:'white',
        marginBottom: 10,
        height: '70%',
        justifyContent: "space-around",
    },
   cardMain:{
       backgroundColor:"green",
       width:'43%',
       height: 200,
       margin: 10,
       borderRadius:15,
    //    border:'1 solid green',
   },
//    cardHeader:{

//    },
//    cardBtn:{

//    }

})


