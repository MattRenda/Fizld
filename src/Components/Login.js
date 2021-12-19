import React, {useState} from 'react';

const Login = ()=> {
  const year = new Date();

    const handleChange=()=>{

    }
    return (
        <div className='form-signin text-center'>
          <form>
            <img class="mb-4" src={require('../imgs/portfolio_logo.png')} alt="" width="72" height="47"/>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div class="form-floating text-left">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating text-left">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
        
            <div class="checkbox mb-3 text-left">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <small>Copyright &copy; {year.getFullYear()}</small>        
          </form>
        </div>
    );
}

export default Login;

