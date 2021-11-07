import React from 'react';
import {Link} from 'react-router-dom';
import { FcHome, FcCurrencyExchange, FcLineChart, FcNews } from 'react-icons/fc';
// 1083
import logo from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link to="/" style={{"textDecoration":"none"}}>
                    <p className="navbar-brand" href="/">
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top"/>
                    </p>
                </Link>
                <Link to="/" style={{"textDecoration":"none"}}>
                    <div className="shadow-lg bg-body text-wrap border border-white border-3 rounded-pill p-2" href="/" style={{"textDecoration":"none"}}>
                        <h1 className="text-success fs-1">Cryptoverse</h1>
                    </div>
                </Link>
            </div>
            <div className="list-group mt-5 w-100">
                <Link to="/" style={{"textDecoration":"none"}}>
                    <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcHome/>&nbsp;&nbsp;Home</p>
                </Link>
                <Link to="/cryptocurrencies" style={{"textDecoration":"none"}}>
                    <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcCurrencyExchange/>&nbsp;&nbsp;Cryptocurrencies</p>
                </Link>
                <Link to="/exchanges" style={{"textDecoration":"none"}}>
                    <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcLineChart/>&nbsp;&nbsp;Exchanges</p>
                </Link>
                <Link to="/news" style={{"textDecoration":"none"}}>
                    <p className="list-group-item list-group-item-action mt-4 bg-dark text-light"><FcNews/>&nbsp;&nbsp;News</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
