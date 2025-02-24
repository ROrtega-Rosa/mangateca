import axios from "axios"

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