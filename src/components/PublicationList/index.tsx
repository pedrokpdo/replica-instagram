import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";

export const PublicationListComponent = () => {
    return (
        <View>
            <Row>
                <View style={{ alignItems: 'center', flex: 1, borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <Ionicons name="ios-reorder-four" size={24} color={'black'} />
                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Ionicons name="ios-reorder-four" size={24} color={'black'} />
                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Ionicons name="ios-reorder-four" size={24} color={'black'} />
                </View>
            </Row>
        </View>
    )
}