import React, { useEffect, useState } from "react";
import { Container, ContainerColumn, ContainerColumnMenu, StyledTitle, ContainerRow, StyleButton, FlexContainer, StyleSearch } from "../../componentes/style";
import MenuBar from "../../componentes/MenuBar";
import FormModal from "./FormModal";
import { FormOutlined, LeftOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import { mostrarMangas } from "./funcionMangas";
import CardManga from "./CardManga";
import { jwtDecode } from "jwt-decode";
import { Input } from "antd";

const Mangas = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openCardModal, setOpenCardModal]= useState(false)
    const [search, setSearch]= useState("")
    const [option, setOption] = useState(0)
    const [listaManga, setListaManga] = useState([])
    const [listarUnManga, setListarUnManga] = useState({
        imagen: [],
        titulo: "",
        autor: "",
        coleccion: "",
        descripcion: "",
        editorial: "",
    })
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const [nuevoManga, setNuevoManga] = useState({
        imagen: [],
        titulo: "",
        autor: "",
        coleccion: "",
        descripcion: "",
        editorial: "",
    })


    const handleModal = () => {
        setOpenModal(true)
        setOption(1)
    }
    const handleSearch = (e)=>{
        setSearch(e.target.value)
        filterManga(search)
    }

    const filterManga = (search) =>{
        if(search !== ""){
           return  listaManga
            .filter((item) => item.usuario_id === jwtDecode(localStorage.getItem("token")).id)
            .filter((item)=> item.titulo.toLowerCase().includes(search.toLowerCase()) || 
            item.autor.toLowerCase().includes(search.toLowerCase()))
            .slice(currentIndex, currentIndex + itemsPerPage);
    
        }else{
            return listaManga
             .filter((item) => item.usuario_id === jwtDecode(localStorage.getItem("token")).id)
            .slice(currentIndex, currentIndex + itemsPerPage);
     
        }
    }

    console.log("filtrar", filterManga(search) )
    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < listaManga.length - itemsPerPage) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    useEffect(() => {

        mostrarMangas(setListaManga)


    }, [openModal])


       const currentMangas = filterManga(search)
   
    return (
        <Container>
            <ContainerColumnMenu>
                <MenuBar></MenuBar>
            </ContainerColumnMenu>
            <ContainerColumn>
                <ContainerRow>
                    <StyledTitle>Mangas</StyledTitle>
                </ContainerRow>
                <ContainerRow>
                    <StyleButton type="primary" onClick={handleModal}>Nuevo Manga<FormOutlined /></StyleButton>
                    <FormModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        option={option}
                        setOption={setOption}
                        nuevoManga={nuevoManga}
                        setNuevoManga={setNuevoManga}
                        listarUnManga={listarUnManga}
                    >
                    </FormModal>
                    <StyleSearch>
                    <Input 
                    prefix={<SearchOutlined />}
                    placeholder="Busca por titulo/autor" onChange={(e)=>handleSearch(e)} />
                    </StyleSearch>
                </ContainerRow>
                <FlexContainer>
                    <LeftOutlined onClick={goToPrevious} style={{ fontSize: '24px', cursor: 'pointer' }} />
                    {

                        currentMangas

                            .map((item, index) => {

                                return <CardManga key={index}
                                    item={item}
                                    setOpenModal={setOpenModal}
                                    option={option}
                                    setOption={setOption}
                                    setListarUnManga={setListarUnManga}
                                    openCardModal={openCardModal}
                                    setOpenCardModal={setOpenCardModal}
                                    listarUnManga={listarUnManga}
                                ></CardManga>

                            })
                    }
                    <RightOutlined onClick={goToNext} style={{ fontSize: '24px', cursor: 'pointer' }} />
                </FlexContainer>

            </ContainerColumn>
        </Container>
    )
}

export default Mangas;