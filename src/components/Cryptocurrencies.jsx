import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import { Cryptocard } from '../components';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data:cryptosList, isFetching, error} = useGetCoinsQuery(count)
    // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    console.log("Search",searchTerm);

    return (
        <>
            <div className="row row-cols-4 mt-3">
            {
                !simplified && (
                    <div className="col-12 mb-2 col-sm-12">
                        <div className="input-group input-group-lg mt-3 btn-success bg-dark">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                            <input type="text" className="form-control bg-dark text-white" placeholder="Search Crypto Currency" onChange={(e)=>setSearchTerm(e.target.value)}/>
                        </div>
                    </div>
                )
            }
                {isFetching?(<div className="text-center text-light m-auto">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>):
                        (<>{
                            cryptosList.data.coins
                            .filter((coin)=>coin.name.toLowerCase().includes(searchTerm))
                            .map((coin)=>(
                                <div key={coin.id} className="col">
                                    <Cryptocard coin={coin}/>
                                </div>
                            ))
                        }</>)}
            </div>
        </>
    )
}

export default Cryptocurrencies
