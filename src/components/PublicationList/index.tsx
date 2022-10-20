import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, View } from "react-native";
import { mockPost } from "../../mockposts";
import { Row } from "../funcionais/RowComponent";
import _ from 'lodash'

const {width} = Dimensions.get('window')

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
            <Row top={1} style={{ flexWrap: 'wrap' }}>
                {_.map(mockPost, (item) => (
                    <Image source={item.photo} style={{  width: width / 3 - 4, resizeMode: 'cover', height: 100, margin: 2}}/>
                ))}
            </Row>
        </View>
    )
}