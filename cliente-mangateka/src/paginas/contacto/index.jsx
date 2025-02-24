import React from "react";
import { Container, ContainerColumn, ContainerColumnMenu,  ContainerRow,  StyledTitle } from "../../componentes/style";
import MenuBar from "../../componentes/MenuBar";
import FormContacto from "./FormContacto";

const Contacto = () =>{
    return(
        <Container>
            <ContainerColumnMenu>
                <MenuBar></MenuBar>
            </ContainerColumnMenu>
            <ContainerColumn>
                <ContainerRow>
                    <StyledTitle>Contacto</StyledTitle>
                </ContainerRow>
              
                <ContainerRow>
                       <FormContacto></FormContacto> 
                </ContainerRow>
            </ContainerColumn>
            
        </Container>
    )
}

export default Contacto;