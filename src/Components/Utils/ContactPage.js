import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';

const ContactPage =({title,plan})=> {

    const[state,setState] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'messaged you from your Portfolio!'
    })

    const sendEmail=()=> {
        
        const { name, email, message, subject } = state
        console.log(name + ' ' + email + ' ' + message + ' ' + subject)

        axios.post('https://portfoliocontact.azurewebsites.net/api/contact?code=KT2yaayLMSYf63vyV7cMYk9gEvgbb2nxGhO7gm4qxNvDduQ8wTdyLQ==', { name, email, message, subject,plan })
            .catch(err => { console.log(err) })
    }

    const handleChange =(event) => {
        setState({...state, [event.target.name]: event.target.value });
    }

        return (
            <div id='contact' className='container form'>
                <h2 >{title}</h2>
        
                <Form onSubmit={(e)=>{e.preventDefault(); sendEmail();}}>
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="email"
                                name='email' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="text"
                                name='name' />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridMessage">

                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                as="textarea"
                                name='message' 
                                rows={4}
                                value={plan?`Hi, I am contacting you in regards to your ${plan} plan, I would love to talk more about the pricing and options available to me.`:''}
                            />
                        </Form.Group>
                    </Form.Row>
                    <button className='btn' type='submit' >Submit</button>
                </Form>
            </div>
        );
}

export default ContactPage;

