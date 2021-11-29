import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Row, Col, Button, Image, Stack, Modal } from 'react-bootstrap';
import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiGnuprivacyguard } from 'react-icons/si';
import logo from '../images/cryptocurrency.png';
import { useSendLoginDetailsMutation } from '../app/services/backendApi';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [sendDataToApi, { isLoading, isFetching, status }] = useSendLoginDetailsMutation();

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [token, setToken] = useCookies(['mytoken'])

    const history = useHistory();
    useEffect(() => {
        if (token['mytoken']) {
            history.push("/main")
        }
    }, [token])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const sendLoginDetails = async (e) => {
        try {
            e.preventDefault();
            const resp = await sendDataToApi(loginData).unwrap()
            setToken('mytoken', resp?.token);
            console.log("Token Resp", resp?.token);
            console.log("RESPONSE LOGIN", resp);
            console.log("Token", token);
            console.log("Status", status);
        }
        catch {
            setShow(true)
            console.log("Login Error");
        }
    }


    return (
        <Row className="align-items-center bg-success" style={{ height: "100vh" }}>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please Enter Correct Details!</Modal.Body>
            </Modal>

            <Col md={{ span: 6 }} className="mx-auto">
                <Form className="border rounded rounded-3 border-success border-2 p-5 bg-dark shadow-lg">
                    <header className="display-5 text-white shadow-lg p-3 mb-5 rounded mx-auto text-center  " style={{ fontWeight: 500 }}>Sign In
                        <Image src={logo} style={{ height: "60px" }} className="float-start"></Image>
                    </header>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column="lg" lg={6} className="text-white"><AiOutlineUser className="mx-2" />Username</Form.Label>
                        <Form.Control type="email" size="lg" value={loginData.username} onChange={e => { setLoginData({ ...loginData, username: e.target.value }) }} placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label column="lg" lg={6} className="text-white"><RiLockPasswordLine className="mx-2" />Password</Form.Label>
                        <Form.Control type="password" size="lg" value={loginData.password} onChange={e => { setLoginData({ ...loginData, password: e.target.value }) }} placeholder="Password" />
                        <Form.Text className="text-muted">
                            <Button variant="link" className="text-white">forget password?</Button>
                        </Form.Text>
                    </Form.Group>
                    <Stack direction="horizontal" gap={1} className="pt-3">
                        <Link to="/main">
                            {
                                isLoading || isFetching ?
                                    <Button variant="dark" size="lg" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </Button>
                                    :
                                    <Button variant="dark" size="lg" type="submit" onClick={sendLoginDetails}>
                                        <AiOutlineLogin className="mx-2" />Login
                                    </Button>
                            }
                        </Link>
                        <Link to="/register">
                            <Button variant="dark" size="lg">
                                <SiGnuprivacyguard className="mx-2" />Signup
                            </Button>
                        </Link>
                    </Stack>
                </Form>
            </Col>
        </Row>
    )
}

export default Login