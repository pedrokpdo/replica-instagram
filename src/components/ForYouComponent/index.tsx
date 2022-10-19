import React from "react";
import { Image, View } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const ForYouComponent = ({name, photo}) => {
    return (
        <View style={{ alignItems: 'center', marginRight: 16  }}>
            <Image source={photo} style={{ width: 100, height: 100, borderRadius: 9999 }}/>
            <Title>{name}</Title>
        </View>
    )
}