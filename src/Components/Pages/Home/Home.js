import React from 'react'
import Examples from '../../Utils/Examples'
import Plans from './Plans'
import Intro from '../../Utils/Intro'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
const Home =()=>{
       let header ='Matthew Renda - Web Developer & Designer';
       let description ='Hiring a web developer means saying good bye to things like, the website not looking quite "Right", poor mobile experience, Cookie-cutter templates, Missing key Search Engine Optimization elements, and limited ecommerce functionality.';
       let img = 'https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png';
       const title = 'What we offer'
       const cards = [
           {
               title:'Custom',
               description:'Responsive, mobile friendly sites. Designed to fit your needs.',
               img:'https://eduport.webestica.com/assets/images/courses/4by3/14.jpg'
           },
           {
                title:'SEO',
                description:'Completely optimized applications',
                img:'https://www.singlegrain.com/wp-content/uploads/2021/08/SG-6-SEO-Trends-You-Cant-Ignore-in-2022.png'
            },   
            {
                title:'24/7 Support',
                description:'Rest assured knowing you have support.',
                img:'https://eduport.webestica.com/assets/images/courses/4by3/15.jpg'
            }
       ]
    return(
        <>
            <div >
                <Header/>
                <Intro header={header} description={description} img={img}/>
                <Plans/>
                <Examples title={title} cards={cards}/> 
                <Footer/>

            </div>
        </>
    )
}

export default Home;