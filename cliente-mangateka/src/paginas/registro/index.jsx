import React from "react";
import {  ContainerRegister, StyledTitle } from "../../componentes/style";
import FormRegistro from "./FormRegistro";


const Registro = ()=>{

    return (
        <ContainerRegister>
          <StyledTitle>Nuevo Registro</StyledTitle>
            <FormRegistro></FormRegistro>
        </ContainerRegister>
    )
}

export default Registro;