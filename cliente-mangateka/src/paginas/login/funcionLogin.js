import axios from "axios";
import { message} from "antd";


export const insertarLogin =(login)=>{
    axios
    .post('http://localhost:4000/api/auth/login',{
        email: login.email,
        password:login.password
    })
    .then((respuesta)=>{
        console.log(respuesta)
        localStorage.setItem('token', respuesta.data)
        message.success({
            content: "Acceso correcto",
            style: {
                marginTop: "5vh",
              },
          });
         
          window.location.replace('/main');
    })
    .catch((err)=>{
        console.log(err)
        message.error({
            content: 'El usuario y la contraseña no son correctos',
            style: {
                marginTop: "5vh",
              },
        })
    })
}
export const cerrarSesion=()=>{
    localStorage.removeItem('token');
    window.location.replace('/');
  }