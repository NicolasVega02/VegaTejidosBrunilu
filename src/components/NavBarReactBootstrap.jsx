import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget"

function BasicExample() {
  return (
   
   <Navbar expand="lg" className="contenedorNavBar" >
      <Container>
        <Navbar.Brand as={NavLink} to = '/'><img className = "imgLogo" src="public/imagenes/logoTejidos.jpg" alt="tejidosBruniluLogo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href='https://www.instagram.com/tejidosbrunilu/?hl=es' target="_blank"><FaInstagram></FaInstagram></Nav.Link>
            <Nav.Link href="https://www.facebook.com/Tejidosbrunilu/?locale=es_LA" target="_blank"><FaFacebook></FaFacebook></Nav.Link>
            <Nav.Link as={NavLink} to={'/products'} class="h4" className='navbar'> Productos </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown" className='navbar'>
              <NavDropdown.Item as={NavLink} to = 'category/amigurumis'>Amigurumis 🧸</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to = 'category/indumentaria'>
                Indumentaria 👙
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to = 'category/colecciones'>Colecciones 🧶</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to = 'category/bebe'>
                Bebe 👶
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={'/cart'}>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;