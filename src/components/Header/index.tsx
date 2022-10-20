import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../../colors";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const Header = ({name}) => {
    return (
        <Row style={{ alignItems: 'center' }}>
            <AntDesign name="arrowleft" color={COLORS.text} size={24}/>
            <Title style={{ fontSize: 24, marginLeft: 16 }}>{name}</Title>
        </Row>
    )
}