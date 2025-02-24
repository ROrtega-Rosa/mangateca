import { message } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const insertarManga = (nuevoManga) => {

    axios
        .post("http://localhost:4000/api/manga", {
            imagen: nuevoManga.imagen[0].url,
            titulo: nuevoManga.titulo,
            autor: nuevoManga.autor,
            coleccion: nuevoManga.coleccion,
            descripcion: nuevoManga.descripcion,
            editorial: nuevoManga.editorial,
            usuario_id: jwtDecode(localStorage.getItem("token")).id

        })
        .then((respuesta) => {
            console.log(respuesta)
            message.success({
                content: "Manga registrado correctamente",
                style: { marginTop: "5vh" }
            });
        })
        .catch((err) => {
            console.log(err)
        })

}

export const mostrarMangas = (listaManga) => {

    axios
        .get('http://localhost:4000/api/manga')
        .then((respuesta) => {
        
            listaManga(respuesta.data)
            
        })
        .catch((err) => {
            console.log(err)
        })
}

export const mostrarUnManga = (listarUnManga, id) => {

    axios
        .get(`http://localhost:4000/api/manga/${id}`)
        .then((respuesta) => {
            listarUnManga(respuesta.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const eliminarManga = (id)=>{
    axios
        .delete(`http://localhost:4000/api/manga/${id}`)
        .then((respuesta)=>{
            console.log(respuesta)
            message.success({
                content: "Manga eliminado correctamente",
                style: { marginTop: "5vh" }
            });
            window.location.reload(true);
        })
        .catch((err)=>{
            console.log(err)
        })
}

export const actualizarManga=(data,id)=>{
    axios
        .put(`http://localhost:4000/api/manga/${id}`,{
            imagen: data.imagen[0].url,
            titulo:data.titulo,
            autor:data.autor,
            coleccion:data.coleccion,
            descripcion:data.descripcion,
            editorial:data.editorial,
            usuario_id:jwtDecode(localStorage.getItem("token")).id
        })
        .then((respuesta)=>{
            console.log(respuesta)
            message.success({
                content: "Manga actualizado correctamente",
                style: { marginTop: "5vh" }
            });
        })
        .catch((err)=>{
            console.log(err)
        })
}