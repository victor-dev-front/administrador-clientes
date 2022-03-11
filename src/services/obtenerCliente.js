import axios from "axios"

export const obtenerCliente = async (id, setCliente) => {

    const url= `http://localhost:4000/clientes/${id}`;

    try {
        const respuesta = await axios.get(url);
        setCliente(respuesta.data); 
    } catch (error) {
        console.log(error);
    }

}