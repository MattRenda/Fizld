import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Payment from '../Payment/Payment';

const Plus =()=>{
    window.scrollTo(0, 0);

    return(
        <div className='headerSpacing'>
            <Header/>
            <Payment plan={'Plus'} price={'$250.00'}/>
            <Footer/>
        </div>
    )
}

export default Plus;