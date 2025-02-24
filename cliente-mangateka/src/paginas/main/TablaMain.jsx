import React from 'react';
import { columns } from './columns';
import { StyledTable } from '../../componentes/style';

const TablaMain = ({currentManga})=>{

    return(
        <StyledTable
        columns={columns} 
        dataSource={currentManga} 
        pagination={{ pageSize: 5 }}
        style={{width:"100%", padding:"5%"}}

         />
    )
}

export default TablaMain;