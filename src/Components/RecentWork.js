import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


class RecentWork extends Component {

    render() {
        return (
            <>
                <div style={{textAlign:'center', marginTop:'10vh'}}>
                    <h4><b>What we offer</b></h4>
                    
                </div>

                <div className='recentWorkContainer'>
            
                    <a
                    href='https://myvaccinerecord.cdph.ca.gov/'
                    target='_blank'
                    rel="noopener noreferrer"
                    style={{margin:"auto 0px"}}>
                    
                        <div style={{border:'1px solid #a6b2bc',margin:'30px 10px', marginBottom:'10px'}}>
                        
                            <img style={{ width: '280px', height: 'auto' }} src={require('../imgs/MyvaccineRecordPreview.png')}
                                alt="CHAMP logo"
                            />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </a>

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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </a>
                </div>
                </>
        )
    }
}

export default RecentWork