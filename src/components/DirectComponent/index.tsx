import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { AvatarComponent } from "../funcionais/AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const DirectComponent = ({time, photo, name}) => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
            <Row style={{ alignItems: 'center' }}>
                <Image source={photo} style={{ width: 50, height: 50, borderRadius: 999 }} />
                <View style={{ marginLeft: 16 }}>
                    <Title>{name}</Title>
                    <Text style={{ color: '#d1d1d1' }}>Visto há {time}</Text>
                </View>
            </Row>
            <AntDesign name="camerao" color={'gray'} size={24} />
        </Row>
    )
}