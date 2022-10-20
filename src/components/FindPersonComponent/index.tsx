import React from "react";
import { View } from "react-native";
import { AvatarComponent } from "../funcionais/AvatarComponent";
import { Button } from "../funcionais/ButtonComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    photo?: any;
    followers?: string;
    name?: string;
}

export const FindPersonComponent = ({ photo, followers, name }: Props) => {
    return (
        <View style={{ width: 150, alignItems: 'center' }}>
            <AvatarComponent big photo={photo} />
            <Title>{name}</Title>
            <Text style={{ textAlign: 'center', color: '#d1d1d1' }}>Seguido por {followers}</Text>
            <Button top={1} title="Seguir" backgroundColor="#3cb9f3" color="#ffffff"/>
        </View>
    )
}