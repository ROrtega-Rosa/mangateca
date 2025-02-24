import React, { useState } from "react";
import { ContainerForm, StyleButton, StyledForm } from "../../componentes/style";
import { Checkbox, Form, Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {insertarUsuario} from './funcionRegistro';

const FormRegistro = () => {
  const [form] = Form.useForm();
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '',
    email: '',
    password: ''
  })

  const handleChange = (value, e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [value]: e.target.value
    })
  }
  const handleSubmit = () => {
    form
    .validateFields()
      .then(() => {
        console.log("nuevo usuario", nuevoUsuario)
        insertarUsuario(nuevoUsuario);
        
        form.resetFields()
      }).catch((err) => {
        console.log(err)
      })
    
      
  }

  return (
    <ContainerForm>
      <StyledForm
        layout={'vertical'}
        form={form}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          style={{ fontWeight: "500" }}
          rules={[{ required: true, message: "Por favor ingrese el nombre" }]}
        >
          <Input
            prefix={<UserOutlined />}
            style={{ width: "400px" }}
            placeholder="Nombre"
            onChange={(e) => handleChange('nombre', e)} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          style={{ fontWeight: "500" }}
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
            style={{ width: "400px" }}
            placeholder="EjemploEmail@.com"
            onChange={(e) => handleChange("email", e)}
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
            placeholder="Contraseña"
            style={{ width: "400px" }}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e) => handleChange("password", e)}
          />
        </Form.Item>
          <Form.Item>
            <Link to={"/"}>Volver a Login</Link>
          </Form.Item>
        <Form.Item
          name="acuerdos"
          valuePropName="checked"
          rules={[
            { required: true, message: "Por favor acepta los acuerdos " },
          ]}
        >
          <Checkbox >
            Estoy de acuerdo con los terminos y condiciones
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <StyleButton type="primary" size="large" onClick={handleSubmit}>Registrar</StyleButton>
        </Form.Item>
      </StyledForm>
    </ContainerForm>
  )
}

export default FormRegistro;