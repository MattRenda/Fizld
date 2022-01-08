import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom";

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../Redux/actions';
import * as selectors from '../Redux/selectors';
import AccountMenu from './AccountMenu';
import { Button } from '@mui/material'


const Header = ({ user, setUser }) => {
    let navigate = useNavigate();

    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5vh', marginBottom: '8vh', marginRight: '10px' }}>
                <Navbar.Brand >
                    <Link to={'/'}>
                        <img
                            src={require('../../imgs/Logo.png')}
                            width="250"
                            height="70"
                            alt="Matthew Renda logo"
                        />
                    </Link>
                </Navbar.Brand>
                <div className='desktop'>
                    {
                        user._id ?
                            <div>
                                <Link  className='btn'  to={'/Account'}><b style={{ color: "#6D8FAB" }}> {user.FirstName + " " + user.LastName} </b></Link>
                                <button className='btn' style={{ color: "#6D8FAB" }} onClick={() => setUser()}><b style={{ color: "#6D8FAB" }}>Logout</b></button>
                            </div>
                            : <button className='btn' style={{ color: "#6D8FAB" }} onClick={() => navigate("/Login")}><b style={{ color: "#6D8FAB" }}>Login</b></button>
                    }
                </div>
                <div className="mobile">
                    <AccountMenu user={user} setUser={setUser} />
                </div>
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