import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


class Examples extends Component {

    render() {
        return (
            <div>

                <div style={{textAlign: 'center', marginTop: '10vh' }}>
                    <h2>What we offer</h2>
                </div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div class="col-md card shadow-sm m-2">
                            <img src={require('../../imgs/RendaStudios.png')} width="100%" height="225" className='card-img-top' />
                            <div class="card-body">
                                <p class="card-text"> Custom</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">Responsive, mobile friendly sites. Designed to fit your needs.</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md card shadow-sm m-2">
                            <img src={require('../../imgs/RendaStudios.png')} width="100%" height="225" className='card-img-top' />
                            <div class="card-body">
                                <p class="card-text"> SEO</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">Completely optimized applications</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md card shadow-sm m-2">
                            <img src={require('../../imgs/RendaStudios.png')} width="100%" height="225" className='card-img-top' />
                            <div class="card-body">
                                <p class="card-text"> 24/7 support</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">Rest assured knowing you have support.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Examples