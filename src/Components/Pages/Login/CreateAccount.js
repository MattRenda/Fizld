import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';
import * as selectors from '../../Redux/selectors';


const CreateAccount = ({createUser}) => {
  const year = new Date();
  const[state,setState] = useState({
    email:'',
    password:'',
    firstName:'',
    lastName:''
  });

  const navigate = useNavigate();
  const handleChange =(event) => {
    setState({...state, [event.target.name]: event.target.value });
  }
  return (
    <>
      
      <div className='form-signin text-center p-2'>
        <Link to='/'><img class="mb-4" src='/imgs/Logo.webp' alt="" width="120" height="60" /></Link>
          <h1 class="h3 mb-3 fw-normal">Create Account</h1>

          <div class="form-floating text-left">
            <input onChange={handleChange} type="email" required name='email' class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating text-left">
            <input onChange={handleChange} type="password" required name='password' class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-floating text-left">
            <input onChange={handleChange} type="text" required name='firstName' class="form-control" id="floatingInput" placeholder="First Name" />
            <label for="floatingInput">First Name</label>
          </div>
          
          <div class="form-floating text-left">
            <input onChange={handleChange} type="text" required name='lastName' class="form-control" id="floatingPassword" placeholder="Last Name"/>
            <label for="floatingPassword">Last Name</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" onClick={()=>{createUser(state); navigate('/Login')}}>Create</button>
          <small>Copyright &copy; {year.getFullYear()}</small>
      </div>
    </>
  );
}
const mapStateToProps =createStructuredSelector({
  user: selectors.getUser(),
})

const mapDispatchToProps =(dispatch)=>({
  createUser: (input) => dispatch(actions.createUser(input))
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
export default withRedux;

