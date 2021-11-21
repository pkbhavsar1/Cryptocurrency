import moment from 'moment';
import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../app/services/cryptoNews'
import { DropdownButton, Dropdown, Card } from 'react-bootstrap'
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import { Loader } from '../components'
import { Col, Row, Image } from 'react-bootstrap'


const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCoinsQuery(100)
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 4 : 12 });
    const demoImage = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`;
    if (isFetching) return (<Loader />);
    return (
        <div>
            {
                !simplified && (
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={newsCategory}
                        variant="success">
                        {data?.data?.coins?.map((currency, i) =>
                            <Dropdown.Item key={i}
                                value={currency?.name}
                                onClick={value => setNewsCategory(currency.name)}>{currency?.name}</Dropdown.Item>
                        )}
                    </DropdownButton>
                )
            }


            <Row xs={1} md={2}>
                {
                    cryptoNews.value.map((news, i) => (
                        <Col style={{marginBottom:"100px"}} key={i}>
                            <Card className="h-100">
                                <Card.Link href={news.url} style={{ textDecoration: "none" }}>
                                    <Card.Title as="h5" className="text-dark list-inline-item mt-3 card-header w-100 shadow-lg p-2 m-1">{news.name}</Card.Title>
                                    <Card.Body>
                                        <Card.Img src={news?.image?.thumbnail?.contentUrl || demoImage} className="float-start"></Card.Img>
                                        <Card.Text className="mt-3 text-dark">{news.description.length > 150 ? `${news.description.substring(0, 145)}...` : news.description}</Card.Text>
                                    </Card.Body>
                                </Card.Link>
                                <Card.Footer className="list-item h-100">
                                    <Image className="float-start list-inline-item" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} fluid rounded style={{width:"20px",height:"20px"}}/>
                                    <Card.Text className="list-inline-item">{news.provider[0]?.name}</Card.Text>
                                    <Card.Text className="text-muted list-inline-item float-end"><small className="text-muted">{moment(news.datePublished).startOf('ss').fromNow()}</small></Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default News
                            // <a href={news.url} style={{ textDecoration: "none" }}>
                            //     <h5 className="card-title list-inline-item mt-3 card-header w-100 shadow-lg p-2 text-dark">{news.name}</h5>
                            //     <div className="card-body">
                            //         <img src={news?.image?.thumbnail?.contentUrl || demoImage} className="img-fluid float-start m-3" alt="..." style={{ height: "180px" }} />
                            //         {/* <img src={`https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`} alt=".." className="rounded-circle list-inline-item" style={{height="50px"}}/> */}
                            //         <p className="card-text mt-3 text-dark">{news.description.length > 150 ? `${news.description.substring(0, 145)}...` : news.description}</p>
                            //     </div>
                            // </a>
                            // <div className="card-footer list-item">
                            //     <img src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} className="img-fluid rounded-circle float-start list-inline-item" alt="..." style={{ height: "30px" }} />
                            //     <p className="list-inline-item">{news.provider[0]?.name}</p>
                            //     <p className="card-text list-inline-item float-end"><small className="text-muted">{moment(news.datePublished).startOf('ss').fromNow()}</small></p>
                            // </div>
