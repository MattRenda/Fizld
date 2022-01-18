import React, { useState } from 'react';
import {Form, Col } from 'react-bootstrap';
import axios from 'axios';

const ContactPage =({title,plan})=> {

    const[state,setState] = useState({
        name: '',
        email: '',
        message: plan?`Hi, I am contacting you in regards to your ${plan} plan, I would love to talk more about the pricing and options available to me.`:'',
        subject: 'messaged you from your Portfolio!'
    })

    const sendEmail=()=> {
        
        const { name, email, message, subject } = state
        console.log(name + ' ' + email + ' ' + message + ' ' + subject)

        axios.post('https://fizld.azurewebsites.net/api/contact?code=8SBmQ8LUUkGeFuZ1qK2C9Us6qvLl1ToBpp9Z4EVDspGfUFMSRNDN4Q==', { name, email, message, subject,plan })
            .catch(err => { console.log(err) })
    }

    const handleChange =(event) => {
        setState({...state, [event.target.name]: event.target.value });
    }
    const clearFields =()=>{
        setState({...state,message:'',email:'',name:''});
    }
        return (
            <div id='contact' className='container form'>
                <h2 >{title}</h2>
        
                <Form onSubmit={(e)=>{e.preventDefault(); sendEmail(); clearFields();}}>
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="email"
                                name='email' 
                                value={state.email}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="text"
                                name='name' 
                                value={state.name}    
                                required
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridTextbox">

                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                as="textarea"
                                name='formGridTextbox' 
                                rows={4}
                                required
                                value={state.message}
                            />
                        </Form.Group>
                    </Form.Row>
                    <button className='btn btn-secondary' type='submit' >Submit</button>
                </Form>
            </div>
        );
}

export default ContactPage;

