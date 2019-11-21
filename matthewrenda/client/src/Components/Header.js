import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'
import ContactPage from './ContactPage'
class Header extends Component {

    render() {
        return (
            <div className='header-bgColor light-blue'>
                <Navbar >
                    <Navbar.Brand href="#home" className='header-brand'>
                        <img
                            src={require('../imgs/portfolio_logo_yellow.png')}
                            width="75"
                            height="75"
                            alt="Matthew Renda logo"
                        />
                    </Navbar.Brand>
                </Navbar>

                <div>
                    <ContactPage/>
                </div>

                <Container className='header-smSpace'>
                    <Row>
                        <Col>
                            <div className='header-introbig font center'>
                                <b>Full stack web developer with a passion for creating, and a drive to learn.</b>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='header-introsmall center'>
                                Hi, my name is Matthew Renda. I look forward to working with you.
                    </div>
                        </Col>
                    </Row>
                 

                </Container>
            </div>
        )
    }
}

export default Header;