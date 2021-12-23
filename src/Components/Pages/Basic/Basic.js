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

    const title = 'Basic plan Examples'
    const cards = [
        {
            title:'Cook collective',
            description:'Single page, responsive, customer feedback',
            img:'https://cookcollectivekitchen.com/wp-content/uploads/2019/07/we-serve-you.svg',
            href:'https://cookcollectivekitchen.com/'
        },
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
                <Intro header={header} description={description}/>
                <Examples title={title} cards={cards}/>
                <CollectData/>
                <Footer/>

            </div>
        </>
    )
}

export default Basic;