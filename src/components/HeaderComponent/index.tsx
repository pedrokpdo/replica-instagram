import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../../colors";
import { Row } from "../funcionais/RowComponent";
import { Title } from "../funcionais/TitleComponent";

export const HeaderComponent = () => {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <AntDesign name="arrowleft" size={24} color={COLORS.text} />
                <Row style={{ alignItems: 'center', marginLeft: 16 }}>
                    <Title>pedroh_telles</Title>
                    <AntDesign name="down" size={16} color={COLORS.text} />
                </Row>
            </Row>
            <Row>
                <AntDesign style={{ marginRight: 16 }} name="camera" size={24} color={COLORS.text} />
                <Ionicons name="add" size={24} color={COLORS.text} />
            </Row>

        </Row>
    )
}