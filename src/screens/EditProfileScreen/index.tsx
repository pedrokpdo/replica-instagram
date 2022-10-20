import React from "react";
import { AvatarComponent } from "../../components/funcionais/AvatarComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Header } from "../../components/Header";
//@ts-ignore
import perfil2 from '../../assets/perfil2.jpg'
//@ts-ignore
import perfil3 from '../../assets/perfil3.jpg'
//@ts-ignore
import perfil4 from '../../assets/perfil4.jpg'
//@ts-ignore
import perfil5 from '../../assets/perfil5.webp'
//@ts-ignore
import perfil6 from '../../assets/perfil6.webp'
import { Image, View } from "react-native";
import { Title } from "../../components/funcionais/TitleComponent";
import { COLORS } from "../../colors";
import { LabelComponent } from "../../components/funcionais/LabelComponent";
import { Divider } from "../../components/funcionais/Divider";


export const EditProfileScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <Header name={'Editar perfil'} />
            </Space>
            <Space top={4}>
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 10000 }} source={perfil2} />
                    <Title top={2} style={{ color: COLORS.link, fontSize: 22 }}>Alterar foto do perfil</Title>
                </View>
            </Space>
            <Space top={2}>
                <LabelComponent text={'Nome'} />
                <Title>Pedro Henrique</Title>
                <Divider top={1} bottom={1} />
            </Space>
            <Space>
                <LabelComponent text={'Nome de usuário'} />
                <Title>pedroh_telles</Title>
                <Divider top={1} bottom={1} />
            </Space>
            <Space>
                <LabelComponent text={'bio'} />
                <Title>@paulx.reis :3</Title>
                <Divider top={1} bottom={1} />
            </Space>
            <Space>
                <Title>Adicionar link</Title>
            </Space>
            <Space top={2}>
                <Title style={{ color: COLORS.link }}>Mudar para conta profissional</Title>
                <Title top={2} style={{ color: COLORS.link }}>Criar avatar</Title>
                <Title top={2} style={{ color: COLORS.link }}>Configurações de informações pessoais</Title>
            </Space>
        </ContainerComponent>
    )
}