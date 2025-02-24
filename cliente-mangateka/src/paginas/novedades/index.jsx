import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Container, ContainerColumn, ContainerColumnMenu, StyledTitle, ContainerRow, FlexContainer } from "../../componentes/style";
import MenuBar from "../../componentes/MenuBar";
import { mostrarMangas } from "../main/funcionMain";
import CardNovedades from "./CardNovedades";
import { jwtDecode } from "jwt-decode";

const Novedades = () =>{
    const [listaManga, setListaManga] = useState([])
    const fecha = new Date();
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    useEffect(()=>{

        mostrarMangas(setListaManga)

    },[setListaManga])

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < listaManga.length - itemsPerPage) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const currentMangas = listaManga
                 .filter((item) => item.usuario_id === jwtDecode(localStorage.getItem("token")).id)
                 .filter((item)=>{
                    const date = new Date(item.fecha)
                    return fecha.getMonth() === date.getMonth()
                 })
                .slice(currentIndex, currentIndex + itemsPerPage); 

  return(
    <Container>
    <ContainerColumnMenu>
        <MenuBar></MenuBar>
    </ContainerColumnMenu>
    <ContainerColumn>
        <ContainerRow>
            <StyledTitle>Novedades del mes</StyledTitle>
        </ContainerRow>
        
        <FlexContainer>
            <LeftOutlined  style={{ fontSize: '24px', cursor: 'pointer' }} onClick={goToPrevious} />
            {
                currentMangas.map((item, index)=>{
                   return <CardNovedades key={index} item={item} />
                })
            }
            <RightOutlined  style={{ fontSize: '24px', cursor: 'pointer' }} onClick={goToNext}/>
        </FlexContainer>

    </ContainerColumn>
</Container>
  )
}

export default Novedades;