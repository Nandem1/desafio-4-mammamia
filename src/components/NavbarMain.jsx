import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import './NavbarMain.css'

function NavbarMain() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar className={`p-4 ${scrolled ? "scrolled" : "notscrolled"}`} collapseOnSelect expand="lg" bg="danger" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand className='fs-3' href="#home">Pizzería Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={setActiveClass} to="/pizzas">Pizzas</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMain