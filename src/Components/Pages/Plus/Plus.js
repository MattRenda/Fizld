import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
const Plus =()=>{
    let header ='Plus Plan';
    let description ='Here you will be able to create a small store or blog.';
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

export default Plus;