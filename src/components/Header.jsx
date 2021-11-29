import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome, FcCurrencyExchange, FcLineChart, FcNews } from 'react-icons/fc';
import {HiOutlineLogout} from 'react-icons/hi';
// 1083
import logo from '../images/cryptocurrency.png'
import { Navbar, Container, Stack, Nav } from 'react-bootstrap'
import Media from 'react-media'

const deleteCookie=()=> {
    document.cookie = "mytoken=" ;
}

const Header = () => {
    return (
        <Media query="(min-width:1200px)">
            {(matches) => {
                return matches ?
                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Container fluid style={{ height: "100%", width: "100%" }}>
                            <Navbar.Brand>
                                <Stack direction="horizontal" gap={4}>
                                    <Link to="/main">
                                        <img
                                            alt=""
                                            src={logo}
                                            width="50"
                                            height="50"
                                            className="d-inline-block align-top"
                                        />
                                    </Link>{' '}
                                    <Link to="/main" style={{ "textDecoration": "none" }}>
                                        <div
                                            className="text-wrap border border-white border-3 rounded-pill p-2 bg-success text-white">
                                            CryptoGen
                                        </div>
                                    </Link>
                                </Stack>
                                <Stack gap={5} className="mt-5">
                                    <Nav className="flex-column" xl={2} md={1} sm={1}>
                                        <Nav.Link as={Link} to="/main">
                                            <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcHome />&nbsp;&nbsp;<span>Home</span></p>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/main/cryptocurrencies">
                                            <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcCurrencyExchange />&nbsp;&nbsp;<span>Cryptocurrencies</span></p>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/main/exchanges">
                                            <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcLineChart />&nbsp;&nbsp;<span>Exchanges</span></p>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/main/news">
                                            <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcNews />&nbsp;&nbsp;<span>News</span></p>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="mt-5">
                                            <p className="list-group-item list-group-item-action mt-4 bg-dark text-light" onClick={deleteCookie}><HiOutlineLogout />&nbsp;&nbsp;<span>Logout</span></p>
                                        </Nav.Link>
                                    </Nav>
                                </Stack>
                            </Navbar.Brand>
                        </Container>
                    </Navbar> :
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                        <Container>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Navbar.Brand>CyptoGen</Navbar.Brand>
                            </Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto mx-auto">
                                    <Nav.Link as={Link} to="/main">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/main/cryptocurrencies">Cryptocurrencies</Nav.Link>
                                    <Nav.Link as={Link} to="/main/exchanges">Exchanges</Nav.Link>
                                    <Nav.Link as={Link} to="/main/news">News</Nav.Link>
                                    <Nav.Link as={Link} to="/" onClick={deleteCookie}>Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            }
            }
        </Media>
    )
}

export default Header