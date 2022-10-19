import React from "react";
import { Image } from "react-native";
import { Row } from "../funcionais/RowComponent";
//@ts-ignore
import headerinsta from '../../assets/headerinsta.png'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../colors";


export const MainHeaderComponent = () => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <Image source={headerinsta} style={{ width: 100, height: 90, resizeMode: 'center' }} />
                <AntDesign name="down" size={16} color={COLORS.text} />
            </Row>
            <Row style={{ alignItems: 'center' }}>
                <Ionicons style={{ marginRight: 16 }} name="add" size={24} color={COLORS.text} />
                <AntDesign style={{ marginRight: 16 }} name="hearto" size={24} color={COLORS.text} />
                <AntDesign style={{ marginRight: 0 }} name="message1" size={24} color={COLORS.text} />
            </Row>
        </Row>
    )
}