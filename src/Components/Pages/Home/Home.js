import React, {lazy} from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Intro from '../../Utils/Intro'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
const Home = () => {
    let header = `Build websites with Fizld`;
    let description = 'Quickly design and customize responsive mobile-first sites with Fizld. Unlike website builders, we have no limitations. We offer top tier SEO, Storage, and customization.';
    const img = lazy(()=>require('../../../imgs/heroImg.webp'));
    const title = 'Why Choose Us?'
    const cardDescription = 'If you want a site with no limitations, your in the right place.'
 
    return (
        <>
            <div className='headerSpacing'>  
                <Header />
                <Intro header={header} description={description} img={img} />
                <Plans />
                <Examples title={title} description={cardDescription} />
                <Footer />
               
            </div>
        </>
    )
}

export default Home;