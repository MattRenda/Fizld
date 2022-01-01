import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import ContactPage from '../../ContactPage';

const Plus =()=>{
    window.scrollTo(0, 0);

    let header ='Plus Plan';
    let description = `Here you will be able to create a store or blog. This package offers a multiple page application, free SSL certificate, free hosting, and 3 revisions.`;
    let img = '';
 return(
        <>
            <div className='container'>
                <Header/>
                <Intro header={header} description={description}/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">1. Multiple pages</li>
                    <li class="list-group-item">2. SSL</li>
                    <li class="list-group-item">3. Free hosting</li>
                    <li class="list-group-item">4. 3 Revisions</li>
                </ul>
                <ContactPage title={'What would you like out of this plan?'} plan={'Plus'}/>
                <Footer/>

            </div>
        </>
    )
}

export default Plus;