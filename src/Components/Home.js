import React from 'react'
import RecentWork from './RecentWork'
import HowItWorks from './HowItWorks'
import Header from './Header';
import Footer from './Footer';
const Home =()=>{
       
    return(
        <>
            <div className='container'>
                <Header/>
                <HowItWorks/>
                <RecentWork/> 
                <Footer/>

            </div>
        </>
    )
}

export default Home;