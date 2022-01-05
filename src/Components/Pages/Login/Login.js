import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';
import * as selectors from '../../Redux/selectors';
const Login = ({setUser, user}) => {
  const year = new Date();
  const[state,setState] = useState({
    email:'',
    password:''
  });
  const navigate = useNavigate();

  const handleChange =(event) => {
    setState({...state, [event.target.name]: event.target.value });
  }

  useEffect(()=>{
    if(user._id){
      navigate('/')
    }
   },[user])
  return (
    <>
      
      <div className='form-signin text-center p-2'>
          <img class="mb-4" src={require('../../../imgs/portfolio_logo.png')} alt="" width="72" height="47" />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>


          <div class="form-floating text-left">
            <input onChange={handleChange} type="email" name='email' class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating text-left">
            <input onChange={handleChange} type="password" name='password' class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" onClick={()=>setUser(state)}>Sign in</button>
          <small>Copyright &copy; {year.getFullYear()}</small>
        <p className='mt-4 mb-0'>Dont have an account?</p>
        <Link to={'/CreateAccount'} className=''>Create Account</Link>

      </div>
    </>

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

