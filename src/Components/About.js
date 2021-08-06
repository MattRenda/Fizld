import React, { Component } from 'react'
import { IoIosBook, IoMdWalk, IoMdRibbon } from "react-icons/io";


class About extends Component {

    render() {
        return (
            <>

                <div className='aboutContainer'>
                    <div className='item'>
                        <img  className='about-img' alt="Education" src={require('../imgs/school.jpg')}></img>
                        <h4><b>Education</b></h4>
                        <p className='left'> I attended California State University, Sacramento.
                            Graduating with a Bachelors in Computer Science.</p> 
                    </div>
                    <div className='item'>
                        <img className='about-img' alt="Passion" src={require('../imgs/growth.jpg')}></img>
                        <h4><b>Passion</b></h4>
                        <p className='left'>Seeing something through from start to finish has always given me a sense of
                        fullfillment. Developing is a wonderful way to create, and add value
                        to many peoples lives.</p>
                    </div>
                    <div className='item'>
                        <img className='about-img' alt="Drive" src={require('../imgs/mind.jpg')}></img>
                        <h4><b>Drive</b></h4>
                        <p className='left'>I have grown quite a thirst for knowledge, and knowing that my work can always
                        improve makes me strive to be better every day.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default About;