import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native";
import { COLORS } from "../../colors";
import { Row } from "../funcionais/RowComponent";

export const SearchComponent = () => {
    return (
        <Row style={{ flex: 1, backgroundColor: '#d1d1d17f', alignItems: 'center', borderRadius: 8 }}>
            <AntDesign name="search1" color={COLORS.text} size={24} style={{ marginLeft: 16 }} />
            <TextInput placeholder="Pesquisar" style={{ padding: 4, marginLeft: 8 }} />
        </Row>
    )
}