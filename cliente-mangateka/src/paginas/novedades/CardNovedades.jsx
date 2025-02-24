import React from "react";
import { StyleCard } from "../../componentes/style";
import Meta from "antd/es/card/Meta";


const CardNovedades = ({item})=>{

  const fecha = new Date(item.fecha);
    return(
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
       
      >
        <Meta
          title={item.titulo}
          description={item.autor +" " + fecha.toLocaleDateString()}
         
        />
       
      </StyleCard>
      
    )

}

export default CardNovedades;