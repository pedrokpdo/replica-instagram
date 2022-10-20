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


export const ProfileScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <HeaderComponent />
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
            <Space top={2}>
                <Row style={{ justifyContent: 'space-around' }}>
                    <FullCard style={{ backgroundColor: '#cfcfcf58', padding: 8, marginRight: 16 }}>
                        <Row style={{ alignItems: 'center' }}>
                            <Text>Seguir</Text>
                        </Row>
                    </FullCard>
                    <FullCard style={{ backgroundColor: '#cfcfcf58', padding: 8, marginRight: 16 }}>
                        <Row style={{ alignItems: 'center' }}>
                            <Text>Mensagem</Text>
                        </Row>
                    </FullCard>
                    <FullCard style={{ backgroundColor: '#cfcfcf58', padding: 8, marginRight: 16 }}>
                        <Row style={{ alignItems: 'center' }}>
                            <Text>Email</Text>
                        </Row>
                    </FullCard>
                    <FullCard style={{ backgroundColor: '#cfcfcf58', padding: 8 }}>
                        <Ionicons name="person-add-outline" size={16} color={COLORS.text} />
                    </FullCard>

                </Row>
            </Space>
            <Space top={4}>
                <Row>
                    <StoryComponent photo={perfil6} name='GIGATON' />
                    <StoryComponent photo={perfil5} name='SHOP' />
                </Row>
            </Space>
            <View style={{ marginTop: 16 }}>
                <PublicationListComponent />
            </View>
        </ContainerComponent>
    )
}