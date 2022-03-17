import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { Cliente, Clientes, EditarCliente, NuevoCliente } from '../pages';

const Rutas = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Clientes />}/>  
               <Route path='nuevo' element={<NuevoCliente />}/> 
               <Route path='editar/:id' element={<EditarCliente />}/>
               <Route path='cliente/:id' element={<Cliente />}/>
               <Route path="*" element={<Clientes />} />
            </Route>
        </Routes>
     );
}
 
export default Rutas;
