import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AddStack } from "../AddStack";
import { ExploreStack } from "../ExploreStack";
import { HomeStack } from "../HomeStack";
import { ProfileStack } from "../ProfileStack";
import { ShoppingStack } from "../ShoppingStack";

const { Navigator, Screen } = createBottomTabNavigator()

export const AppStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false, title: '' }}>
            <Screen name="HomeStack" component={HomeStack} />
            <Screen name="ExploreStack" component={ExploreStack} />
            <Screen name="AddStack" component={AddStack} />
            <Screen name="ShoppingStack" component={ShoppingStack} />
            <Screen name="ProfileStack" component={ProfileStack} />
        </Navigator>
    )
}