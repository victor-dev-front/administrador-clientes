import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MenuNavbar from "../components/menuNavbar/MenuNavbar";

const Layout = () => {
    return ( 

        <div className="fondo">
            <MenuNavbar/>
            <Container>
              <Outlet/>
            </Container>
        </div>
     );
}
 
export default Layout;