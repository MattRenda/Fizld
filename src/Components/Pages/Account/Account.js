import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from '../../Redux/selectors';
import ContactPage from '../../Utils/ContactPage';
const Account = ({ user }) => {
    window.scrollTo(0, 0);
    return (
        <div className='headerSpacing'>
            <Header />
            <div className='container'>

                {
                user.SiteUrl == "no plan" ? 
                    <div style={{height: '70vh', marginTop:'30vh'}}>
                        <h2 style={{position:'relative', textAlign:'center'}}>Please contact us to get started</h2>
                        <ContactPage/>
                    </div>
                    :
                    <div style={{marginTop:'10vh'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p className='btn btn-success'>{user.Plan}</p>
                                <p></p>
                            </div>
                            <div>
                                <a href={user.SiteUrl} target='_blank' rel="noopener noreferrer" className='m-2'>View Site</a>
                            </div>
                        </div>
                        <div className='mt-2 mb-5'>

                            <iframe title='Site' style={{ width: '100%', height: '70vh' }} src={user.SiteUrl} />

                        </div>
                        <div className='mt-2 mb-5'>
                            <h2>Change Log</h2>
                            <ul>
                                <li>updated feature</li>
                                <li>updated feature</li>
                                <li>updated feature</li>
                                <li>updated feature</li>
                            </ul>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}} className='mt-2 mb-5'>
                            <div>
                                <h2>Agreed upon contract</h2>
                                <ul>
                                    <li> feature</li>
                                    <li> feature</li>
                                    <li> feature</li>
                                    <li> feature</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Monthly support</h2>
                                <ul>
                                    <li> Bug fixes</li>
                                    <li> Q/A </li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectors.getUser(),
})

const mapDispatchToProps = (dispatch) => ({
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Account);
export default withRedux;