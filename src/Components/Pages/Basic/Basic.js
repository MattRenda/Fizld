import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
const Basic =()=>{
    let header ='Basic Plan';
    let description ='Here you will be able to create portfolios, blogs, ect...';
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

export default Basic;