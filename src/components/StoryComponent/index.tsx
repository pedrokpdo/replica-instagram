import React from "react";
import { View } from "react-native";
import { AvatarComponent } from "../funcionais/AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const StoryComponent = ({ name, photo }) => {
    return (
        <Row>
            <View style={{ alignItems: 'center', marginRight: 16 }}>
                <AvatarComponent big photo={photo} />
                <Text top={.5}>{name}</Text>
            </View>
        </Row>
    )
}