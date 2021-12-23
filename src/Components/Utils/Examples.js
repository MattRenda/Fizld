import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


class Examples extends Component {

    render() {
        return (
            <div >

                <div style={{ textAlign: 'center', marginTop: '10vh' }}>
                    <h4><b>What we offer</b></h4>
                </div>

                <div className='row justify-content-center'>
                    <div class="col-md card shadow-sm m-2">
                        <img src={require('../../imgs/RendaStudios.png')} width="100%" height="225" className='card-img-top' />
                        <div class="card-body">
                            <p class="card-text"> ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View Example</button>
                                </div>
                                <small class="text-muted">info</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md card shadow-sm m-2">
                        <img src={require('../../imgs/RendaStudios.png')} width="100%" height="225" className='card-img-top' />
                        <div class="card-body">
                            <p class="card-text"> ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View Example</button>
                                </div>
                                <small class="text-muted">info</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md card shadow-sm m-2">
                        <img src={require('../../imgs/RendaStudios.png')} width="100%" height="225" className='card-img-top' />
                        <div class="card-body">
                            <p class="card-text"> ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View Example</button>
                                </div>
                                <small class="text-muted">info</small>
                            </div>
                        </div>
                    </div>





                    {/*             
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
                    </a> */}
                </div>
            </div>
        )
    }
}

export default Examples