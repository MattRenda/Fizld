import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Payment from '../Payment';
import Pricing from '../../Pages/Pricing/Pricing';
import { useLocation } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from '../../Redux/selectors';

const Basic = ({user}) => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const {plan,cost} = location.state;
    return (
        <div className='headerSpacing'>
            <Header />
            {<Payment plan={plan} fullName={user.FirstName + ' ' + user.LastName} price={cost} email={user.Email}/>}
            <Footer contact={false}/>
        </div>
    )
}

  const mapStateToProps =createStructuredSelector({
    user: selectors.getUser(),
  })
  
  const mapDispatchToProps =(dispatch)=>({
  })
  
  const withRedux = connect(mapStateToProps, mapDispatchToProps)(Basic);
  export default withRedux;