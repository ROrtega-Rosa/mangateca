import React from "react";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Popconfirm } from 'antd';
import { StyleCard } from "../../componentes/style";
import { eliminarManga, mostrarUnManga } from "./funcionMangas";
import CardModal from "./CardModal";
const { Meta } = Card;

const CardManga = ({ item, setOpenModal, option, setOption, setListarUnManga,openCardModal, setOpenCardModal,listarUnManga }) => {

  const handleDelete = () => {
    eliminarManga(item.id)
  
  }

  const handleUpdate =()=>{

    setOpenModal(true)
    setOption(2)
    mostrarUnManga(setListarUnManga,item.id)

  }

  const handleCardModal = ()=>{
    setOpenCardModal(true)
    mostrarUnManga(setListarUnManga,item.id)
  }

  return (

    <StyleCard
      style={{
        width: 300,
        maxWidth: 200,

      }}

      cover={

        <img
          src={item.imagen}
          alt="Imagen del manga"

        />

      }
      actions={[
        <EditOutlined key="edit" onClick={handleUpdate}/>,
        <Popconfirm
          title="Eliminar registro"
          description="¿Seguro que desea eliminar este registro?"
          onConfirm={handleDelete}
          okText="Si"
          cancelText="No"
        >
          <DeleteOutlined key="delete" />
        </Popconfirm>,

        <EllipsisOutlined key="ellipsis" onClick={handleCardModal} />,
       
      ]}
    >
      <Meta
        title={item.titulo}
        description={item.autor}
      />
      <CardModal
        openCardModal={openCardModal}
        setOpenCardModal={setOpenCardModal}
        listarUnManga={listarUnManga}
      >
        
      </CardModal>
    </StyleCard>
    
  )
}

export default CardManga;