import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const MenuNavbar = () => {

    const location = useLocation();
    const urlActual = location.pathname;

    return ( 
        <Navbar className='navbar' expand="lg" variant='dark'>
            <Container className="contenedorNav">
                    <h1 className='titulo'>CRM - Clientes</h1>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbarToggle'/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav">
                        <NavLink className={(navData) => navData.isActive ? "activo" : "link" } to={"/clientes"}>Clientes</NavLink>
                        <NavLink className={(navData) => navData.isActive ? "activo" : "link" } to={"/nuevo"}>Nuevo Cliente</NavLink>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default MenuNavbar;