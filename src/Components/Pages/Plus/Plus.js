import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Payment from '../../Utils/Payment';

const Plus =()=>{
    window.scrollTo(0, 0);

    return(
        <div className='headerSpacing'>
            <Header/>
            <Payment plan={'Plus'} price={250}/>
            <Footer/>
        </div>
    )
}

export default Plus;