import React from 'react'
import {Row, Col, Image, Stack} from 'react-bootstrap'
import logo from '../images/cryptocurrency.png'
const About = () => {
    return (
        <Row className="bg-white h-100">
            <Col>
                <header 
                    className="display-5 text-success shadow-lg p-3 mb-5 rounded mx-auto text-center" 
                    style={{ fontWeight: 500 }}>
                        OUR VISION
                        <p style={{fontSize:"30px"}}>Cryptocurrency in Every Wallet</p>
                    </header>
                <Stack direction="horizontal">
                    <Image className="mx-5 bg-dark rounded-pill p-5" src={logo}></Image>
                    <p className="display-6">We believe it is your basic right to control your money, data and identity. So we providing you a detail knowlege of each and every crypto Currency</p>
                </Stack>
                <h1 className="text-center text-success mt-5">CryptoGen-Vision of new world</h1>
            </Col>
        </Row>
    )
}

export default About
