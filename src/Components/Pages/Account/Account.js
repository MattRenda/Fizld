import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import { Link } from 'react-router-dom';

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
                    
                        <div style={{display:'flex',justifyContent:'space-between', flexWrap:'wrap'}} className='mt-2 mb-5'>
                            <div>
                                <h2>Agreed upon contract</h2>
                                <ul>
                                    {user.features?.map(feature=>
                                    <li style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
                                        {feature.name}
                                        <Link to={'/basic'} state={{plan:feature.name,cost:feature.cost}} className='btn btn-light'>{feature.status}</Link>    
                                    </li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h2>Monthly support</h2>
                                <ul>
                                    <li> Bug fixes</li>
                                    <li> Q/A </li>   
                                    <li> Add Feat</li> 
                                    <li> Storage fees</li>
                                    <li> SSL certificate</li>  
                                </ul>
                                <Link to={'/basic'}  state={{plan:"Monthly Support",cost:50}} className='btn btn-success'>Sign up for auto pay</Link>                              
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