import { createContext, useState, useEffect } from "react";
import { obtenerClientes } from "../services/obtenerClientes";

export const DatasApiContext = createContext();

const DatasApiProvider = (props) => {
     
    //datos de los clientes
    const [clientes, setClientes] = useState([]);
    //getClientes
    const getClientes = () => obtenerClientes(setClientes);
  
    useEffect(() => {
       getClientes();
       
    }, [clientes])

  

    return (
        <DatasApiContext.Provider
         value={{clientes}}
        >
          {props.children}
        </DatasApiContext.Provider>
    )

}

export default DatasApiProvider;