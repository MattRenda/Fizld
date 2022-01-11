import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Payment from '../Payment/Payment';

const Premium =()=>{
    window.scrollTo(0, 0);

    return(
        <div className='headerSpacing'>
            <Header/>
            <Payment plan={'Premium'} price={400}/>
            <Footer/>
        </div>
    )
}

export default Premium;