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
import PricingPage from './Pages/Pricing/PricingPage';
import Basic from './Pages/Basic/Basic';
import Plus from './Pages/Plus/Plus';
import Premium from './Pages/Premium/Premium';
import Account from './Pages/Account/Account';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from './Redux/actions';
import * as selectors from './Redux/selectors';
import Payment from './Pages/Payment/Payment';
import Home from './Pages/Home/Home';
import Protected from './Utils/Protected';

const App =({Init, user})=>{
    useEffect(()=>{
        Init();
    // eslint-disable-next-line
    },[])
    return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/CreateAccount" element={user._id?<Navigate replace to={'/'}/>:<CreateAccount/>}/>
                    <Route path="/Basic" element={ 
                        <Protected>
                            <Basic/>
                        </Protected>
                    }/>
                    <Route path="/Pricing" element={<PricingPage/>}/>
                    <Route path="/Account" element={ 
                        <Protected> 
                            <Account/> 
                        </Protected>
                    }/>
                    <Route element={<Navigate replace to={'/'}/>}/>
                </Routes>
            </Router>
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