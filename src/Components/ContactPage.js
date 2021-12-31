import React, { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';

class ContactPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            subject: 'messaged you from your Portfolio!'
        }
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    sendEmail() {
        
        const { name, email, message, subject } = this.state
        console.log(name + ' ' + email + ' ' + message + ' ' + subject)

        axios.post('https://portfoliocontact.azurewebsites.net/api/contact?code=KT2yaayLMSYf63vyV7cMYk9gEvgbb2nxGhO7gm4qxNvDduQ8wTdyLQ==', { name, email, message, subject })
            .catch(err => { console.log(err) })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div className='container p-5'>
                <h2>Like more information?</h2>
        
                <Form onSubmit={(e)=>{e.preventDefault(); this.sendEmail();}}>
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                type="email"
                                name='email' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                type="text"
                                name='name' />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridMessage">

                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                type="textarea"
                                name='message' />
                        </Form.Group>
                    </Form.Row>
                    <button className='btn' type='submit' >Submit</button>
                </Form>
            </div>
        );
    }
}

export default ContactPage;

