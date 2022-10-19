import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Title } from '../TitleComponent'

interface Props {
    photo?: any;
    big?: any;
}

export const AvatarComponent = ({ photo, big = false }: Props) => {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} style={{ alignItems: 'center' }}>
            {photo ? (
                <Image source={photo} style={{ width: big ? 60 : 36, height: big ? 60 : 36, borderRadius: 999 }} />
            ) : (
                <View style={{ backgroundColor: 'orange', width: big ? 60 : 36, height: big ? 60 : 36, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Title style={{ color: 'black', fontWeight: 'bold', fontSize: big ? 24 : null }}>P</Title>
                </View>
            )}
        </TouchableOpacity>
    )
}