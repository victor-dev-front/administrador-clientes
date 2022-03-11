import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/formulario/Formulario";
import { obtenerCliente } from "../services/obtenerCliente";

const EditarCliente = () => {

    //datos del cliente
    const [cliente, setCliente] = useState({});
    //id del cliente
    const {id}=useParams();

  useEffect(() => {
   obtenerCliente(id,setCliente);
  },[])


    return ( 
    <>
         <h2 className="subTitulo">Cliente: <span>{cliente.nombre}</span></h2>
         <p className="parrafoCliente">Editar Informacion del Cliente</p>
         <Formulario cliente={cliente}/>  

    </> 
    );
}
 
export default EditarCliente;