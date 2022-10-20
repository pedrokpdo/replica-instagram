import { AntDesign, Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { COLORS } from "../../colors";
import { AvatarComponent } from "../funcionais/AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Space } from "../funcionais/SpaceComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

const { width, height } = Dimensions.get('window')

export const ReelsComponent = ({ photo, name, describe, message, music }) => {
    return (
        <ImageBackground source={photo} style={{ width: width, height: height - 70 }}>
            <Space top={2}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title style={{ color: COLORS.text_inverted, fontSize: 24 }}>Reels</Title>
                    <AntDesign name="camerao" size={24} color={COLORS.text_inverted} />
                </Row>
                <View style={{ alignSelf: 'flex-end', marginTop: 100, alignItems: 'center', justifyContent: 'space-around', height: height / 2 }}>
                    <AntDesign style={{ marginTop: 24 }} name={'like1'} size={32} color={COLORS.text_inverted} />
                    <AntDesign style={{ marginTop: 24 }} name={'dislike1'} size={32} color={COLORS.text_inverted} />
                    <AntDesign style={{ marginTop: 24 }} name={'message1'} size={32} color={COLORS.text_inverted} />
                    <Entypo style={{ marginTop: 24 }} name={'direction'} size={32} color={COLORS.text_inverted} />
                    <SimpleLineIcons style={{ marginTop: 24 }} name={'options-vertical'} size={24} color={COLORS.text_inverted} />
                </View>
            </Space>
            <Space>
            </Space>
            <View style={{ position: 'absolute', bottom: 0, margin: 16 }}>
                <Row>
                    <AvatarComponent photo={photo} />
                    <Title style={{ color: COLORS.text_inverted }}>{name}</Title>
                </Row>
                <Text style={{ color: COLORS.text_inverted }}>{describe}</Text>
                <Title top={1} style={{ color: COLORS.text_inverted }}>{message}</Title>
                <Title top={1} style={{ color: COLORS.text_inverted }}>{music}</Title>
            </View>
        </ImageBackground>
    )
}