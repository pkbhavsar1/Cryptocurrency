import React from 'react';
import Map from './Map';
import { Row, Col, Container, Stack, Form, FloatingLabel } from 'react-bootstrap';
import { ImOffice, ImMap2, ImPhone } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { MdAccessTimeFilled, MdMessage } from 'react-icons/md';


const Contact = () => {
    return (
        <Container fluid>
            <Row md={2}>
                <Col md="4" className="bg-white rounded my-2">
                    <Stack direction="horizontal" gap={3} className="bg-white rounded my-3">
                        <ImOffice style={{ height: "100%", width: "25%" }} />
                        <header className="bg-white display-3 fw-bolder"><u>Office</u></header>
                    </Stack> <br /> <br />
                    <Stack className="my-2 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <ImMap2 style={{ height: "100%", width: "25%" }} />
                            <div>
                                <header className="display-6">INDIA</header>
                                <p className="text-muted">CryptoGen, Bhadgaon Road, Jalgaon</p>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className="my-2 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <ImPhone style={{ height: "100%", width: "25%" }} />
                            <div>
                                <header className="display-6">PHONE</header>
                                <p className="text-muted">+91 7276695116</p>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className="my-2 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <AiOutlineMail style={{ height: "100%", width: "25%" }} />
                            <div>
                                <header className="display-6">EMAIL</header>
                                <p className="text-muted">pkbhavsar1@gmail.com</p>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className="my-2 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <MdAccessTimeFilled style={{ height: "100%", width: "25%" }} />
                            <div>
                                <header className="display-6">OPEN HOURS</header>
                                <p className="text-muted">Mon — Sat: 10:00 am — 17:00 pm</p>
                            </div>
                        </Stack>
                    </Stack>
                </Col>
                {/* FORM */}
                <Col md="8">
                    <Form>
                        <Stack direction="horizontal" gap={3} className="bg-white rounded my-2" style={{ height: "100px" }}>
                            <MdMessage style={{ height: "100%", width: "25%" }} />
                            <header className="bg-white display-3 fw-bolder"><u>SEND MESSAGE</u></header>
                        </Stack>
                        <Stack>
                            <FloatingLabel controlId="floatingTextarea1" label="Message?" className="mb-3 shadow">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    onChange={""}
                                    name="message"
                                    value={""}
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact