import React from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Intro from '../../Utils/Intro'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import ContactPage from '../../Utils/ContactPage';
import { Place } from '@mui/icons-material';
const Home = () => {
    let header = `Build websites with MendaSoft`;
    let description = 'Quickly design and customize responsive mobile-first sites with MendaSoft. Unlike website builders, we have no limitations. We offer top tier SEO, Storage, and customization.';
    let img = require('../../../imgs/heroImg.png');
    const title = 'Why Choose Us?'
    const cardDescription = 'If you want a site with no limitations, your in the right place.'
 
    return (
        <>
            <div >
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