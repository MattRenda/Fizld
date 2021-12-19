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
          <h4 class="my-0 font-weight-normal">Single Page</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$100</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>1 page</li>
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary">Get started</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Multi Page</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$250</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Multiple pages</li>
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Custom</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$500</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Multiple pages</li>
            <li>Ssl Certificate</li>
            <li>Free Hosting</li>
            <li>Design planning sessions</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
        </div>
      </div>
      </div>
    </div>
     

  );
}

export default HowItWorks;