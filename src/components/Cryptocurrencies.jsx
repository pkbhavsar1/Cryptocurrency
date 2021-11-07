import React, {useState} from 'react';
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import { Cryptocard } from '../components';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data:cryptosList, isFetching} = useGetCoinsQuery(count)
    const [searchTerm, setSearchTerm] = useState('');

    // console.log("Search",searchTerm);

    return (
        <>
            <div className="d-flex justify-content-between">
            {
                !simplified && (
                    <div className="m-2">
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
                        (<div className="row row-cols-4">{
                            // <div row-cols-4>
                            cryptosList.data.coins
                            .filter((coin)=>coin.name.toLowerCase().includes(searchTerm))
                            .map((coin)=>(
                                <div key={coin.id}>
                                    <Cryptocard coin={coin}/>
                                </div>
                            ))
                            // </div>
                        }</div>)}
            </div>
        </>
    )
}

export default Cryptocurrencies
