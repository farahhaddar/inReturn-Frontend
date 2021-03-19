import * as React from 'react';
import { Text, View } from 'react-native';
import Recived from "../Screens/RecivedOffers";
import Sent from "../Screens/SentOffers";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { render } from 'react-dom';

const TabTop = createMaterialTopTabNavigator();


const TopTabNav = () => {
    return (
        <TabTop.Navigator
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: 'black',
                },
            }} >
            <TabTop.Screen name="Recived" component={Recived} />
            <TabTop.Screen name="Sent" component={Sent} />
        </TabTop.Navigator>
    );
};
export { TopTabNav}
    
        

