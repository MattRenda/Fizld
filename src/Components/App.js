import React from 'react'
import Header from './Header'
import RecentWork from './RecentWork'
import Footer from './Footer'
import About from './About'
import Intro from './intro'
import '../index.css'
import '../Style/style.css'
import HowItWorks from './HowItWorks'

const App =()=>{
       
    return(
        <>
            <div className='page'>
                <Header/>
                <HowItWorks/>
                {/* <Intro/>
                <About/>*/}
                <RecentWork/> 
            </div>
            <Footer/>
        </>
    )
}

export default App;