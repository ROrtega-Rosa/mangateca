import React, { useState } from "react";
import { ContainerForm, StyleButton, StyledForm } from "../../componentes/style";
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { insertarLogin } from "./funcionLogin";

const FormLogin = () => {

  const [form] = Form.useForm();
  const [login, setLogin]= useState({
    email:'',
    password:''
  })

  const handleChange=(value, e)=>{
    setLogin({
      ...login,
      [value]:e.target.value
    })
  }
  const handleSubmit=()=>{
    form
    .validateFields()
    .then(()=>{
      console.log("login", login)
      insertarLogin(login)
      form.resetFields()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <ContainerForm>
      <StyledForm
        layout={'vertical'}
        form={form}

      >

        <Form.Item 
        label="Email" 
        style={{ fontWeight: "500" }}
         name="email"
         rules={[
          {
            required: true,
            type: 'email',
            message: "Por favor introduce el email",
          },
        ]}
         >
          <Input 
          prefix={<MailOutlined />} 
          type='email' style={{ width: "400px" }} 
          placeholder="EjemploEmail@.com" 
          onChange={(e)=>handleChange("email", e)}
          />
        </Form.Item>
        <Form.Item 
        label="Contraseña" 
        style={{ fontWeight: "500" }} 
        name="password"
        rules={[
          { required: true, message: "Por favor ingrese la contraseña " },
        ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Contraseña" style={{ width: "400px" }}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e)=>handleChange("password", e)}
          />
        </Form.Item>

        <Form.Item>
          Si no estas registrado haz clic <Link to="/registro">aqui</Link>
        </Form.Item>
        <Form.Item>
          <StyleButton type="primary" size="large" onClick={handleSubmit}>Entrar</StyleButton>
        </Form.Item>
      </StyledForm>
    </ContainerForm>
  )
}

export default FormLogin;