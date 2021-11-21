import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome, FcCurrencyExchange, FcLineChart, FcNews } from 'react-icons/fc';
// 1083
import logo from '../images/cryptocurrency.png'
import { Navbar, Container, Stack, Nav } from 'react-bootstrap'
import Media from 'react-media'

const Header = () => {
    return (
        <Media query="(min-width:1200px)">
            {(matches) => {
                return matches ?
                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Container fluid style={{ height: "100%", width: "100%" }}>
                            <Navbar.Brand>
                                <Stack direction="horizontal" gap={4}>
                                    <Link to="/">
                                        <img
                                            alt=""
                                            src={logo}
                                            width="50"
                                            height="50"
                                            className="d-inline-block align-top"
                                        />
                                    </Link>{' '}
                                    <Link to="/" style={{ "textDecoration": "none" }}>
                                        <div
                                            className="text-wrap border border-white border-3 rounded-pill p-2 bg-success text-white">
                                            CryptoGen
                                        </div>
                                    </Link>
                                </Stack>
                                <Stack gap={5} className="mt-5">
                                    <Nav className="flex-column" xl={2} md={1} sm={1}>
                                        <Link to="/" style={{ "textDecoration": "none" }}>
                                            <Nav>
                                                <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcHome />&nbsp;&nbsp;<span>Home</span></p>
                                            </Nav>
                                        </Link>
                                        <Link to="/cryptocurrencies" style={{ "textDecoration": "none" }}>
                                            <Nav>
                                                <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcCurrencyExchange />&nbsp;&nbsp;<span>Cryptocurrencies</span></p>
                                            </Nav>
                                        </Link>
                                        <Link to="/exchanges" style={{ "textDecoration": "none" }}>
                                            <Nav>
                                                <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcLineChart />&nbsp;&nbsp;<span>Exchanges</span></p>
                                            </Nav>
                                        </Link>
                                        <Link to="/news" style={{ "textDecoration": "none" }}>
                                            <Nav>
                                                <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcNews />&nbsp;&nbsp;<span>News</span></p>
                                            </Nav>
                                        </Link>
                                    </Nav>
                                </Stack>
                            </Navbar.Brand>
                        </Container>
                    </Navbar> :
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                        <Container>
                            <Link to="/"  style={{ textDecoration: "none" }}>
                                <Navbar.Brand href="/">CyptoGen</Navbar.Brand>
                            </Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/"  style={{ textDecoration: "none" }}>
                                        <Nav.Link href="/">Home</Nav.Link>
                                    </Link>
                                    <Link to="/cryptocurrencies"  style={{ textDecoration: "none" }}>
                                        <Nav.Link href="/ryptocurrencies">Cryptocurrencies</Nav.Link>
                                    </Link>
                                    <Link to="exchanges"  style={{ textDecoration: "none" }}>
                                        <Nav.Link href="/exchanges">Exchanges</Nav.Link>
                                    </Link>
                                    <Link to="/news"  style={{ textDecoration: "none" }}>
                                        <Nav.Link href="/news">NEWS</Nav.Link>
                                    </Link>
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
                    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                    //     <Container>
                    //         {/* <Link to="/">
                    //             <img
                    //                 alt=""
                    //                 src={logo}
                    //                 width="50"
                    //                 height="50"
                    //                 className="d-inline-block align-top"
                    //             />
                    //         </Link> */}
                    //         <Link href="/" style={{ textDecoration: "none" }}>
                    //             <Navbar.Brand href="/" className="border rounded-pill border-white p-2">CryptoGen</Navbar.Brand>
                    //         </Link>
                    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    //         <Navbar.Collapse id="responsive-navbar-nav">
                    //             <Nav className="me-auto">
                    //                 <Link href="/" style={{ textDecoration: "none" }}>
                    //                     <Nav.Link className="mx-4 text-white">Home</Nav.Link>
                    //                 </Link>
                    //                 <Link href="/cryptocurrencies" style={{ textDecoration: "none" }}>
                    //                     <Nav.Link className="mx-4 text-white">Cryptocurrencies</Nav.Link>
                    //                 </Link>
                    //                 <Link href="/exchanges" style={{ textDecoration: "none" }}>
                    //                     <Nav.Link className="mx-4 text-white">Exchanges</Nav.Link>
                    //                 </Link>
                    //                 <Link href="/news" style={{ textDecoration: "none" }}>
                    //                     <Nav.Link className="mx-4 text-white">News</Nav.Link>
                    //                 </Link>
                    //             </Nav>
                    //         </Navbar.Collapse>
                    //     </Container>
                    // </Navbar>
