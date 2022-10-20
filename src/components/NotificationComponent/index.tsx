import React from "react";
import { Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const NotificationComponent = ({ photo, name, text, time, top, bottom, follow, post }) => {
    return (
        <Row top={top} bottom={bottom} style={{  }}>
            <Image source={photo} style={{ width: 55, height: 55, borderRadius: 1888 }} />
            <View style={{ width: 180, marginLeft: 16 }}>
                <Title>{name}</Title>
                <Text style={{ }}>{text} <Text style={{ color: '#a7a7a7' }}>há {time}</Text></Text>
            </View>
            {follow ? (
                <Title style={{ alignSelf: 'center' }}>Seguindo</Title>
            ): (
                <Image source={post} style={{ width: 100, height: 100}}/>
            )}
        </Row>
    )
}