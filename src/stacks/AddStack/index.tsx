import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AddScreen } from "../../screens/AddScreen";
import { HomeScreen } from "../../screens/HomeScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export const AddStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="AddScreen" component={AddScreen} />
        </Navigator>
    )
}