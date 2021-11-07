import moment from 'moment';
import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../app/services/cryptoNews'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useGetCoinsQuery } from '../app/services/cryptoApi';
import {Loader} from '../components'


const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data} = useGetCoinsQuery(100)
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 4 : 12 });
    const demoImage = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`;
    return (
        <>
            {
                !simplified && (
                    <DropdownButton 
                        id="dropdown-basic-button" 
                        title={newsCategory} 
                        variant="success">
                        {data?.data?.coins?.map((currency, i) => 
                            <Dropdown.Item key={i} 
                                value={currency?.name} 
                                onClick={value=>setNewsCategory(currency.name)}>{currency?.name}</Dropdown.Item>
                            )}
                    </DropdownButton>
                )
            }


            {
                isFetching || !cryptoNews.value ? (
                    <Loader/>
                ) : (<div className="row row-cols-2">
                    {
                        cryptoNews.value.map((news, i) => (
                            <div key={i} className="card m-4" style={{ width: "500px" }}>
                                <a href={news.url} style={{ textDecoration: "none" }}>
                                    <h5 className="card-title list-inline-item mt-3 card-header w-100 shadow-lg p-2 text-dark">{news.name}</h5>
                                    <div className="card-body">
                                        <img src={news?.image?.thumbnail?.contentUrl || demoImage} className="img-fluid float-start m-3" alt="..." style={{ height: "180px" }} />
                                        {/* <img src={`https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`} alt=".." className="rounded-circle list-inline-item" style={{height="50px"}}/> */}
                                        <p className="card-text mt-3 text-dark">{news.description.length > 150 ? `${news.description.substring(0, 145)}...` : news.description}</p>
                                    </div>
                                </a>
                                <div className="card-footer list-item">
                                    <img src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} className="img-fluid rounded-circle float-start list-inline-item" alt="..." style={{ height: "30px" }} />
                                    <p className="list-inline-item">{news.provider[0]?.name}</p>
                                    <p className="card-text list-inline-item float-end"><small className="text-muted">{moment(news.datePublished).startOf('ss').fromNow()}</small></p>
                                </div>
                            </div>
                        ))
                    }
                </div>)
            }
        </>
    )
}

export default News
