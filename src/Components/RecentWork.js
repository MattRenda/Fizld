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
                        href='https://devchamp.cdt.ca.gov/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>
                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px'}}>
                            <img style={{ width: '300px', height: 'auto' }} src={require('../imgs/CHAMP.png')}
                                alt="CHAMP logo"
                            />
                        </div>
                        <p>
                            React, Redux, MaterialUI, HTML5/CSS3
                        </p>
                    </a>

                    <a
                        href='https://www.rendastudios.com/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>
                        
                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px' }}>
                            <img style={{ width: '300px', height: 'auto' }} src={require('../imgs/RendaStudios.png')}
                                alt="RendaStudios"
                            />
                        </div>
                        <p>
                            React, Redux, MaterialUI, HTML5/CSS3
                        </p>
                    </a>
                    <a
                        href='https://atepex.herokuapp.com/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>

                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px' }}>
                            <img style={{ width: '300px', height: 'auto'}} src={require('../imgs/AC.png')}
                                alt="ACHeatinglogo"
                            />
                        </div>
                        <p>
                            React, Redux ,Node, Express, Mongo, HTML5/CSS3
                        </p>
                    </a>

                    <a
                        href='https://mattrenda.github.io/Button/'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{margin:"auto 0px"}}>

                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px'}}>
                            <img style={{ width: '300px', height: 'auto' }} src={require('../imgs/ButtonGame.png')}
                                alt="Button"
                            />
                        </div>
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