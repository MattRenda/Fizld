import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Pricing from '../Pricing/Pricing';

const PricingPage = () => {
    window.scrollTo(0, 0);

    return (
        <div className='headerSpacing'>
            <Header />
            <Pricing/>  
            <Footer contact={false}/>
        </div>
    )
}

export default PricingPage;