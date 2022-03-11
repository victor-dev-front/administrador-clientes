import axios from "axios";

export const postApi = async(datas,cliente) =>{

    try {

        if(cliente.id){
            //edito cliente
            const url= `http://localhost:4000/clientes/${cliente.id}`;
            const enviarDatosApi = await axios.put(url,datas);
        }else{
            //ingrasa nuevo cliente
            const url= "http://localhost:4000/clientes";
            const enviarDatosApi = await axios.post(url,datas);
        }
        
    } catch (error) {
        console.log(error);
    }
}