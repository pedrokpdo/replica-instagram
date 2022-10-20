import React from "react";
import { SearchBar } from "react-native-screens";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SearchComponent } from "../../components/SearchComponent";
import { StoryComponent } from "../../components/StoryComponent";
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
import { Title } from "../../components/funcionais/TitleComponent";
import { COLORS } from "../../colors";
import { DirectComponent } from "../../components/DirectComponent";

export const DirectScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <HeaderComponent me />
            </Space>
            <Space top={2}>
                <SearchComponent />
            </Space>
            <Space>
                <Row top={2}>
                    <StoryComponent name={'Guilherme'} photo={perfil2} />
                    <StoryComponent name={'Guilherme'} photo={perfil3} />
                    <StoryComponent name={'Guilherme'} photo={perfil4} />
                    <StoryComponent name={'Guilherme'} photo={perfil5} />
                    <StoryComponent name={'Guilherme'} photo={perfil6} />
                </Row>
            </Space>
            <Space top={2}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title>Mensagens</Title>
                    <Title style={{ color: COLORS.link }}>Solicitações</Title>
                </Row>
                <DirectComponent photo={perfil2} time={'12min'} name='Maria Juana'/>
                <DirectComponent photo={perfil3} time={'25min'} name='Antonia Dias'/>
                <DirectComponent photo={perfil4} time={'1h'} name='Jurema Carvalho'/>
            </Space>
        </ContainerComponent>
    )
}