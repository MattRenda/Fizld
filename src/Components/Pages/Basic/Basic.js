import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import Examples from '../../Utils/Examples';
import CollectData from '../../Utils/CollectData';
const Basic =()=>{
    let header ='Basic Plan';
    let description ='Here you will be able to create portfolios, blogs, ect...';
    let img = '';
 return(
        <>
            <div className='container'>
                <Header/>
                <Intro header={header} description={description}/>
                <Examples/>
                <CollectData/>
                <Footer/>

            </div>
        </>
    )
}

export default Basic;