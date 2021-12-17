import * as React from 'react';

const HowItWorks=()=>{

  return (
      <div className='row text-center' style={{marginTop:'15vh'}}>
        <div className='col-md-1'></div>
        <div className='col-md'>
          <h2>LOW COST SOLUTIONS</h2>
          <p>$100 - Excepteur sint.</p>  
          <p>$200 - Occaecat cupidatat non proident.</p>  
          <p>$300 - Cupidatat non proident.</p>  
        </div>
        <hr className='divider' size="8" width="90%" color="grey"/>  
        <div className='col-md-3'>
          <h2>24/7 SUPPORT</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
        </div>
        <hr className='divider' size="8" width="90%" color="grey"/>  
        <div className='col-md'>
          <h2>HIGH QUALITY PERFORMANCE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='col-md-1'></div>
      </div>
    
  );
}

export default HowItWorks;