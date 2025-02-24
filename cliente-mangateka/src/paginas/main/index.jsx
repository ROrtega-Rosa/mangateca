import React, { useEffect, useState } from "react";
import MenuBar from "../../componentes/MenuBar";
import { Container, ContainerColumn, ContainerColumnMenu, StyledTitle, ContainerRow } from "../../componentes/style";
import TablaMain from "./TablaMain";
import { mostrarMangas } from './funcionMain';
import { jwtDecode } from "jwt-decode";
import GraphicCollection from "./GraphicCollection";
import GraphicEditorial from "./GraphicEditorial";
import CardTotal from "./CardTotal";


const Main = () => {

    const [listaManga, setListaManga]= useState([])

    useEffect(()=>{

        mostrarMangas(setListaManga)
    
      },[setListaManga])
    
      const currentManga = listaManga.filter((item)=>item.usuario_id === jwtDecode(localStorage.getItem("token")).id)
    
    return (
        <Container>
            <ContainerColumnMenu>
                <MenuBar></MenuBar>
            </ContainerColumnMenu>
            <ContainerColumn>
                <ContainerRow>
                    <StyledTitle>Comiteca</StyledTitle>
                </ContainerRow>
                <ContainerRow>
                   <GraphicCollection currentManga={currentManga}></GraphicCollection>
                   <CardTotal currentManga={currentManga}></CardTotal>
                   <GraphicEditorial currentManga={currentManga}></GraphicEditorial>
                </ContainerRow>
                <ContainerRow>
                    <TablaMain currentManga={currentManga}></TablaMain>
                </ContainerRow>
            </ContainerColumn>
        </Container>
    )
}

export default Main;