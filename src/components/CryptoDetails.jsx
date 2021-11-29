import React, { useState } from 'react'
import { Container, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../app/services/cryptoApi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti'
import { ImListNumbered } from 'react-icons/im';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { GiRank3, GiBackwardTime } from 'react-icons/gi';
import { MdOutlineAutoGraph, MdOutlinePriceChange } from 'react-icons/md';
import { RiExchangeDollarFill, RiExchangeFill, RiExchangeLine } from 'react-icons/ri';

import { Loader, LineChart } from '../components';


const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timeperiod, setTimeperiod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory, isFetching: loadingHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    const cryptoDetails = data?.data?.coin;

    if (isFetching) return <Loader />;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <HiOutlineCurrencyDollar /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <GiRank3 /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <GiBackwardTime /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <MdOutlineAutoGraph /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <MdOutlinePriceChange /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <ImListNumbered /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <RiExchangeDollarFill /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.approvedSupply ? <TiTickOutline /> : <AiOutlineCloseCircle />, icon: <TiTickOutline /> },
        { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.totalSupply)}`, icon: <RiExchangeFill /> },
        { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.circulatingSupply)}`, icon: <RiExchangeLine /> },
    ];


    // const price = millify(cryptoDetails?.price);
    return (
        <Container>
            <header
                className="display-5 text-white shadow-lg p-3 mb-1 rounded text-center"
                style={{ fontWeight: 500 }}>{data?.data?.coin?.name} ({data?.data?.coin?.slug}) Price
            </header>
            <p className="text-center text-white">{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            <hr className="bg-white" style={{ height: 2 }} />
            <div className="w-50">
                <DropdownButton
                    id="dropdown-basic-button"
                    title={timeperiod}
                    variant="light">
                    {time.map((date, i) =>
                        <Dropdown.Item key={i}
                            value={date}
                            onClick={(value) => setTimeperiod(date)}>{date}
                        </Dropdown.Item>
                    )}
                </DropdownButton>
            </div>
            {loadingHistory ? <Loader /> : <LineChart coinHistory={coinHistory} currentPrice={cryptoDetails?.price} coinName={cryptoDetails?.name} />}
            <Row xl={12}>
                <Col xl="6" md="12">
                    <table className="table table-striped table-hover table-borderless table-light border border-2 border-dark h-100">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="3">{cryptoDetails?.name}</th>
                            </tr>
                            <tr>
                                <td colSpan="3">An overview showing the statistics of  {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</td>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map(({ icon, title, value }, i) =>
                                <tr key={i}>
                                    <td>{icon}</td>
                                    <td>{title}</td>
                                    <td><b>{value}</b></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Col>
                <Col xl="6" md="12">
                    <table className="table table-striped table-hover table-borderless table-light border border-2 border-dark h-100">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="3">Other Stats Info</th>
                            </tr>
                            <tr>
                                <td colSpan="3">An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</td>
                            </tr>
                        </thead>
                        <tbody>
                            {genericStats.map(({ icon, title, value }, i) => (
                                <tr key={i}>
                                    <td>{icon}</td>
                                    <td>{title}</td>
                                    <td><b>{value}</b></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row xl={12}>
                <Col xl="6" md="12" className="mb-5">
                    <h1 className="text-white">What is {cryptoDetails?.name}?</h1>
                    <div className="text-white">{HTMLReactParser(cryptoDetails?.description)}</div>
                </Col>
                <Col xl="6" md="12" className="mb-5">
                    <table className="table table-striped table-hover table-borderless table-light border border-2 border-dark h-75">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="3">{cryptoDetails?.name} Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoDetails?.links?.map((link) =>
                                <tr key={link.name}>
                                    <td>{link.type}</td>
                                    <td><a href={link.url}>{link.name}</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default CryptoDetails;
    //     <div className="container">
    //         <header
    //             className="display-5 text-white shadow-lg p-3 mb-1 rounded text-center"
    //             style={{ fontWeight: 500 }}>{data?.data?.coin?.name} ({data?.data?.coin?.slug}) Price
    //         </header>
    //         <p className="text-center text-white">{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
    //         <hr className="bg-white" style={{ height: 2 }} />
    //         <div className="w-50">
    //             <DropdownButton
    //                 id="dropdown-basic-button"
    //                 title={timeperiod}
    //                 variant="light">
    //                 {time.map((date, i) =>
    //                     <Dropdown.Item key={i}
    //                         value={date}
    //                         onClick={(value) => setTimeperiod(date)}>{date}
    //                     </Dropdown.Item>
    //                 )}
    //             </DropdownButton>
    //         </div>
    //         {loadingHistory?<Loader/>:<LineChart coinHistory={coinHistory} currentPrice={cryptoDetails?.price} coinName={cryptoDetails?.name} />}
    //         <div className="row row-cols-2">
    //             <div className="">
    //                 <table className="table table-striped table-hover table-borderless table-light border border-2 border-dark h-100">
    //                     <thead>
    //                         <tr>
    //                             <th scope="col" colSpan="3">{cryptoDetails?.name}</th>
    //                         </tr>
    //                         <tr>
    //                             <td colSpan="3">An overview showing the statistics of  {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</td>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {stats.map(({icon, title, value}, i)=>
    //                             <tr key={i}>
    //                                 <td>{icon}</td>
    //                                 <td>{title}</td>
    //                                 <td><b>{value}</b></td>
    //                             </tr>
    //                         )}
    //                     </tbody>
    //                 </table>
    //             </div>
    //             <div>
    //                 <table className="table table-striped table-hover table-borderless table-light border border-2 border-dark h-100">
    //                     <thead>
    //                         <tr>
    //                             <th scope="col" colSpan="3">Other Stats Info</th>
    //                         </tr>
    //                         <tr>
    //                             <td colSpan="3">An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</td>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {genericStats.map(({icon, title, value},i)=>(
    //                             <tr key={i}>
    //                                 <td>{icon}</td>
    //                                 <td>{title}</td>
    //                                 <td><b>{value}</b></td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //         <div className="row row-cols-2">
    //             <div>
    //                 <h1 className="text-white">What is {cryptoDetails?.name}?</h1>
    //                 <div className="text-white">{HTMLReactParser(cryptoDetails?.description)}</div>
    //             </div>
    //             <div className="col">
    //                 <table className="table table-striped table-hover table-borderless table-light border border-2 border-dark h-75">
    //                     <thead>
    //                         <tr>
    //                             <th scope="col" colSpan="3">{cryptoDetails?.name} Links</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {cryptoDetails?.links?.map((link)=>
    //                             <tr key={link.name}>
    //                                 <td>{link.type}</td>
    //                                 <td><a href={link.url}>{link.name}</a></td>
    //                             </tr>
    //                         )}
    //                     </tbody>
    //                 </table>
    //             </div>
    //     </div>
    // </div>
