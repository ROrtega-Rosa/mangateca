import { Modal,Card } from "antd";
import React from "react";

const { Meta } = Card;

const CardModal = ({ openCardModal, setOpenCardModal, listarUnManga }) => {

   
    const handleCancel = () => {
        setOpenCardModal(false)
    }

    return (
        <Modal
            open={openCardModal}
            onCancel={handleCancel}
            centered 
            footer={null} 
        >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card
                style={{  
                    width: "80%",
                }}

                cover={

                    <img
                       src={listarUnManga[0]?.imagen}
                        alt="Imagen del manga"

                    />

                }

            >
                <Meta
                    title={listarUnManga[0]?.titulo}
                    
                />
                 <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                        <li><strong>Autor:</strong> {listarUnManga[0]?.autor}</li>
                        <li><strong>Editorial:</strong> {listarUnManga[0]?.editorial}</li>
                        <li><strong>Colección:</strong> {listarUnManga[0]?.coleccion}</li>
                        <li><strong>Descripción:</strong> {listarUnManga[0]?.descripcion}</li>
                    </ul>

            </Card>
            </div>
        </Modal>
    )

}

export default CardModal;