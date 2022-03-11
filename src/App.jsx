import { BrowserRouter } from 'react-router-dom';
import DatasApiProvider from './context/DatasApiContext';
import Rutas from './router/index.routes';

function App() {

  
  return (
    <DatasApiProvider>
        <BrowserRouter>
           <Rutas/>
        </BrowserRouter>
    </DatasApiProvider>
  )
}

export default App
