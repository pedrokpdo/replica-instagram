import React from "react";
import { View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { ReelsComponent } from "../../components/ReelsComponent";
//@ts-ignore
import perfil2 from '../../assets/perfil2.jpg'
//@ts-ignore
import perfil3 from '../../assets/perfil3.jpg'
//@ts-ignore
import perfil4 from '../../assets/perfil4.jpg'


export const ReelsScreen = () => {
    return (
        <ContainerComponent>
            <ReelsComponent name={'Fatos Desconhecidos'} photo={perfil2} describe='Remix com cretinozuero' message={'Massagem é tratamento, terapia e cura'} music='Dj Dark, Mentol . Mood (Radio Edit)'/>
            <ReelsComponent name={'Conhecidos Fatos'} photo={perfil3} describe='Remix com cretinozuero' message={'Massagem é tratamento, terapia e cura'} music='Dj Dark, Mentol . Mood (Radio Edit)'/>
            <ReelsComponent name={'Unknow Facts'} photo={perfil4} describe='Remix com cretinozuero' message={'Massagem é tratamento, terapia e cura'} music='Dj Dark, Mentol . Mood (Radio Edit)'/>
        </ContainerComponent>
    )
}