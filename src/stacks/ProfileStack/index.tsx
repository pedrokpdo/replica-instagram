import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { EditProfileScreen } from "../../screens/EditProfileScreen";
import { MyProfileScreen } from "../../screens/MyProfileScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export const ProfileStack =  () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="MyProfileScreen" component={MyProfileScreen}/>
            <Screen name="EditProfileScreen" component={EditProfileScreen}/>
        </Navigator>
    )
}