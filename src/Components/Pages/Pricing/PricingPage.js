import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Pricing from '../Pricing/Pricing';
import { Link } from 'react-router-dom';
import ContactPage from '../../Utils/ContactPage';

const PricingPage = () => {
    window.scrollTo(0, 0);

    return (
        <div className='headerSpacing'>
            <Header />
            <Pricing/>  
            {/* <div style={{width:'100%',textAlign:'center', marginBottom:'20px'}}>
                <Link to={'/Pricing'} style={{color: 'white', padding: '15px 25px', borderRadius: '70px' }} className='btn btn-primary'>Create my site</Link>
            </div> */}
            <div className='mt-5 mb-5' style={{ display: 'flex', justifyContent: 'center', }}>
                <ContactPage title={'Message us to get started!'} />
            </div>
            <Footer contact={false}/>
        </div>
    )
}

export default PricingPage;