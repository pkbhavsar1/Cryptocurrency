import React from 'react';
import millify from 'millify';
import { useGetExchangesQuery } from '../app/services/cryptoApi';
import { MdOutlineOpenInNew } from 'react-icons/md'
import { Loader } from '../components';
import { Link } from 'react-router-dom';

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return (<Loader/>);

    return (
        <table className="table table-hover table-light w-100">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Exchanges</th>
                    <th>24h Trade Volume</th>
                    <th>Markets</th>
                    <th>Market Share</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {exchangesList?.map((exchange) =>
                <tr key={exchange?.uuid}>
                    <td>{exchange?.rank}</td>
                    <td><img src={exchange?.iconUrl} alt="No Img" style={{height:"20px", width:"20px"}}/>&nbsp;&nbsp;{exchange?.name}</td>
                    <td>${millify(exchange?.volume)}</td>
                    <td>${millify(exchange?.numberOfMarkets)}</td>
                    <td>${millify(exchange?.marketShare)}%</td>
                    <td><Link to={exchange?.websiteUrl} target="_blank"><MdOutlineOpenInNew/></Link></td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Exchanges
