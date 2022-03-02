import React from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    let header = 'Beautiful website?' + <br /> + 'we\'ve got you covered.';
    let description = 'Quickly design and customize responsive mobile-first sites with Fizld. Unlike website builders, we have no limitations.';
    const title = 'Why Choose Us?'
    const cardDescription = 'If you want a site with no limitations, your in the right place.'

    return (
        <div >
            <div className='headerSpacing'>
                <Header />
                <div style={{ backgroundImage: "url(/imgs/BackgroundImg.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: '50px', backgroundColor: '#fafbfb' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div className='container'>
                            <div>
                                <h1 className="display-5 fw-bold lh-1 mb-3 introHeader">Beautiful website? <br />  we've got you covered.</h1>
                                <p className="lead">{description}</p>
                            </div>
                        </div>                    
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0px' }}>
                        <Link to={'/Pricing'} style={{ fontSize: '20px', color: 'white', padding: '15px 25px', borderRadius: '70px' }} className='btn btn-primary'>Get Started</Link>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img width='70%' alt='homepageimg' src='/imgs/HomePageImg.png' />
                    </div>
                </div>

                <Examples title={title} description={cardDescription} />
                <Footer contact={true} />

            </div>
        </div>
    )
}

export default Home;