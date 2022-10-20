import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ReelsScreen } from "../../screens/ReelsScreen";


const { Navigator, Screen } = createNativeStackNavigator()

export const ReelsStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="ReelsScreen" component={ReelsScreen} />
        </Navigator>
    )
}