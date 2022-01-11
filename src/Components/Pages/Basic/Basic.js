import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import Payment from '../Payment/Payment';
const Basic = () => {
    window.scrollTo(0, 0);

    return (
        <div className='headerSpacing'>
            <Header />
            <Intro/>
            <Payment plan={'Basic'} price={100}/>
            <Footer />
        </div>
    )
}

export default Basic;