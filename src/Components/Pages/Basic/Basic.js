import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import Examples from '../../Utils/Examples';
import CollectData from '../../Utils/CollectData';
const Basic =()=>{
    let header ='Basic Plan';
    let description ='Here you will be able to create portfolios, blogs, ect...';
    let img = 'https://lh3.googleusercontent.com/DdO4EtwzMPrHk1_ICy2CUuJp_flijkJ0VEJ1GAyXUHW-s7qHKTIy3AxiwyYdN42p7HVVi3AxOK6qWG5ABrtTm-8D9w_9yoE4w8wM0SSpmJXYwxmmN_A=s0';

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
                <Examples title={title} cards={cards} description={cardDescription}/>
                <CollectData/>
                <Footer/>

            </div>
        </>
    )
}

export default Basic;