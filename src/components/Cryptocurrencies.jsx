import React, { useState } from 'react';
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import { Cryptocard, Loader } from '../components';
import { Col, Row } from 'react-bootstrap'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCoinsQuery(count)
    const [searchTerm, setSearchTerm] = useState('');

    if (isFetching) return (<Loader />);
    return (
        <>
            <div>
                {
                    !simplified && (
                        <div className="m-2">
                            <div className="input-group input-group-lg mt-3 btn-success bg-dark">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                                <input type="text" className="form-control bg-dark text-white" placeholder="Search Crypto Currency" onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                        </div>
                    )
                }
                <Row xs={1} md={2} xl={4} className="mb-5">{
                    cryptosList.data.coins
                        .filter((coin) => coin.name.toLowerCase().includes(searchTerm))
                        .map((coin) => (
                            <Col key={coin.id} className="mb-3">
                                <Cryptocard coin={coin} />
                            </Col>
                        ))
                }
                </Row>
            </div>
        </>
    )
}

export default Cryptocurrencies
