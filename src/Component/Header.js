import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Button
} from 'react-bootstrap';
import { Link , useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

export const Header = () => {
    let navigate = useNavigate();
    const auth = localStorage.getItem('authtoken');
    const logout = () => {
        localStorage.removeItem('authtoken');
        navigate("/login")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Shahid</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto text-capitalize">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/aboutus"}>About us</Nav.Link>
                        {auth ? <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/admincrousal"}>Add Crousal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> : null}
                        <Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>
                        <Nav.Link as={Link} to={"/contactus"}>Contact us</Nav.Link>
                    </Nav>
                        {auth && <Button variant="danger" className="mx-3" onClick={logout}>Logout <MdLogout size={20}/></Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
