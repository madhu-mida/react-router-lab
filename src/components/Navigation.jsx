import { Link } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (

        <Navbar bg="primary" variant="dark">

            <Nav className="me-auto">
                <Nav.Link href={"/"}>
                    iStocks
                </Nav.Link>
                <Nav.Link href={"/about"}>
                    About
                </Nav.Link>
                <Nav.Link href={"/stocks"}>
                    Stocks
                </Nav.Link>
            </Nav>

        </Navbar>

    );
}

export default Navigation;