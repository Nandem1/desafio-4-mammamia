import '../components/NavbarMain.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import MyContext from '../MyContext';
import Cart from '../views/Cart';

function NavbarMain() {
    const { show, setShow, handleClose, handleShow } = useContext(MyContext)
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavLinkClick = (idname) => {
        const element = document.getElementById(idname);
        element.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Navbar id='navscroll' className='transition' collapseOnSelect expand="lg" bg={scrolled ? "danger" : "transparent"} variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand className='fs-3' href='/'>Pizzería Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-evenly align-items-center w-25">
                        <NavLink onClick={scrollToTop} className='nav-link-custom' to="/">Home</NavLink>
                        <NavLink onClick={() => handleNavLinkClick("pizzas-disponibles")} className='nav-link-custom' to="/">Pizzas</NavLink>
                        <NavLink onClick={handleShow} className='nav-link-custom'>Cart</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMain