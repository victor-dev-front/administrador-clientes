import { Routes, Route } from 'react-router-dom';
import { Cliente, Clientes, EditarCliente, Layout, NuevoCliente } from '../pages';

const Rutas = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='clientes' element={<Clientes />}/>  
               <Route path='nuevo' element={<NuevoCliente />}/> 
               <Route path='editar/:id' element={<EditarCliente />}/>
               <Route path='Cliente' element={<Cliente />}/>
            </Route>
        </Routes>
     );
}
 
export default Rutas;
