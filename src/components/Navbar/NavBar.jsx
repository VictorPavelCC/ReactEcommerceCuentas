import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/img/logo.png'
import CartWidget from '../Cart/CartWidget'
import '../Cart/Cart.css'

const NavBar = ({cartCount}) => {
	return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="120"
                                height="60"
                                className="d-inline-block align-top"
                                alt="MainLogo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Link className="cart-mobile" style={{paddingRight:'2rem'}} to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="align-items-center">
                            <NavLink className="nav-link" to="/">
                                Inicio
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/motherboard">
                                motherboards
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/procesador">
                                Procesadores
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/video">
                                Placa de Video
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/otros">
                                Otros
                            </NavLink>                            
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="cart-desktop" to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                </Container>
            </Navbar>
        </>
	);
};

export default NavBar;