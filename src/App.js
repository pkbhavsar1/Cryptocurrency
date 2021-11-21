import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './components/components.css';
import { Navbar, Footer, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News, Feedback, Contact } from './components';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    return (
    <Container fluid>
        <Row>
            <Col xl={3} xs={12} sm={12} className="bg-dark"><Navbar/></Col>
            <Col xl={9} md={12} xs={12} sm={12} className="bg-success" style={{minHeight:"100vh"}}>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/exchanges">
                        <Exchanges />
                    </Route>
                    <Route exact path="/cryptocurrencies">
                        <Cryptocurrencies />
                    </Route>
                    <Route exact path="/crypto/:coinId">
                        <CryptoDetails />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                    <Route exact path="/feedback">
                        <Feedback/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </Col>
        </Row>
        <Row className="bg-dark">
            <Footer/>
        </Row>
    </Container>
    )
}

export default App
