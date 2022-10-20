import React from "react";
import { AvatarComponent } from "../../components/funcionais/AvatarComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
//@ts-ignore
import perfil5 from '../../assets/perfil5.webp'
//@ts-ignore
import perfil6 from '../../assets/perfil6.webp'
import { Row } from "../../components/funcionais/RowComponent";
import { View } from "react-native";
import { Title } from "../../components/funcionais/TitleComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { COLORS } from "../../colors";
import { FullCard } from "../../components/funcionais/FullCard";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StoryComponent } from "../../components/StoryComponent";
import { PublicationListComponent } from "../../components/PublicationList";
import { FindPersonComponent } from "../../components/FindPersonComponent";


export const MyProfileScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <HeaderComponent me />
            </Space>
            <Space top={2}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <AvatarComponent big photo={perfil5} />
                    <View style={{ alignItems: 'center' }}>
                        <Title>3.785</Title>
                        <Text>Puplicaç...</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Title>3,9m</Title>
                        <Text>Seguidores</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Title>387</Title>
                        <Text>Seguindo</Text>
                    </View>
                </Row>
            </Space>
            <Space top={2}>
                <Text>Pearl Jam</Text>
                <Text>Gigaton - Out Now. Listen to the new album:</Text>
                <Text style={{ color: COLORS.link }}>linkrt.ee/pearljam</Text>
                <Row top={1}>
                    <AvatarComponent />
                    <Text style={{ marginLeft: 8, width: 290 }}>Seguido por guilhermegoes8, tavares.daniel_ e outras 3 pessoas</Text>
                </Row>
            </Space>
            <Space top={4}>
                <FullCard style={{ backgroundColor: '#d1d1d13b', padding: 4, alignItems: 'center' }}>
                    <Title>Editar perfil</Title>
                </FullCard>
            </Space>
            <Space top={2}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Title>Encontrar pessoas</Title>
                    <Title style={{ color: COLORS.link }}>Ver tudo</Title>
                </Row>
                <Row top={2}>
                    <FindPersonComponent name="Matheus" followers="atelierdesaba e mais 9" photo={perfil5} />
                    <FindPersonComponent name="Maria" followers="atelierdesaba e mais 9" photo={perfil6} />
                    <FindPersonComponent name="Matheus" followers="atelierdesaba e mais 9" photo={perfil5} />
                    <FindPersonComponent name="Matheus" followers="atelierdesaba e mais 9" photo={perfil5} />
                </Row>
            </Space>
            <View style={{ marginTop: 16 }}>
                <PublicationListComponent />
            </View>
        </ContainerComponent>
    )
}