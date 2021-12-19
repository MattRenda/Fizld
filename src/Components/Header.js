import { Button } from '@mui/material'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const Header =()=>{
    let navigate = useNavigate();

        return (
            <div>
                <div style={{display:'flex', justifyContent:'space-between',marginTop:'10vh',marginBottom:'5vh', marginLeft:'3px', marginRight:'5px'}}>
                    <Navbar.Brand >
                        <a href='https://www.matthewrenda.com/'>
                        <img
                            src={require('../imgs/portfolio_logo.png')}
                            width="100"
                            height="60"
                            alt="Matthew Renda logo"
                        />
                        </a>
                    </Navbar.Brand>

                    <Button style={{color:"#6D8FAB"}} onClick={()=> navigate("/Login")}>Login</Button>
                </div>  
               
                <div className='hero'>
                    
                    <div>
                        <h1 class="display-5 fw-bold lh-1 mb-3">Matthew Renda - Web Developer & Designer</h1>
                        <p class="lead">Hiring a web developer means saying good bye to things like, the website not looking quite "Right", poor mobile experience, Cookie-cutter templates, Missing key Search Engine Optimization elements, and limited ecommerce functionality.</p>
                    </div>
                    <div>
                        <img src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="img" width="1200" height="700" loading="lazy"/>
                    </div>
                </div>
            </div>
        )
    
}

export default Header;