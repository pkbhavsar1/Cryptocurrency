import React, {useEffect} from 'react';
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Cryptocurrencies, News} from '../components'

const Homepage = () => {
    const { data, error, isFetching} = useGetCoinsQuery(10);   
    console.log(data);
    const globalStats = data?.data?.stats
    if(isFetching){
        return (
            <div className="text-center text-light m-auto">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div>
            <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{fontWeight:500}}>Global Crypto Statistic</header>
            <div className="container">
                <div className="row row-cols-2">
                <div className="col">
                    <div className="card text-dark bg-light mb-3" style={{maxWidth:400}}>
                        <div className="card-header shadow-lg rounded ">Total Cryptocurrencies</div>
                        <div className="card-body">
                            <h5 className="card-title">{globalStats.total}</h5>
                            <p className="card-text text-success">Total Cryptocurrencies available in market</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3" style={{maxWidth:400}}>
                        <div className="card-header shadow-lg rounded">Total Exchanges</div>
                        <div className="card-body">
                            <h5 className="card-title">{millify(globalStats.totalExchanges)}</h5>
                            <p className="card-text text-success">Total platforms available for Crypto Currency Exchanges</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3" style={{maxWidth:400}}>
                        <div className="card-header shadow-lg rounded">Total Market Cap</div>
                        <div className="card-body">
                            <h5 className="card-title">{millify(globalStats.totalMarketCap)}</h5>
                            <p className="card-text text-success">Crypto market capitalization is the total value of a cryptocurrency.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3" style={{maxWidth:400}}>
                        <div className="card-header shadow-lg rounded">Total 24h Volume</div>
                        <div className="card-body">
                            <h5 className="card-title">{millify(globalStats.total24hVolume)}</h5>
                            <p className="card-text text-success">The total value of crypto traded in the past 24 hours</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3" style={{maxWidth:400}}>
                        <div className="card-header shadow-lg rounded">Total Markets</div>
                        <div className="card-body">
                            <h5 className="card-title">{globalStats.totalMarkets}</h5>
                            <p className="card-text text-success">Total amount of markets used for price calculation</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
                <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{fontWeight:500}}>TOP 10 Cryptocurrencies in the world! <Link to="/cryptocurrencies"><h5 className="text-end"><span className="badge bg-dark rounded-pill">Show more</span></h5></Link></header>    
                <div className="d-flex justify-content-evenly">
                    <Cryptocurrencies simplified/>
                </div>
            </div>
            <div className="container">
                <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{fontWeight:500}}>Latest Crypto NEWS! <Link to="/cryptocurrencies"><h5 className="text-end"><span className="badge bg-dark rounded-pill">Show more</span></h5></Link></header>         
                <News simplified/>
            </div>
            
        </div>
    )
}

export default Homepage
