import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const MenuNavbar = () => {

    const location = useLocation();
    const urlActual = location.pathname;

    return ( 
        <Navbar className='navbar' expand="lg" variant='dark'>
            <Container>
                <h1 className='titulo'>CRM - Clientes</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbarToggle'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className={`${urlActual === "/clientes" ? "link activo": "link"}`} to={"/clientes"}>Clientes</Link>
                    <Link className={`${urlActual === "/nuevo" ? "link activo": "link"}`} to={"/nuevo"}>Nuevo Cliente</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default MenuNavbar;