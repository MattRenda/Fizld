import React, { Component } from 'react'
import { Container, Col, Row, Navbar } from 'react-bootstrap'
import ContactPage from './ContactPage'
class Header extends Component {

    render() {
        return (
            <>
            <div className='header-bgColor red'>
               

                <div className='headerTextContainer'>
                    <h1 style={{fontSize:'180%',color:'white'}}>
                    Hi, my name is Matthew Renda.
                    </h1>
                    <h4 style={{fontSize:'130%',color:'white'}}>
                    Full stack developer.
                    </h4>
                </div>
                <div className='header-logo-container'>
                    <img alt="header-design" className='header-logo-size' src={require('../imgs/MatthewRenda-logo.png')}/>
                </div>
            
            </div>
            <div class="custom-shape-divider-top-1610406512">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
                </svg>
            </div>
        
            <ContactPage/>
               
           <Navbar.Brand className='header-brand'>
                        <a href='https://www.matthewrenda.com/'>
                        <img
                            src={require('../imgs/portfolio_logo_yellow.png')}
                            width="75"
                            height="75"
                            alt="Matthew Renda logo"
                        />
                        </a>
                    </Navbar.Brand>
           </>
        )
    }
}

export default Header;