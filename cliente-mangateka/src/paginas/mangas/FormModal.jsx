import React, { useEffect } from "react";

import { Form, Modal, Input, Select, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import { ContainerForm } from "../../componentes/style";
import TextArea from "antd/es/input/TextArea";
import { actualizarManga, insertarManga } from "./funcionMangas";

const FormModal = ({ openModal, setOpenModal, option, setOption, nuevoManga, setNuevoManga,listarUnManga }) => {
  const [form] = Form.useForm();


  useEffect(() => {
    if ((openModal && option === 2 )) {
      const mangaData = listarUnManga[0];

      const formValues = {
        titulo: mangaData?.titulo ,
        autor: mangaData?.autor ,
        editorial: mangaData?.editorial ,
        coleccion: mangaData?.coleccion ,
        descripcion: mangaData?.descripcion ,
        imagen: mangaData?.imagen ? [{ url: mangaData.imagen }] : [],
      };
      
      form.setFieldsValue(formValues);
      setNuevoManga(formValues);
    }
  }, [openModal, listarUnManga, form, option, setNuevoManga]);


  const handleChange = (valor, e) => {

    if (valor === 'coleccion') {
      setNuevoManga({
        ...nuevoManga,
        [valor]: e
      })
    } else if(valor==='imagen'){
    
      let file = e.fileList[0]?.originFileObj; // Asegurarte de que sea fileList

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setNuevoManga({
            ...nuevoManga,
            [valor]:[{url:reader.result}] , // Guardar imagen en base64
          });}
        };
    }else {
      setNuevoManga({
        ...nuevoManga,
        [valor]: e.target.value,

      })
    }
  }
  const handleCancel = () => {
    setOpenModal(false)
    setOption(-1)
    form.resetFields()
  }

  return (
    <Modal
      open={openModal}
      onCancel={handleCancel}
      onOk={() => {

        switch (option) {
          case 1:
            form
              .validateFields()
              .then(() => {
                insertarManga(nuevoManga)
                form.resetFields()
              })
              .catch((err) => {
                console.log(err)
              })
            break;
          case 2:
            console.log("actualizar",nuevoManga.imagen)
            console.log("listarUnManga",listarUnManga[0].id)
            actualizarManga(nuevoManga, listarUnManga[0].id)
            break;
          default:
            console.log("esa opción no existe")
            break;
        }
      }}
      okButtonProps={{
        style: { backgroundColor: " #ff5733", borderColor: " #ff5733" },
      }}
      okText={
        option === 1 ? "Enviar" : "Actualizar"
      }
    >
      <ContainerForm>
        <Form
          layout={'vertical'}
          initialValues={{
            remember: true,
          }}
          form={form}
        >
          <Form.Item
            label="Imagen"
            name="imagen"
            valuePropName="fileList"
            style={{ fontWeight: "500" }}
            //rules={[{ required: true, message: "Por favor ingrese la imagen" }]}
            getValueFromEvent={(e)=>handleChange("imagen",e)}

          >
            <Upload 
            action="/upload.do" 
            valuePropName="fileList"
            listType="picture-card"
            maxCount={1}
            beforeUpload={() => false}  
            >
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Titulo"
            name="titulo"
            style={{ fontWeight: "500" }}
            rules={[{ required: true, message: "Por favor ingrese el titulo" }]}
          >
            <Input
              style={{ width: "400px" }}
              placeholder="titulo"
              onChange={(e) => handleChange("titulo", e)}
            />
          </Form.Item>
          <Form.Item
            label="Autor"
            name="autor"
            style={{ fontWeight: "500" }}
            rules={[{ required: true, message: "Por favor ingrese el nombre del autor" }]}
          >
            <Input
              style={{ width: "400px" }}
              placeholder="autor"
              onChange={(e) => handleChange("autor", e)}
            />
          </Form.Item>
          <Form.Item
            label="Editorial"
            name="editorial"
            style={{ fontWeight: "500" }}
            rules={[{ required: true, message: "Por favor ingrese la editorial" }]}
          >
            <Input
              style={{ width: "400px" }}
              placeholder="editorial"
              onChange={(e) => handleChange("editorial", e)}
            />
          </Form.Item>
          <Form.Item
            label="Coleccion"
            name="coleccion"
            style={{ fontWeight: "500" }}
            rules={[{ required: true, message: "Por favor selecciona una colección" }]}
          >
            <Select placeholder="selecciona" onChange={(e) => handleChange("coleccion", e)} >
              <Select.Option value="shojo" >Shojo</Select.Option>
              <Select.Option value="josei" >Josei</Select.Option>
              <Select.Option value="shonen" >Shonen</Select.Option>
              <Select.Option value="seinen" >Seinen</Select.Option>
              <Select.Option value="kodomo" >Kodomo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Descripcion"
            name="descripcion"
            style={{ fontWeight: "500" }}
            rules={[{ required: true, message: "Por favor introduce una descripción" }]}
          >
            <TextArea rows={4} onChange={(e) => handleChange("descripcion", e)} />
          </Form.Item>


        </Form>
      </ContainerForm>

    </Modal>
  )
}
export default FormModal;