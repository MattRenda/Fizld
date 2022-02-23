import React from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Intro from '../../Utils/Intro'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    let header = `Build websites with Fizld`;
    let description = 'Quickly design and customize responsive mobile-first sites with Fizld. Unlike website builders, we have no limitations.';
    const title = 'Why Choose Us?'
    const cardDescription = 'If you want a site with no limitations, your in the right place.'

    return (
        <div style={{backgroundImage: "url(/imgs/BackgroundImg.png)",backgroundRepeat:'no-repeat',paddingTop:'50px', backgroundColor:'#f6f6f6'}}>
            <div className='headerSpacing'>
                <Header />
                <div style={{textAlign:'center'}}>
                    <Intro header={header} description={description} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin:'50px 0px' }}>
                    <Link to={'/Pricing'} style={{ fontSize: '150%', color: 'white', padding: '10px 20px', borderRadius: '70px' }} className='btn btn-primary'>Get Started</Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img alt='homepageimg' src='/imgs/HomePageImg.png' />
                </div>
                <Examples title={title} description={cardDescription} />
                <Footer />

            </div>
        </div>
    )
}

export default Home;