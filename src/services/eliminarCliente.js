import axios from "axios"

export const eliminarCliente = async (id) =>{

    const url= `http://localhost:4000/clientes/${id}`;
      
    try {
        const enviarDatosApi = await axios.delete(url,url);
    } catch (error) {
        console.log(error);
    }

}