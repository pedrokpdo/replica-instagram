import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ExploreScreen } from "../../screens/ExploreScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export const ExploreStack =  () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="ExploreScreen" component={ExploreScreen}/>
        </Navigator>
    )
}