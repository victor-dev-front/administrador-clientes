import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { obtenerCliente } from "../services/obtenerCliente";

const Cliente = () => {
    
      const navigate =useNavigate();
      //datos del cliente
      const [cliente, setCliente] = useState({});
      //id del cliente
      const {id}=useParams();

    useEffect(() => {
     obtenerCliente(id,setCliente);
    },[])

    const {nombre, empresa, telefono, notas, email} = cliente;


    return (  
        <div className="contenedorCliente">
            <h2 className="tituloCliente">Cliente  :<span>{nombre}</span></h2>
            <p className="parrafoCliente">Informacion del Cliente</p>

            <div className="infoCliente">
                <p>CLIENTE:<span>{nombre}</span></p>
                <p>EMAIL:<span>{email}</span></p>
                <p>TELÉFONO:<span>{telefono}</span></p>
                <p>EMPRESA:<span>{empresa}</span></p>
                {notas ? <p>NOTAS:<span>{notas}</span></p> : null}
            </div>
            <div className="contenedorBTN">
                <Button 
                variant="primary"
                className="volverBTN"
                onClick={()=>navigate("/clientes")}
                >
                Volver
                </Button>
            </div>
       </div> 
     );
}
 
export default Cliente;