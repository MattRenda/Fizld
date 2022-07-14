import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Payment from '../Payment/Payment';
import Pricing from '../Pricing/Pricing';
import { useLocation } from 'react-router-dom';

const Basic = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const {plan,cost} = location.state;
    return (
        <div className='headerSpacing'>
            <Header />
            {<Payment plan={plan} price={cost}/>}
            <Footer contact={false}/>
        </div>
    )
}

export default Basic;