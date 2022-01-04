import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

const Login = () => {
  const year = new Date();
  const navigate = useNavigate();
  const handleChange = () => {

  }
  return (
    <>
      
      <div className='form-signin text-center p-2'>
        <form onSubmit={() => navigate("/")}>
          <img class="mb-4" src={require('../../../imgs/portfolio_logo.png')} alt="" width="72" height="47" />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>


          <div class="form-floating text-left">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating text-left">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <small>Copyright &copy; {year.getFullYear()}</small>
        </form>
        <p className='mt-4 mb-0'>Dont have an account?</p>
        <a className='' href={'/#contact'}>Contact me to get started</a>

      </div>
      <Link style={{transform: 'translate(-50%,0%)', position:'absolute', bottom:'20px', left:'50%'}} className='btn btn-outline-secondary' to={'/'}>Back to home</Link>

    </>

  );
}

export default Login;

