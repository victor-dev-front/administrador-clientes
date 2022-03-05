import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './router/index.routes';

function App() {
  
  return (
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  )
}

export default App
