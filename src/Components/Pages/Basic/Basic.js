import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import Payment from '../Payment/Payment';
const Basic = () => {
    window.scrollTo(0, 0);

    return (
        <div>
            <Header />
            <Payment plan={'Basic'} price={'$100.00'}/>
            <Footer />
        </div>
    )
}

export default Basic;