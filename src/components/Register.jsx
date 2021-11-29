import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/cryptocurrency.png';
import { Row, Col, Form, Image, Button, Stack, Modal } from 'react-bootstrap'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine, RiRefreshFill } from 'react-icons/ri';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsPen } from 'react-icons/bs';

import { useSendUserDetailsMutation } from '../app/services/backendApi';

const Register = () => {
    const [sendSignUpDataToApi, { isLoading, isFetching }] = useSendUserDetailsMutation();
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    });

    const userDataIntial = {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    }

    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const signup_Function = async (e) => {
        try {
            e.preventDefault();
            const response = await sendSignUpDataToApi(userData).unwrap()
            console.log("REGISTER DATA RESPONSE", response);
            history.push("/")
            
        }
        catch {
            setShow(true)
            console.log("SHOW", show);
            console.log("REGISTER ERROR");
        }
    }


    return (
        <Row className="align-items-center bg-success" style={{ height: "100vh" }}>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please Enter Correct Details!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Col md={{ span: 6 }} className="mx-auto">
                <Form className="border rounded rounded-3 border-success border-2 p-5 bg-dark shadow-lg">
                    <header className="display-5 text-white shadow-lg p-3 mb-3 rounded mx-auto text-center  " style={{ fontWeight: 500 }}>Sign Up
                        <Image src={logo} style={{ height: "60px" }} className="float-start"></Image>
                    </header>
                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label column="lg" className="text-white">First Name  </Form.Label>
                            <Form.Control type="text" size="lg" placeholder="Enter First Name" value={userData.first_name} onChange={e => setUserData({ ...userData, first_name: e.target.value })} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label column="lg" className="text-white">Last Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter Last Name" value={userData.last_name} onChange={e => setUserData({ ...userData, last_name: e.target.value })} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label column="lg" lg={6} className="text-white"><AiOutlineMail className="mx-2" />Email</Form.Label>
                        <Form.Control type="email" size="lg" value={userData.email} placeholder="Enter Email" onChange={e => setUserData({ ...userData, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label column="lg" lg={6} className="text-white"><AiOutlineUser className="mx-2" />Username</Form.Label>
                        <Form.Control type="text" size="lg" value={userData.username} placeholder="Enter Username" onChange={e => setUserData({ ...userData, username: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label column="lg" lg={6} className="text-white"><RiLockPasswordLine className="mx-2" />Password</Form.Label>
                        <Form.Control type="password" size="lg" value={userData.password} placeholder="Password" onChange={e => setUserData({ ...userData, password: e.target.value })} />
                    </Form.Group>
                    <Stack direction="horizontal" gap={5} className="pt-3">
                        {
                            isLoading || isFetching ?
                                <Button variant="dark" size="lg" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    wait...
                                </Button>
                                :
                                <Button variant="dark" size="lg" onClick={signup_Function}>
                                    <BsPen className="mx-2" />Signup
                                </Button>
                        }
                        <Link to="/">
                            <Button variant="dark" size="lg">
                                <AiOutlineLogin className="mx-2" />Login
                            </Button>
                        </Link>
                        <Button variant="dark" size="lg" onClick={e => setUserData(userDataIntial)}>
                            <RiRefreshFill className="mx-2" />Reset
                        </Button>
                    </Stack>
                </Form>
            </Col>
        </Row>
    )
}

export default Register
            // <Link to="/">
            //     <button>login</button>
            // </Link>