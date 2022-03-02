import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Payment from '../Payment/Payment';
import Pricing from '../Pricing/Pricing';

const Basic = () => {
    window.scrollTo(0, 0);

    return (
        <div className='headerSpacing'>
            <Header />
            <div className='container'>
              
            <Pricing/>  
            </div>
            {/* <Payment plan={'Basic'} price={100}/> */}
            <Footer contact={false}/>
        </div>
    )
}

export default Basic;