import React from "react";
import { Dimensions, Image } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { FullCard } from "../../components/funcionais/FullCard";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { Header } from "../../components/Header";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SearchComponent } from "../../components/SearchComponent";
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

const { width } = Dimensions.get('window')

export const ShoppingScreen = () => {
    return (
        <ContainerComponent>
            <Space top={1}>
                <Header name={'Loja'} />
            </Space>
            <Space top={2}>
                <SearchComponent />
            </Space>
            <Space top={2}>
                <FullCard style={{ alignItems: 'center', backgroundColor: '#d1d1d140', padding: 8, borderRadius: 8 }}>
                    <Text>Videos</Text>
                </FullCard>
            </Space>
            <Row top={2} style={{ flexWrap: 'wrap' }}>
                <Image source={perfil2} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil3} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil4} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil5} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil6} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil2} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil3} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
                <Image source={perfil4} style={{ width: width / 2 - 4, margin: 2, resizeMode: 'cover', height: 150 }} />
            </Row>
        </ContainerComponent>
    )
}