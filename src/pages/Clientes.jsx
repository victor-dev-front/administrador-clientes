import { useContext } from "react";
import { DatasApiContext } from "../context/DatasApiContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { eliminarCliente } from "../services/eliminarCliente";

const Clientes = () => {

    const {clientes}= useContext(DatasApiContext);

    //ver cliente
    const navigate = useNavigate();

     
    return ( 
        <>
          <h2 className="tituloClientes">Clientes</h2>
          <p className="parrafoClientes">Administra tus Clientes</p>

          <div className="contenedorClientes">
              <div className="clientes">
                  <h3>Nombre</h3>
                  <h3>Contacto</h3>
                  <h3>Empresa</h3>
                  <h3>Acciones</h3>
              </div>
             
              {clientes && clientes.map(cliente =>(
                <div className="datosClientes" key={cliente.id}>
                    <p>{cliente.nombre}</p>
                    <p>{cliente.telefono}</p>
                    <p>{cliente.empresa}</p>
                    <div className="btn">
                       <Button 
                         variant="primary"
                         onClick={()=>navigate(`/cliente/${cliente.id}`)}
                       >Ver</Button>
                       <Button 
                          variant="success"
                          onClick={()=> navigate(`/editar/${cliente.id}`)}
                       >
                         Editar</Button>
                       <Button 
                          variant="danger"
                          onClick={()=> eliminarCliente(cliente.id)}
                        >Eliminar
                        </Button>
                    </div>
                </div>
              ))}   
          </div>
        </>
     );
}
 
export default Clientes;