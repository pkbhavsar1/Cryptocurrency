import React from 'react'
// import { useGetCryptoNewsQuery } from '../app/services/cryptoNews'


const News = (simplified) => {
    // const {data:cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency', count: simplified?10:100});
    // console.log("NEWS",cryptoNews);
    // if(!cryptoNews?.value) return 'Loading.....'
    return (
        <div>
            <div className="card mb-5" style={{maxWidth:"540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
