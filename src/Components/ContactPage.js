import React, { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';

class ContactPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name:'',
            email:'',
            message:'',
            subject: 'messaged you from your Portfolio!'
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    sendEmail(){
        const {name,email,message,subject} = this.state
        console.log(name + ' ' + email + ' ' + message + ' ' +subject)

        axios.post('https://portfoliocontact.azurewebsites.net/api/contact?code=KT2yaayLMSYf63vyV7cMYk9gEvgbb2nxGhO7gm4qxNvDduQ8wTdyLQ==',{name,email,message,subject})
        .catch(err=>{console.log(err)})

        this.handleClose();
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    
    render() {

        return (
            <>
                <Button className='header-btn dark-blue' onClick={this.handleShow}>
                    Contact me
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>How can I help?</Modal.Title>
                        
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row >
                                <Form.Group as={Col}  controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                    onChange={this.handleChange} 
                                    type="email" 
                                    name='email'/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    name='name'/>
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
                                
                                Like to contact me another way? 
                                <br/>        
                                <small>
                                    Email: MatthewJRenda@gmail.com <br/>
                                    Phone: 916-835-4633
                                </small> 
                                                     
                        </Form>
                
                    </Modal.Body>
                    <Modal.Footer>
                     
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                </Button>
                        <Button variant="primary" type='submit' onClick={this.sendEmail}>
                            Submit
                </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ContactPage;

