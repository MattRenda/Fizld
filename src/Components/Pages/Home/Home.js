import React from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    let header = 'Beautiful website?' + <br /> + 'we\'ve got you covered.';

    const src = window.screen.width >= 1024 && window.screen.height >= 768? '/imgs/BackgroundImg2.png': '/imgs/BackgroundImg2Mobile.png'
    return (
        <div >
            <div className='headerSpacing'>
                <Header />
                <div style={{ backgroundImage: "url(/imgs/BackgroundImg.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: '50px', backgroundColor: '#fafbfb' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div className='container'>
                            <div>
                                <h1 className="display-5 fw-bold lh-1 mb-3 introHeader">Beautiful website? <br />  we've got you covered.</h1>
                                <p className="lead">Make your dream website come true for 50$/month</p>
                            </div>
                        </div>                    
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0px 40px 0px' }}>
                        <Link to={'/Pricing'} style={{color: 'white', padding: '15px 25px', borderRadius: '70px', backgroundColor:'#1170a7'}} className='btn'>Get Started</Link>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img width='70%' alt='homepageimg' src={src} />
                    </div>
                </div>
              
                <Examples />
                <Footer contact={true} />

            </div>
        </div>
    )
}

export default Home;