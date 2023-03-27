import '../components/NavbarMain.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

function NavbarMain() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")
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
                    <Nav className="me-auto">
                        <NavLink onClick={scrollToTop} className={setActiveClass} to="/">Home</NavLink>
                        <NavLink onClick={() => handleNavLinkClick("pizzas-disponibles")} className={setActiveClass} to="/">Pizzas</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMain