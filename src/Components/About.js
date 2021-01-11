import React, { Component } from 'react'
import { IoIosBook, IoMdWalk, IoMdRibbon } from "react-icons/io";


class About extends Component {

    render() {
        return (
            <>

                <div className='aboutContainer'>
                    <div className='item'>
                        <img  className='about-img' src={require('../imgs/school.jpg')}></img>
                        <h4><b>Education</b><IoIosBook /></h4>
                        <p>I attended California State University, Sacramento.
                            Graduating with a Bachelors in Computer Science.</p> 
                    </div>
                    <div className='item'>
                        <img className='about-img' src={require('../imgs/growth.jpg')}></img>
                        <h4><b>Passion</b><IoMdRibbon /></h4>
                        <p>Seeing something through from start to finish has always given me a sense of
                        fullfillment. Web development is a wonderful way to create, and add value
                        to many peoples lives.</p>
                    </div>
                    <div className='item'>
                        <img className='about-img' src={require('../imgs/mind.jpg')}></img>
                        <h4><b>Drive</b><IoMdWalk /></h4>
                        <p>I have grown quite a thirst for knowledge, and knowing that my work can always
                        improve makes me strive to be better every day.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default About;