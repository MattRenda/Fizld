import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
const Premium =()=>{
    let header ='Premium Plan';
    let description ='Here you will be able to create most anything you\'d like.';
    let img = '';
 return(
        <>
            <div className='container'>
                <Header/>
                <Intro header={header} description={description}/>
                <Footer/>

            </div>
        </>
    )
}

export default Premium;