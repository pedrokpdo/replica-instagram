import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="HomeScreen" component={HomeScreen} />
            <Screen name="ProfileScreen" component={ProfileScreen} />
        </Navigator>
    )
}