import { createContext, useState, useEffect } from "react";
import { obtenerClientes } from "../services/obtenerClientes";

export const DatasApiContext = createContext();

const DatasApiProvider = (props) => {
     
    //datos de los clientes
    const [clientes, setClientes] = useState([]);

    //getClientes
    const getClientes = () => obtenerClientes(setClientes);
    const [estado, setEstado] = useState(false);
  
    useEffect(() => {
       getClientes();
    }, [estado])

  

    return (
        <DatasApiContext.Provider
         value={{clientes,setEstado,estado}}
        >
          {props.children}
        </DatasApiContext.Provider>
    )

}
export default DatasApiProvider;