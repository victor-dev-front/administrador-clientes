import axios from "axios"

export const obtenerClientes = async (setClientes) => {

    const url= "http://localhost:4000/clientes";

    try {
      const respuesta =await axios.get(url);
      setClientes(respuesta.data);
 
    } catch (error) {
        console.log(error);
    }

}