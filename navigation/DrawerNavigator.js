import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Perfil from "../screens/Perfil";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Produtos" component={TabNavigator}/>
            <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;