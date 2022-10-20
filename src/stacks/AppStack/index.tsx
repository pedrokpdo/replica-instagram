import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { COLORS } from "../../colors";
import { AvatarComponent } from "../../components/funcionais/AvatarComponent";
import { AddStack } from "../AddStack";
import { ExploreStack } from "../ExploreStack";
import { HomeStack } from "../HomeStack";
import { ProfileStack } from "../ProfileStack";
import { ShoppingStack } from "../ShoppingStack";
//@ts-ignore
import perfil2 from '../../assets/perfil2.jpg'
import { Image, View } from "react-native";



const { Navigator, Screen } = createBottomTabNavigator()

export const AppStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false, title: '', tabBarStyle: { backgroundColor: 'white' } }}>
            <Screen name="HomeStack" component={HomeStack} options={{
                tabBarIcon: () => (
                    <Ionicons style={{ marginBottom: -10 }} name="home" size={24} color={COLORS.text} />
                )
            }} />
            <Screen name="ExploreStack" component={ExploreStack} options={{
                tabBarIcon: () => (
                    <Ionicons style={{ marginBottom: -10 }} name="search" size={24} color={COLORS.text} />
                )
            }} />
            <Screen name="AddStack" component={AddStack} options={{
                tabBarIcon: () => (
                    <Ionicons style={{ marginBottom: -10 }} name="play" size={24} color={COLORS.text} />
                )
            }} />
            <Screen name="ShoppingStack" component={ShoppingStack} options={{
                tabBarIcon: () => (
                    <AntDesign style={{ marginBottom: -10 }} name="shoppingcart" size={24} color={COLORS.text} />
                )
            }} />
            <Screen name="ProfileStack" component={ProfileStack} options={{
                tabBarIcon: () => (
                    <View style={{ marginBottom: -10 }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 999 }} source={perfil2} />
                    </View>
                )
            }} />
        </Navigator>
    )
}