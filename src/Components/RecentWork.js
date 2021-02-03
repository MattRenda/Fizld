import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


class RecentWork extends Component {

    render() {
        return (
            <>
                        <div style={{textAlign:'center', marginTop:'10rem'}}>
                            <h4><b>My recent work</b></h4>
                            <a href=''>
                                View my GitHub
                            </a>
                        </div>

                <div className='recentWorkContainer'>
            
                <a
                        href='https://uat.vaccinefinder.covid19.ca.gov/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>
                        
                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px', marginBottom:'10px'}}>
                        
                            <img style={{ width: '280px', height: 'auto' }} src={require('../imgs/VaccineFinder.png')}
                                alt="CHAMP logo"
                            />
                        </div>
                        <strong>Vaccine Finder</strong>
                        <p>
                            React, Redux, HTML5/CSS3, Nodejs, Azure
                        </p>
                    </a>

                <a
                        href='https://devchamp.cdt.ca.gov/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>
                        
                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px', marginBottom:'10px'}}>
                        
                            <img style={{ width: '280px', height: 'auto' }} src={require('../imgs/CHAMP.png')}
                                alt="CHAMP logo"
                            />
                        </div>
                        <strong>CHAMP</strong>
                        <p>
                            React, Redux, MaterialUI, HTML5/CSS3, Azure
                        </p>
                    </a>

                    <a
                        href='https://www.rendastudios.com/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>
                        
                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px', marginBottom:'10px' }}>
                            <img style={{ width: '280px', height: 'auto' }} src={require('../imgs/RendaStudios.png')}
                                alt="RendaStudios"
                            />
                        </div>
                        <strong>Renda Studios</strong>
                        <p>
                            React, Redux, Azure function app,<br/> MaterialUI, HTML5/CSS3, Azure
                        </p>
                    </a>
                    <a
                        href='https://atepex.herokuapp.com/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>

                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px', marginBottom:'10px' }}>
                            <img style={{ width: '280px', height: 'auto'}} src={require('../imgs/AC.png')}
                                alt="ACHeatinglogo"
                            />
                        </div>
                        <strong>Vaughns A/C and Heating</strong>
                        <p>
                            React, Redux ,Node, Express, Mongo,<br/> HTML5/CSS3
                        </p>
                    </a>

                    <a
                        href='https://mattrenda.github.io/Button/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px", marginBottom:'0px'}}>

                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px', marginBottom:'10px'}}>
                            <img style={{ width: '280px', height: 'auto' }} src={require('../imgs/ButtonGame.png')}
                                alt="Button"
                            />
                        </div>
                        <strong>Button Challenge</strong>
                        <p>
                            HTML5/CSS3, Javascript
                        </p>
                    </a>
                </div>
                </>
        )
    }
}

export default RecentWork