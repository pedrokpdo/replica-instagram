import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from 'react-native'
import { Space } from "../SpaceComponent";

interface Props {
    children?: any;
    back?: any;
}

export const ContainerComponent = ({ children, back }: Props) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {back ? (
                <Space top={1}>
                    <Ionicons name="arrow-back" size={24} color={'white'} />
                </Space>
            ) : null}
            {children}
        </ScrollView>
    )
}