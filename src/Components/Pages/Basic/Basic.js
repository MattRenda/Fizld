import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import Examples from '../../Utils/Examples';
import CollectData from '../../Utils/CollectData';
const Basic =()=>{
    let header ='Basic Plan';
    let description ='Here you will be able to create portfolios, blogs, ect...Here you will be able to create portfolios, blogs, ect...Here you will be able to create portfolios, blogs, ect...Here you will be able to create portfolios, blogs, ect...';
    let img = 'https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730__340.png';

    const title = 'Basic plan Examples'
    const cardDescription ='These businesses are using single page applications';
    const cards = [
        {
            title:'Cook collective',
            description:'Single page, responsive, customer feedback',
            img:'https://cookcollectivekitchen.com/wp-content/uploads/2019/07/we-serve-you.svg',
            href:'https://cookcollectivekitchen.com/'
        }
    ]
 return(
        <>
            <div className='container'>
                <Header/>
                <Intro header={header} img={img} description={description}/>
                <CollectData/>
                <Footer/>

            </div>
        </>
    )
}

export default Basic;