import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ShoppingScreen } from "../ShoppingScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export const ShoppingStack =  () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="ShoppingScreen" component={ShoppingScreen}/>
        </Navigator>
    )
}