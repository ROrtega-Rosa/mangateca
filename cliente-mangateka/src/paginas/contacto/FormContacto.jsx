import React from "react";
import { StyleButton, StyledForm } from "../../componentes/style";
import { Input, Form } from "antd";
import {MailOutlined} from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea";

const FormContacto = () =>{

return(
    <StyledForm
        layout={'vertical'}
    >
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
          />
        </Form.Item>
        <Form.Item
            label="Asunto"
            name="asunto"
            style={{ fontWeight: "500" }}
            rules={[{ required: true, message: "Por favor introduce una descripción" }]}
          >
            <TextArea rows={4}  />
          </Form.Item>
        <Form.Item>
          <StyleButton type="primary" size="large" >Enviar</StyleButton>
        </Form.Item>

    </StyledForm>

)

}

export default FormContacto;