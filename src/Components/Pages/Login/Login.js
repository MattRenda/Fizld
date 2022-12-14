import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';
import * as selectors from '../../Redux/selectors';
import Lottie from 'react-lottie';
import loading from '../../../lotties-animations/loading.json';

const Login = ({setUser, user,}) => {
  const year = new Date();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const[state,setState] = useState({
    email:'',
    password:'',
    submitted: false
  });
  const navigate = useNavigate();

  const handleChange =(event) => {
    setState({...state, [event.target.name]: event.target.value });
  }

  useEffect(()=>{
    if(user._id){
      navigate(from);
    }
    else if(user.error){
      setState({...state,submitted:false})
    }
  },[user])

  return (
    <div className='form-signin text-center p-2'>
    {state.submitted?
         <Lottie
         options={{
           loop: true,
           autoplay: true,
           animationData: loading
         }}
         height={'200px'}
         width={'200px'}
       />
      :
      <div>
        <Link to='/'><img className="mb-4" src='/imgs/Logo.webp' alt="" width="100" height="45" /></Link>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        {user.error? <span style={{color:'red'}}>{user.error}</span>:''}
        <form onSubmit={(e)=> {e.preventDefault();setUser(state); setState({...state,submitted:true})}}>
          <div className="form-floating text-left">
            <input 
              onChange={handleChange} 
              type="email" 
              name='email' 
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com" 
              required
              autoComplete='email'
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating text-left">
            <input 
              onChange={handleChange} 
              type="password" 
              name='password' 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password" 
              required
              autoComplete='current-password'
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type='submit'>Sign in</button>
          <small>Copyright &copy; {year.getFullYear()}</small>
          <p className='mt-4 mb-0'>Dont have an account?</p>
          <Link to={'/CreateAccount'} className=''>Create Account</Link>
        </form>
      </div>}
    </div>

  );
}
const mapStateToProps =createStructuredSelector({
  user: selectors.getUser(),
})

const mapDispatchToProps =(dispatch)=>({
  setUser: (input) => dispatch(actions.setUser(input))
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withRedux;

