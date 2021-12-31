import React from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Intro from '../../Utils/Intro'
import Header from '../../Utils/Header';
import CollectData from '../../Utils/CollectData';
import Footer from '../../Utils/Footer';
import ContactPage from '../../ContactPage';
const Home = () => {
    let header = 'Matthew Renda - Web Developer & Designer';
    let description = 'Hiring a web developer means saying good bye to things like, the website not looking quite "Right", poor mobile experience, Cookie-cutter templates, Missing key Search Engine Optimization elements, and limited ecommerce functionality.';
    let img = require('../../../imgs/heroImg.png');
    const title = 'What we offer'
    const cardDescription = 'Checkout the most desirable features we offer'
    const cards = [
        {
            title: 'Creativity',
            description: 'Responsive, mobile friendly sites. Designed to fit your needs',
            img: 'https://eduport.webestica.com/assets/images/courses/4by3/14.jpg'
        },
        {
            title: 'SEO',
            description: 'Completely optimized applications',
            img: 'https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/review-process.svg'
        },
        {
            title: 'Customer care',
            description: 'Rest assured knowing you have 24/7 support',
            img: 'https://leap.mediumra.re/assets/img/article-1.jpg'
        }
    ]
    const inputFields =[
        {
            id:'',
            type:'',
            value:''
        },
        {
            id:'',
            type:'',
            value:''
        }
    ]
    return (
        <>
            <div >
                <Header />
                <Intro header={header} description={description} img={img} />
                <Plans />
                <div style={{position:'relative'}} className='off-white pb-5'>
                    <div style={{zIndex:'0'}} class="custom-shape-divider-top">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <Examples title={title} cards={cards} description={cardDescription} />
                    <ContactPage/>
                </div>
               
                <Footer />

            </div>
        </>
    )
}

export default Home;