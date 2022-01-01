import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import ContactPage from '../../ContactPage';
const Premium =()=>{
    let header ='Premium Plan';
    let description =`Here you will be able to create most anything you\'d like. 
    This package offers a multiple page application, free SSL certificate, free hosting, 5 revisions, and design planning sessions.`;

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
                    <li class="list-group-item">4. 5 Revisions</li>
                    <li class="list-group-item">5. Design planning sessions</li>
                </ul>
                <ContactPage title={'What would you like out of this plan?'} plan={'Premium'}/>
                <Footer/>
            </div>
        </>
    )
}

export default Premium;