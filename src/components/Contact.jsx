import React, { useState } from 'react';
import { Row, Col, Container, Stack, Form, FloatingLabel, Button } from 'react-bootstrap';
import { ImOffice, ImMap2, ImPhone } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { MdAccessTimeFilled, MdMessage } from 'react-icons/md';
import { useSendQueryMutation } from '../app/services/contact';

const Contact = () => {

    const [sendQuery, reponseInfo] = useSendQueryMutation();
    const [checkValue, setCheckValue] = useState(true);

    const [contactForm, setContactForm] = useState({
        issue: "",
        issue_description: "",
        img: "",
        call: ""
    });

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setContactForm({
            ...contactForm,
            img : base64});
        // console.log("CC",base64)
    };

    const Check=e=>{
        if (checkValue===true) {
            setCheckValue(false)
            setContactForm({...contactForm, call:"YES"})
        }else{
            setCheckValue(true)
            setContactForm({...contactForm, call:"NO"})
        }
        console.log(contactForm.check);
    }

    const Submit=e=>{
        e.preventDefault();
        sendQuery(contactForm);
        console.log("CF", contactForm);
        console.log("Contact Response", reponseInfo)
    }


    return (
        <Container fluid>
            <Row md={2}>
                <Col md="4" className="bg-white rounded my-5">
                    <Stack direction="horizontal" gap={3} className="bg-white rounded my-3">
                        <ImOffice style={{ height: "40px", width: "40px" }} />
                        <header className="bg-white display-6 fw-bolder"><u>Office</u></header>
                    </Stack> <br /> <br />
                    <Stack className="my-0 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <ImMap2 style={{ height: "50px", width: "25%" }} />
                            <div>
                                <header className="display-7"><b>INDIA</b></header>
                                <p className="text-muted">CryptoGen, Bhadgaon Road, Jalgaon</p>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className="my-4 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <ImPhone style={{ height: "50px", width: "25%" }} />
                            <div>
                                <header className="display-7"><b>PHONE</b></header>
                                <p className="text-muted">+91 7276695116</p>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className="my-4 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <AiOutlineMail style={{ height: "50px", width: "25%" }} />
                            <div>
                                <header className="display-7"><b>EMAIL</b></header>
                                <p className="text-muted">pkbhavsar1@gmail.com</p>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack className="my-4 rounded">
                        <Stack direction="horizontal" gap={4}>
                            <MdAccessTimeFilled style={{ height: "50px", width: "25%" }} />
                            <div>
                                <header className="display-7"><b>OPEN HOURS</b></header>
                                <p className="text-muted">Mon-Sat:10:00 am-17:00 pm</p>
                            </div>
                        </Stack>
                    </Stack>
                </Col>
                {/* FORM */}
                <Col md="8">
                    <Form className="my-5" onSubmit={Submit}>
                        <Stack direction="horizontal" gap={3} className="bg-white rounded my-2 mb-4 px-2" style={{ height: "100px" }}>
                            <MdMessage style={{ height: "40px", width: "40px" }} />
                            <header className="bg-white display-6 fw-bolder"><u>SEND MESSAGE</u></header>
                        </Stack>

                        <FloatingLabel controlId="floatingSelect" label="Select your issue" className="mb-3">
                            <Form.Select aria-label="Select issue from menu" value={contactForm.issue} 
                                onChange={e => { setContactForm({...contactForm , issue:e.target.value})} }>
                                <option>Select issue from menu</option>
                                <option value="Incorrect Information display">Incorrect Information display</option>
                                <option value="Crypto Currency not available">Crypto Currency not available</option>
                                <option value="Link Disabled">Link Disabled</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </FloatingLabel>
                        <Stack>
                            <FloatingLabel controlId="floatingTextarea1" label="Issue?" className="mb-3 shadow">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    onChange={e => { setContactForm({...contactForm ,issue_description:e.target.value})} }
                                    name="issue_description"
                                    // value={contactForm.issue_description}
                                    style={{ height: '150px' }}
                                />
                            </FloatingLabel>
                        </Stack>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Attach file if neccessary</Form.Label>
                            <Form.Control type="file" size="lg" onChange={(e) => { uploadImage(e) }} />
                        </Form.Group>
                        <Form.Group className="mb-4" id="formGridCheckbox">
                            <Form.Check type="checkbox" value={checkValue} label="Call me if neccessary" onClick={Check} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="dark" size="lg">Send Message</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact