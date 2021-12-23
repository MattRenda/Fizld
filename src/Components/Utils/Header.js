import { Button } from '@mui/material'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";
const Header =()=>{
    let navigate = useNavigate();

        return (
            <div className='container'>
                <div style={{display:'flex', justifyContent:'space-between',marginTop:'10vh',marginBottom:'5vh', marginLeft:'3px', marginRight:'5px'}}>
                    <Navbar.Brand >
                        <Link to={'/'}>
                        <img
                            src={require('../../imgs/portfolio_logo.png')}
                            width="100"
                            height="60"
                            alt="Matthew Renda logo"
                        />
                        </Link>
                    </Navbar.Brand>

                    <Button style={{color:"#6D8FAB"}} onClick={()=> navigate("/Login")}>Login</Button>
                </div>  
            </div>
        )
    
}

export default Header;