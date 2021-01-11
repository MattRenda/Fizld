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
                        href='https://atepex.herokuapp.com/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <div className='shadow-card'>
                            <img style={{ width: 'auto', height: '200px' }} src={require('../imgs/AC_heating_logo.png')}
                                alt="ACHeatinglogo"
                            />
                        </div>
                    </a>

                    <a
                        href='https://www.rendastudios.com/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <div >
                            <img style={{ width: 'auto', height: '200px' }} src="data:image/png;base64,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"
                                alt="RendaStudios"
                            />
                        </div>
                    </a>

                    <a
                        href='https://mattrenda.github.io/Button/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <div >
                            <img style={{ width: 'auto', height: '200px' }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJU4sLEQiNp9Z4dnSV3tjOO1ZU8xkDMX6juA&usqp=CAU'}
                                alt="Button"
                            />
                        </div>
                    </a>
                </div>
                </>
        )
    }
}

export default RecentWork