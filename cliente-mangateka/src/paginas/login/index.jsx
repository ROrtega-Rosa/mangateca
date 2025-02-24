import React from "react";
import { ContainerRegister, StyledTitle } from "../../componentes/style";
import FormLogin from "./FormLogin";

const Login = ()=>{

    return (
        <ContainerRegister>
        <StyledTitle>Iniciar Sesión</StyledTitle>
          <FormLogin></FormLogin>
      </ContainerRegister>
    )
}

export default Login;