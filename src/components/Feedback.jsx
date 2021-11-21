import React, {useState} from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Form, FloatingLabel, Row, Button } from 'react-bootstrap';
import { useSendFeedbackMutation } from '../app/services/feedbackApi';


const Feedback = () => {
    const [sendFeedbackData, responseInfo] = useSendFeedbackMutation()
    const [formData, setFormData] = useState({
        like_comment : '',
        miss : '',
        email : ''
    });

    const initial_state = {
        like_comment : '',
        miss : '',
        email : ''
    }

    const handle = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const [visible, setVisible] = useState(false);

    const sendNewFeedback = e => {
        e.preventDefault();
        sendFeedbackData(formData)
        setVisible(true);
    }

    const resetFeedback = e =>{
        e.preventDefault();
        setFormData({...initial_state})   
        setVisible(false);     
    }

    return (
        <Container>
            <Row className="justify-content-md-center" style={{marginBottom:"50px"}}>
                {/* <Form className="w-50 my-5" onSubmit={(e)=>{e.preventDefault(); sendFeedbackData(formData)}}> */}
                <Alert show={visible} onClose={()=>{setVisible(false)}} dismissible>Feedback Submitted Succesfully </Alert>
                <Form className="w-50 my-5" onSubmit={sendNewFeedback}>
                    <div className="bg-white rounded-3 p-3 mb-3 shadow ">
                        <header className="bg-white mb-3 display-5 ">Got feedback on us? We're listening!</header>
                        <p>We'll use your input to improve our products. Thanks a lot!</p>
                    </div>
                    <FloatingLabel controlId="floatingTextarea2" label="What do you like most about CryptoGen?" className="mb-3 shadow ">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            onChange={handle}
                            name="like_comment"
                            value={formData.like_comment}
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="What do you miss on CryptoGen?" className="mb-3 shadow ">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            name="miss"
                            onChange={handle}
                            value = {formData.miss}
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handle} value={formData.email}/>
                        <Form.Text className="text-dark">Not required, but we might like to ask you some questions about your feedback or provide clarification if necessary.</Form.Text>
                    </Form.Group>
                    <Button variant="dark" type="submit shadow">
                        Submit
                    </Button>
                    <Button variant="link" type="reset" className="float-end" style={{textDecoration:"none", color:"black"}} onClick={resetFeedback}>
                        Reset
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Feedback
