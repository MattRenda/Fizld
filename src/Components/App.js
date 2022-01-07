import React, {useEffect} from 'react';

import '../index.css';
import '../Style/style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  
import Login from './Pages/Login/Login';
import CreateAccount from './Pages/Login/CreateAccount';
import Home from './Pages/Home/Home';
import Basic from './Pages/Basic/Basic';
import Plus from './Pages/Plus/Plus';
import Premium from './Pages/Premium/Premium';
import Account from './Pages/Account/Account';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from './Redux/actions';
import * as selectors from './Redux/selectors';
import Payment from './Pages/Payment/Payment';

const App =({Init, user})=>{
    useEffect(()=>{
        Init();
    },[])

    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/Login" element={user._id?<Navigate replace to={'/'}/>:<Login/>}/>
                    <Route path="/CreateAccount" element={user._id?<Navigate replace to={'/'}/>:<CreateAccount/>}/>
                    <Route path="/Basic" element={user._id?<Basic/>:<Navigate replace to={'/Login'}/>}/>
                    <Route path="/Plus" element={user._id?<Plus/>:<Navigate replace to={'/Login'}/>}/>
                    <Route path="/Premium" element={user._id?<Premium/>:<Navigate replace to={'/Login'}/>}/>
                    <Route path="/Account" element={user._id?<Account/>:<Navigate replace to={'/'}/>}/>
                    <Route path="/Payment" element={user._id?<Payment/>:<Navigate replace to={'/'}/>}/>
                </Routes>
            </Router>
        </div>
    )
}
const mapStateToProps =createStructuredSelector({
    user: selectors.getUser(),
})

const mapDispatchToProps =(dispatch)=>({
    Init: () => dispatch(actions.Init())
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(App);
export default withRedux;