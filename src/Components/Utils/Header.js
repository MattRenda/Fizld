import { Button } from '@mui/material'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../Redux/actions';
import * as selectors from '../Redux/selectors';


const Header = ({user,setUser}) => {
    let navigate = useNavigate();

    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10vh', marginBottom: '5vh', marginRight:'10px' }}>
                <Navbar.Brand >
                    <Link to={'/'}>
                        <img
                            src={require('../../imgs/Logo.png')}
                            width="180"
                            height="80"
                            alt="Matthew Renda logo"
                        />
                    </Link>
                </Navbar.Brand>
                {
                    user._id ?
                    <div > 
                        <Link className='btn' to={'/Account'}> {user.FirstName+ " " + user.LastName} </Link>
                        <Button style={{ color: "#6D8FAB" }} onClick={() => setUser()}><b style={{color:'#707070'}}>Logout</b></Button>
                    </div>
                        : <Button style={{ color: "#6D8FAB" }} onClick={() => navigate("/Login")}><b style={{color:'#707070'}}>Login</b></Button>
                }

            </div>
        </div>
    )

}
const mapStateToProps = createStructuredSelector({
    user: selectors.getUser(),
})

const mapDispatchToProps = (dispatch) => ({
    setUser: () => dispatch(actions.setUserSuccess({}))
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Header);
export default withRedux;