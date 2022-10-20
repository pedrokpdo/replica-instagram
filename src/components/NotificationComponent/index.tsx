import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

interface Props {
    photo?: any;
    name?: string;
    text?: string;
    time?: string;
    top?: number;
    bottom?: number;
    post?: any;

}

const { width } = Dimensions.get('window')

export const NotificationComponent = ({ photo, name, text, time, top, bottom, post }: Props) => {
    return (
        <Row top={top} bottom={bottom} style={{ justifyContent: 'space-between' }}>
            <Row>
                <Image source={photo} style={{ width: 55, height: 55, borderRadius: 1888 }} />
                <View style={{ width: width / 2 + 20, marginLeft: 16 }}>
                    <Title>{name}</Title>
                    <Text style={{ lineHeight: 24 }}>{text} <Text style={{ color: '#a7a7a7' }}>há {time}</Text></Text>
                </View>
            </Row>
            {post ? (
                <Image source={post} style={{ width: 60, height: 60, alignSelf: 'center' }} />
            ) : (
                <Title style={{ alignSelf: 'center' }}>Seguindo</Title>
            )}
        </Row>
    )
}