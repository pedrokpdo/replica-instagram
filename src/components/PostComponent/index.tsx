import { AntDesign, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../colors";
import { AvatarComponent } from "../funcionais/AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Space } from "../funcionais/SpaceComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

const { width } = Dimensions.get('window')

export const PostComponent = ({ photo, name, post }) => {
    const navigation = useNavigation<any>()
    return (
        <View style={{ marginTop: 16 }}>
            <Space>
                <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}>
                    <Row bottom={1} style={{ alignItems: 'center' }}>
                        <AvatarComponent photo={photo} />
                        <Title style={{ marginLeft: 8 }}>{name}</Title>
                    </Row>
                </TouchableOpacity>
            </Space>
            <Image source={post} style={{ width: width, height: 300 }} />
            <Space top={1}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <AntDesign style={{ marginRight: 16 }} name='hearto' size={24} color={COLORS.text} />
                        <AntDesign style={{ marginRight: 16 }} name='message1' size={24} color={COLORS.text} />
                        <Entypo name='direction' size={24} color={COLORS.text} />
                    </Row>
                    <SimpleLineIcons name="flag" color={COLORS.text} size={24} />
                </Row>
            </Space>
            <Space top={1}>
                <Text>Curtido por mariuyspuit25 e outras pessoas</Text>
                <Text>Capital Inicial, Alo galera, temos beneficios exclusivos para voces no nosso projeto de NFTs...</Text>
            </Space>
        </View>
    )
}