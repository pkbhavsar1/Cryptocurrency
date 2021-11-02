import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import './components.css'

const Cryptocard = ({coin:{id,name, symbol,rank, iconUrl, price, marketCap, change},}) => {
    return (
        <div className="w-100" key={id}>
            <Link to={`/props/${id}`}>
                <div className="card text-dark bg-light mb-3 card-header rounded"  style={{maxWidth:"100%"}}>
                    <h6 className="m-auto w-100">
                        {name.length>15?
                            <div className="card-header h-50 shadow-lg p-2 bg-body rounded">{`${rank}.${symbol}`}
                                <p className="m-2 float-end" style={{marginLeft:"auto"}} href="/">
                                    <img src={iconUrl} alt="" width="30" height="30" className="align-text-top"/>
                                </p>
                            </div>:
                            <div className="card-header h-50 shadow-lg p-2 bg-body rounded">{`${rank}.${name}`}
                                <p className="m-2 float-end" style={{marginLeft:"auto"}} href="/">
                                    <img src={iconUrl} alt="" width="30" height="30" className="align-text-top"/>
                                </p>
                            </div>
                        }
                    </h6>
                    <div className="card-body">
                        <p className="card-text">Price:{millify(price)}</p>
                        <p className="card-text">Market Cap: {millify(marketCap)}</p>
                        <p className="card-text">Daily Change: {change}%</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cryptocard
