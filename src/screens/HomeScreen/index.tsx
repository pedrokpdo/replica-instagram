import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";
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
import { PostComponent } from "../../components/PostComponent";

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <Space top={-2}>
                <MainHeaderComponent />
            </Space>
            <Space>
                <Row>
                    <StoryComponent name={'Seu story'} photo={perfil2} />
                    <StoryComponent name={'Seu story'} photo={perfil3} />
                    <StoryComponent name={'Seu story'} photo={perfil4} />
                    <StoryComponent name={'Seu story'} photo={perfil5} />
                    <StoryComponent name={'Seu story'} photo={perfil6} />
                </Row>
            </Space>
            <PostComponent name={'Pearl Jam'} photo={perfil4} post={perfil2} />
        </ContainerComponent>
    )
}