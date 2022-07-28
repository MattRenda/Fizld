import React, {useState} from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import { useNavigate } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from '../../Redux/selectors';
import ContactPage from '../../Utils/ContactPage';
const Account = ({ user }) => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const [deviceRatio,setdeviceRatio] = useState({width:1920, height:1080});
    return (
        <div className='headerSpacing'>
            <Header />
            <div className='container'>

                {
                user.SiteUrl === "no plan" ? 
                    <div style={{height: '70vh', marginTop:'30vh'}}>
                        <h2 style={{position:'relative', textAlign:'center'}}>Please contact us to get started</h2>
                        <ContactPage/>
                    </div>
                    :
                    <div style={{marginTop:'15vh'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p className='btn btn-success'>{user.Plan}</p>
                                <p></p> 
                            </div>
                            <div>
                                <a href={user.SiteUrl} target='_blank' rel="noopener noreferrer" className='m-2'>View Site</a>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'100%',position:'relative',alignItems:'center'}}>
                            <div style={{width:'770px', height:'500px', overflow:'hidden',textAlign:`${deviceRatio.width === 1920?'none':'center'}`}}>
                                <iframe title='Site' style={{ width: deviceRatio.width, height: deviceRatio.height,transform:`${deviceRatio.width === 1920?'scale(0.4,0.4)':'scale(0.7,0.7)'}`,transformOrigin:`top ${deviceRatio.width === 1920?'left':''}`}} src={user.SiteUrl} />
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={()=>setdeviceRatio({width:375, height: 667})}>mobile</button>
                                <button className='btn btn-primary' onClick={()=>setdeviceRatio({width:1920, height: 1080})}>desktop</button>
                            </div>
                            {/* 1920 x 1080 */}
                            {/* 360 x 740 */}
                        </div>
                    
                        <div style={{display:'flex',justifyContent:'space-between', flexWrap:'wrap'}} className='mt-2 mb-5'>
                            <div>
                                <h2>Agreed upon contract</h2>
                                <ul>
                                    {user.features?.map(feature=>
                                    <li style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
                                        {feature.name}
                                        <button disabled={feature.status === 'done'?false:true} onClick={()=> navigate('/basic',{state:{plan:feature.name,cost:feature.cost}})} className={`btn btn-${feature.status === 'done'?"success":"light"}`}>{feature.status.toUpperCase() === "DONE"? <span>Item Completed <br/> Pay Now</span>: feature.status.toUpperCase()}</button>    
                                    </li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h2>Monthly support</h2>
                                <ul style={{listStyle:'none', padding:'0px'}}>
                                    <li> Bug fixes</li>
                                    <li> Q/A </li>   
                                    <li> Add Feat</li> 
                                    <li> Storage fees</li>
                                    <li> SSL certificate</li>  
                                </ul>
                                <button disabled={user.monthlyPayment === true?true:false} onClick={()=> navigate('/basic',{state:{plan:"Monthly Support",cost:50}})} className='btn btn-success'>{user.monthlyPayment === true?"Paid for the month!":"Pay now"}</button>    
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