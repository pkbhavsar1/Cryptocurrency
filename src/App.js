import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './components/components.css';
import { Navbar, Footer, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 bg-dark">
                    <Navbar/>
                </div>
                <div className="col bg-success p-2">
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
                    </Switch>
                </div>
            </div>
            <div className="row mt-5">
                <Footer/>
            </div>
        </div>
    )
}

export default App
