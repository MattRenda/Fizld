import React from 'react'
import Examples from './Examples'
import Plans from './Plans'
import Intro from '../../Utils/Intro'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
const Home =()=>{
       let header ='Matthew Renda - Web Developer & Designer';
       let description ='Hiring a web developer means saying good bye to things like, the website not looking quite "Right", poor mobile experience, Cookie-cutter templates, Missing key Search Engine Optimization elements, and limited ecommerce functionality.';
       let img = 'https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png';
    return(
        <>
            <div className='container'>
                <Header/>
                <Intro header={header} description={description} img={img}/>
                <Plans/>
                <Examples/> 
                <Footer/>

            </div>
        </>
    )
}

export default Home;