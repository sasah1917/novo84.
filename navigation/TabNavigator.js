import React from "react";
import { StyleSheet } from "react-native";
//import { createMaterialBottomTabNavigator } from "react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import Produtos from "../screens/Produtos"
import Posts from "../screens/Posts";
import { TabBarIcons } from "react-native";

const ButtomTabNavigator = () => {
    return(
        <Tab.Navigator
        screensOptions={({ route }) => ({
            tabBarIcon: ({ focused, color,size}) => {
                let iconName;
                if(route.name === 'Produtos'){
                    iconName = focused
                    ?'book'
                    :'book-outline';
                } else if(route.name === 'Posts'){
                    iconName = focused ?'create' : 'create-outlne'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}
        TabBarOptions={{
            activeTintColor:'Tomato',
            inactiveTintColor: 'Gray'
        }}>
            
        <Tab.Screen name="Produtos" component={Produtos}/>
        <Tab.Screen name="Posts" component={Posts}/>
        
        </Tab.Navigator>
    )
}
export default ButtomTabNavigator;