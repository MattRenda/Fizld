import * as React from 'react';
import { useNavigate } from "react-router-dom";

const Plans = () => {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <div class="card-deck mb-3 text-center">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Basic</h4>
        </div>
        <div class="card-body">
        <h3 class="card-title pricing-card-title">
            <span style={{position:'relative',top:'-15px', fontWeight:'lighter'}}>$</span>
            <b style={{fontSize:'200%'}}>100</b>
            <span style={{fontSize:'65%'}}>/month</span>
          </h3>          
          <ul class="list-unstyled mt-3 mb-4">
            <li>1 page</li>
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>2 Revisions</li>
          </ul>
          <button onClick={()=>navigate('/Basic')} type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Plus</h4>
        </div>
        <div class="card-body">
        <h3 class="card-title pricing-card-title">
            <span style={{position:'relative',top:'-15px', fontWeight:'lighter'}}>$</span>
            <b style={{fontSize:'200%'}}>250</b>
            <span style={{fontSize:'65%'}}>/month</span>
          </h3>          
          <ul class="list-unstyled mt-3 mb-4">
            <li>Multiple pages</li>
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>3 Revisions</li>
          </ul>
          <button onClick={()=>navigate('/Plus')} type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Premium</h4>
        </div>
        <div class="card-body">
          <h3 class="card-title pricing-card-title">
            <span style={{position:'relative',top:'-15px', fontWeight:'lighter'}}>$</span>
            <b style={{fontSize:'200%'}}>400</b>
            <span style={{fontSize:'65%'}}>/month</span>
          </h3>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Multiple pages</li>
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>5 Revisions</li>
            <li>Design planning sessions</li>
          </ul>
          <button onClick={()=>navigate('/Premium')} type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      </div>
      
    </div>
     

  );
}

export default Plans;