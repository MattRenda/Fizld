import * as React from 'react';

const HowItWorks = () => {

  return (
    <div>
     {/* <div className='row text-center' style={{marginTop:'15vh'}}>
         <div className='col-md'>
           <h2>LOW COST SOLUTIONS</h2>
           <p>$100 - Excepteur sint.</p>  
           <p>$200 - Occaecat cupidatat non proident.</p>  
           <p>$300 - Cupidatat non proident.</p>  
         </div>
         <hr className='divider' size="8" width="90%" color="grey"/>  
         <div className='col-md'>
           <h2>24/7 SUPPORT</h2>
           <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
         </div>
         <hr className='divider' size="8" width="90%" color="grey"/>  
         <div className='col-md text-center'>
           <h2>HIGH QUALITY PERFORMANCE</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div> */}

      <div class="card-deck mb-3 mt-5 text-center">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Beginner</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$50 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$250 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Enterprise</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$500 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
        </div>
      </div>
      </div>
    </div>
     

  );
}

export default HowItWorks;