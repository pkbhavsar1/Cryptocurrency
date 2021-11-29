import React from 'react';
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Cryptocurrencies, News, Loader } from '../components'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Homepage = () => {
    const { data, isFetching } = useGetCoinsQuery(10);
    const globalStats = data?.data?.stats
    console.log("STATS", globalStats);
    if (isFetching) {
        return (
            <Loader />
        );
    }
    return (
        <Container fluid>
            <Row>
                <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{ fontWeight: 500 }}>Global Crypto Statistic</header>
            </Row>
            <Row className="justify-content-md-center" xs={1} md={2}>
                <Col className="my-2">
                    <Card border="dark h-100">
                        <Card.Header className="text-muted m-1 shadow-lg rounded">Total Cryptocurrencies</Card.Header>
                        <Card.Title className="m-2">{globalStats?.total}</Card.Title>
                        <Card.Text className="text-success m-2">Total Cryptocurrencies available in market</Card.Text>
                    </Card>
                </Col>
                <Col className="my-2">
                    <Card border="dark h-100">
                        <Card.Header className="text-muted shadow-lg rounded">Total Exchanges</Card.Header>
                        <Card.Title className="m-2">{millify(globalStats?.totalExchanges)}</Card.Title>
                        <Card.Text className="text-success m-2">Total platforms available for Crypto Currency Exchanges</Card.Text>
                    </Card>
                </Col>
                <Col className="my-2">
                    <Card border="dark h-100">
                        <Card.Header className="text-muted shadow-lg rounded">Total Market Cap</Card.Header>
                        <Card.Title className="m-2">{millify(globalStats?.totalMarketCap)}</Card.Title>
                        <Card.Text className="text-success m-2">Crypto market capitalization is the total value of a cryptocurrency.</Card.Text>
                    </Card>
                </Col>
                <Col className="my-2">
                    <Card border="dark h-100">
                        <Card.Header className="text-muted shadow-lg rounded">Total 24h Volume</Card.Header>
                        <Card.Title className="m-2">{millify(globalStats?.total24hVolume)}</Card.Title>
                        <Card.Text className="text-success m-2">The total value of crypto traded in the past 24 hours</Card.Text>
                    </Card>
                </Col>
                <Col className="my-2">
                    <Card border="dark h-100">
                        <Card.Header className="text-muted shadow-lg rounded">Total Markets</Card.Header>
                        <Card.Title className="m-2">{globalStats?.totalMarkets}</Card.Title>
                        <Card.Text className="text-success m-2">Total amount of markets used for price calculation</Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{ fontWeight: 500 }}>TOP 10 Cryptocurrencies in the world! <Link to="/main/cryptocurrencies"><h5 className="text-end"><span className="badge bg-dark rounded-pill">Show more</span></h5></Link></header>
            </Row>
            <Container fluid>
                <Cryptocurrencies simplified />
            </Container>
            <Row>
                <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{ fontWeight: 500 }}>Latest Crypto NEWS! <Link to="/main/news"><h5 className="text-end"><span className="badge bg-dark rounded-pill">Show more</span></h5></Link></header>
            </Row>
            <Container fluid>
                <News simplified />
            </Container>
        </Container>
    )
}
export default Homepage
        // <div>
        //     <div className="container">
        //     <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{fontWeight:500}}>Global Crypto Statistic</header>
        //     <div>
        //         <div className="row row-cols-2">
        //             <div className="card text-dark bg-light m-3" style={{maxWidth:400}}>
        //                 <div className="card-header shadow-lg rounded ">Total Cryptocurrencies</div>
        //                 <div className="card-body">
        //                     <h5 className="card-title">{globalStats?.total}</h5>
        //                     <p className="card-text text-success">Total Cryptocurrencies available in market</p>
        //                 </div>
        //             </div>

        //             <div className="card text-dark bg-light m-3" style={{maxWidth:400}}>
        //                 <div className="card-header shadow-lg rounded">Total Exchanges</div>
        //                 <div className="card-body">
        //                     <h5 className="card-title">${millify(globalStats?.totalExchanges)}</h5>
        //                     <p className="card-text text-success">Total platforms available for Crypto Currency Exchanges</p>
        //                 </div>
        //             </div>

        //             <div className="card text-dark bg-light m-3" style={{maxWidth:400}}>
        //                 <div className="card-header shadow-lg rounded">Total Market Cap</div>
        //                 <div className="card-body">
        //                     <h5 className="card-title">{millify(globalStats?.totalMarketCap)}</h5>
        //                     <p className="card-text text-success">Crypto market capitalization is the total value of a cryptocurrency.</p>
        //                 </div>
        //             </div>

        //             <div className="card text-dark bg-light m-3" style={{maxWidth:400}}>
        //                 <div className="card-header shadow-lg rounded">Total 24h Volume</div>
        //                 <div className="card-body">
        //                     <h5 className="card-title">{millify(globalStats?.total24hVolume)}</h5>
        //                     <p className="card-text text-success">The total value of crypto traded in the past 24 hours</p>
        //                 </div>
        //             </div>

        //             <div className="card text-dark bg-light m-3" style={{maxWidth:400}}>
        //                 <div className="card-header shadow-lg rounded">Total Markets</div>
        //                 <div className="card-body">
        //                     <h5 className="card-title">{globalStats?.totalMarkets}</h5>
        //                     <p className="card-text text-success">Total amount of markets used for price calculation</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        //     </div>
        //     <div className="container">
        //         <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{fontWeight:500}}>TOP 10 Cryptocurrencies in the world! <Link to="/cryptocurrencies"><h5 className="text-end"><span className="badge bg-dark rounded-pill">Show more</span></h5></Link></header>    
        //         <Cryptocurrencies simplified/>  
        //     </div>
        //     <div className="container">
        //         <header className="display-5 text-white shadow-lg p-3 mb-5 rounded" style={{fontWeight:500}}>Latest Crypto NEWS! <Link to="/news"><h5 className="text-end"><span className="badge bg-dark rounded-pill">Show more</span></h5></Link></header>         
        //         <News simplified/>
        //     </div>

        // </div>
