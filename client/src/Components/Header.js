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
                        Full stack developer with a passion for creating, and a drive to learn.
                    </h1>
                    <h4 style={{fontSize:'130%',color:'white'}}>
                        Hi, my name is Matthew Renda. I look forward to working with you.
                    </h4>
                </div>
                <div className='header-logo-container'>
                    <img alt="header-design" className='header-logo-size' src={require('../imgs/MatthewRenda-logo.png')}/>
                </div>
            
            </div>
            <div class="custom-shape-divider-top-1610247056">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
               </svg>
           </div>
        
            <ContactPage/>
               
           <Navbar.Brand className='header-brand'>
                        <a href='http://localhost:3000/'>
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