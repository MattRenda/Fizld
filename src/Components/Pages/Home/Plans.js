import * as React from 'react';
import { useNavigate } from "react-router-dom";

const Plans = () => {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <div className="card-deck mb-3 text-center">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h2 className="my-0 font-weight-normal">Basic</h2>
        </div>
        <div className="card-body">
        <h3 className="card-title pricing-card-title">
            <span style={{position:'relative',top:'-15px', fontWeight:'lighter'}}>$</span>
            <b style={{fontSize:'200%'}}>100</b>
            <span style={{fontSize:'65%'}}>/month</span>
          </h3>          
          <ul className="list-unstyled mt-3 mb-4">
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>Analytics</li>
            <li>1 starting feature</li>
          </ul>
          <button onClick={()=>navigate('/Basic')} type="button" style={{backgroundColor:'#0156a7', color:'white'}} className="btn btn-lg btn-block">Get started</button>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h2 className="my-0 font-weight-normal">Plus</h2>
        </div>
        <div className="card-body">
        <h3 className="card-title pricing-card-title">
            <span style={{position:'relative',top:'-15px', fontWeight:'lighter'}}>$</span>
            <b style={{fontSize:'200%'}}>250</b>
            <span style={{fontSize:'65%'}}>/month</span>
          </h3>          
          <ul className="list-unstyled mt-3 mb-4">
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>Analytics</li>
            <li>3 starting features</li>

          </ul>
          <button onClick={()=>navigate('/Plus')} type="button" style={{backgroundColor:'#0156a7', color:'white'}} className="btn btn-lg btn-block">Get started</button>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h2 className="my-0 font-weight-normal">Premium</h2>
        </div>
        <div className="card-body">
          <h3 className="card-title pricing-card-title">
            <span style={{position:'relative',top:'-15px', fontWeight:'lighter'}}>$</span>
            <b style={{fontSize:'200%'}}>400</b>
            <span style={{fontSize:'65%'}}>/month</span>
          </h3>
          <ul className="list-unstyled mt-3 mb-4">
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>Analytics</li>
            <li>5 starting features</li>

          </ul>
          <button onClick={()=>navigate('/Premium')} type="button" style={{backgroundColor:'#0156a7', color:'white'}} className="btn btn-lg btn-block">Get started</button>
        </div>
      </div>
      </div>
      
    </div>
     

  );
}

export default Plans;