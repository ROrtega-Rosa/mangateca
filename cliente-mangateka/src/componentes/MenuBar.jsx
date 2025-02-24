import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import items from './items';
import { useNavigate } from 'react-router-dom';


const MenuBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleKey = (key) => {
        if (key === '/logout') {
            localStorage.removeItem('token');
            navigate('/')
        } else {
            navigate(key)
        }
    }
    return (
        <div
            style={{
                width: collapsed ? 80 : 256,
                height: '100vh', // Ocupa toda la pantalla
                overflow: 'auto', // Permite scroll si es necesario
                background: '#001529', // Fondo igual al tema oscuro
                padding: '16px',
            }}
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderBottom: "2px solid white",
                    paddingBottom: "20px",

                }}

            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: collapsed ? 80 : 100,
                        height: collapsed ? 80 : 100,
                        borderRadius: "50%",
                        backgroundColor: "#ff5733",
                        fontSize: "30px",
                    }}
                >
                   <p style={{color:"white", fontSize:"50px", fontWeight:"500"}}>
                    {jwtDecode(localStorage.getItem("token")).nombre.charAt(0)}
                    </p> 
                </div>
                {collapsed ?
                    null
                    :
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >

                        <p style={{ color: "white", fontSize:"20px", fontWeight:"bold",marginBottom: "2px" }}>
                            {jwtDecode(localStorage.getItem("token")).nombre}
                        </p>
                        <p style={{ color: "white" }}>{`@${jwtDecode(localStorage.getItem("token")).nombre}`}</p>


                    </div>
                }
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                onClick={({ key }) => handleKey(key)}
                style={{
                    fontSize: 20,
                    paddingTop:"20px"
                }}
            />

        </div>
    )
}

export default MenuBar