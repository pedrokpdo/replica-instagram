import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Header } from "../../components/Header";
import { Image, View } from "react-native";
import { Title } from "../../components/funcionais/TitleComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { NotificationComponent } from "../../components/NotificationComponent";
//@ts-ignore
import perfil2 from '../../assets/perfil2.jpg'
//@ts-ignore
import perfil3 from '../../assets/perfil3.jpg'




export const NotificationListScreen = () => {
    return (
        <ContainerComponent>
            <Space top={1}>
                <Header name='Notificações' />
            </Space>
            <Space top={2}>
                <Row style={{ alignItems: 'center' }}>
                    <Image source={perfil2} style={{ width: 55, height: 55, borderRadius: 1888 }} />
                    <View style={{ marginLeft: 16 }}>
                        <Title>Solicitações para seguir</Title>
                        <Text style={{ color: '#a7a7a7' }}>Aprove ou ignore Solicitações</Text>
                    </View>
                </Row>
            </Space>
            <Space top={2}>
                <Title>Novo</Title>
                <NotificationComponent post={perfil2} top={1} bottom={1} photo={perfil3} name={'Maria Antonieta'} text={'Ateliar e pearl jam recentemente compartilharam novos videos do Reels.'} time='18h' />
                <NotificationComponent post={perfil3} top={1} bottom={1} photo={perfil2} name={'Maria Antonieta'} text={'Ateliar e pearl jam recentemente compartilharam novos videos do Reels.'} time='18h' />
                <NotificationComponent top={1} bottom={1} photo={perfil2} name={'Maria'} text={'Começou a seguir você.'} time='18h' />
            </Space>
            <Space top={2}>
                <Title>Ontem</Title>
                <NotificationComponent post={perfil2} top={1} bottom={1} photo={perfil3} name={'Maria Antonieta'} text={'Ateliar e pearl jam recentemente compartilharam novos videos do Reels.'} time='18h' />
                <NotificationComponent post={perfil3} top={1} bottom={1} photo={perfil2} name={'Maria Antonieta'} text={'Ateliar e pearl jam recentemente compartilharam novos videos do Reels.'} time='18h' />
                <NotificationComponent top={1} bottom={1} photo={perfil2} name={'Maria'} text={'Começou a seguir você.'} time='18h' />
            </Space>
        </ContainerComponent>
    )
}