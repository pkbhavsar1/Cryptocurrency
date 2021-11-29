import React from 'react'
import {Switch, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import { Header, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Feedback, Contact, About, Footer } from '.';

const MainView = () => {
    console.log("Hllo");
    return (
    <Container fluid>
        <Row>
            <Col xl={3} sm={12} className="bg-dark"><Header/></Col>
            <Col xl={9} md={12} xs={12} sm={12} className="bg-success" style={{minHeight:"100vh"}}>
                <Switch>
                    <Route exact path="/main">
                        <Homepage />
                    </Route>
                    <Route exact path="/main/exchanges">
                        <Exchanges />
                    </Route>
                    <Route exact path="/main/cryptocurrencies">
                        <Cryptocurrencies />
                    </Route>
                    <Route exact path="/main/crypto/:coinId">
                        <CryptoDetails />
                    </Route>
                    <Route exact path="/main/news">
                        <News />
                    </Route>
                    <Route exact path="/main/feedback">
                        <Feedback/>
                    </Route>
                    <Route exact path="/main/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/main/about">
                        <About/>
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

export default MainView
