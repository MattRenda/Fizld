import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Payment from '../Payment/Payment';

const Premium =()=>{
    window.scrollTo(0, 0);

    return(
        <div>
            <Header/>
            <Payment plan={'Premium'} price={'$400.00'}/>
            <Footer/>
        </div>
    )
}

export default Premium;