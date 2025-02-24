import { message } from "antd";
import axios from "axios";


export const insertarUsuario = (nuevoUsuario) => {

    axios
        .post("http://localhost:4000/api/usuario", {
            nombre: nuevoUsuario.nombre,
            email: nuevoUsuario.email,
            password: nuevoUsuario.password
        })
        .then((respuesta) => {
            console.log(respuesta)
            message.success({
                content: "Usuario registrado correctamente",
                style: { marginTop: "5vh" }
              });       
        })
        .catch((err) => {
            console.log(err)
        })

}