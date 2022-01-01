import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import ContactPage from '../../ContactPage';
const Basic = () => {

    //Intro props
    let header = 'Basic Plan';

    let description = `Here you will be able to create portfolios, blogs, ect... This package offers a one page application, free SSL certificate, free hosting, and 2 revisions.`;

    let img = 'https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730__340.png';
    /******************************************** */
    return (
        <>
            <div className='container'>
                <Header />
                <Intro header={header} description={description} />
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">1. One page</li>
                    <li class="list-group-item">2. SSL</li>
                    <li class="list-group-item">3. Free hosting</li>
                    <li class="list-group-item">4. 2 Revisions</li>
                </ul>
                <ContactPage title={'What would you like out of this plan?'} plan={'Basic'}/>
                <Footer />

            </div>
        </>
    )
}

export default Basic;