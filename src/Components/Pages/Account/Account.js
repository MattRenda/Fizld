import React, {useEffect, useState} from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from '../../Redux/selectors';
import * as actions from '../../Redux/actions';
import ContactPage from '../../Utils/Contact/ContactPage';
const stripePromise = loadStripe("pk_live_51KGXrHC5jJgfrH90JGNtRgxVKZ0COX1xW1KRTVYa5YdIsKJxhkA7g13jFgYDWiwWYVVwiE7MbrjKTet0DkxDVyGL000vkf3dW2");


const Account = ({ user,setUser }) => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const [deviceRatio,setdeviceRatio] = useState({width:1920, height:1080});
    const fullName = user.FirstName + ' ' + user.LastName;
    const processPayment=(price,email,fullName,description)=>{
        fetch("https://4tgrm96sfd.execute-api.us-east-1.amazonaws.com/default/Fizld-payment", {
            method: "POST",
            body: JSON.stringify({ price: price, email: email, fullName:fullName,description:description}),
        })
        .then((res) => res.text())
        .then((data) => window.location.replace(data))
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
        const input={};
        const {Email,Password} =JSON.parse(sessionStorage.getItem('ms_id'))
        input.email = Email;
        input.password = Password;
        if(input.password && input.email){
            setUser(input)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className='headerSpacing'>
            <Header />
            <div className='container fluid'>

                {
                user.SiteUrl === "no plan" ? 
                    <div style={{height: '70vh', marginTop:'30vh'}}>
                        <h2 style={{position:'relative', textAlign:'center'}}>Please contact us to get started</h2>
                        <ContactPage/>
                    </div>
                    :
                    <div style={{marginTop:'15vh'}}>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between',width:'100%'}}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{margin:'5px',fontSize:'120%',fontWeight:'bold'}} className='btn btn-success'>{user.Plan}</p>
                                <p></p> 
                            </div>
                            <div>
                                <a href={user.SiteUrl} target='_blank' rel="noopener noreferrer" style={{margin:'5px',fontSize:'120%',fontWeight:'bold',backgroundColor:'#1170a7',color:'white'}}  className='btn'>View Site</a>
                            </div>
                        </div>
                        <div className='iframe'>
                            <div  style={{width:'770px', height:'500px', overflow:'hidden',textAlign:`${deviceRatio.width === 1920?'none':'center'}`}}>
                                <iframe title='Site' style={{ width: deviceRatio.width, height: deviceRatio.height,transform:`${deviceRatio.width === 1920?'scale(0.4,0.4)':'scale(0.7,0.7)'}`,transformOrigin:`top ${deviceRatio.width === 1920?'left':''}`}} src={user.SiteUrl} />
                            </div>
                            <div>
                                <button style={{margin:'5px',fontSize:'120%',fontWeight:'bold',backgroundColor:'#1170a7',color:'white'}} className='btn' onClick={()=>setdeviceRatio({width:375, height: 667})}>Mobile</button>
                                <button style={{margin:'5px',fontSize:'120%',fontWeight:'bold',backgroundColor:'#1170a7',color:'white'}} className='btn' onClick={()=>setdeviceRatio({width:1920, height: 1080})}>Desktop</button>
                            </div>
                            {/* 1920 x 1080 */}
                            {/* 360 x 740 */}
                        </div>
                    
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'start', flexWrap:'wrap',height:'500px'}} className='mt-2 mb-5'>
                            <div>
                                <h2 style={{padding:'30px 0',fontWeight:'bold',fontSize:'250%'}}>Agreed upon contract</h2>
                                    {user.features?.map(feature=>
                                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px',alignItems:'center',backgroundColor:'#f7f7f7', borderRadius:'10px', padding:'10px'}}>
                                        {feature.name}
                                        <button style={{margin:'5px',fontSize:'120%',fontWeight:'bold'}} disabled={feature.status === 'done'?false:true} onClick={()=> processPayment(feature.cost,user.Email,fullName,feature.name)} className={`btn btn-${feature.status === 'done'?"success":"light"}`}>{feature.status.toUpperCase() === "DONE"? "Pay Now": feature.status.toUpperCase()}</button>    
                                    </div>
                                    )}
                            </div>
                            <div >
                                <h2 style={{padding:'30px 0',fontWeight:'bold',fontSize:'250%'}}>Monthly support</h2>
                                <div style={{backgroundColor:'#f7f7f7',display:'flex',alignItems:'center',justifyContent:'space-between', borderRadius:'10px', padding:'10px'}}>
                                    <div>
                                        <div> Bug fixes</div>
                                        <div> Q/A </div>   
                                        <div> Add Feat</div> 
                                        <div> Storage fees</div>
                                        <div> SSL certificate</div>  
                                    </div>
                                    <div>
                                        <button style={{margin:'5px',fontSize:'120%',fontWeight:'bold'}} disabled={user.monthlyPayment === true?true:false} onClick={()=> processPayment(50,user.Email,fullName,'Hosting')} className='btn btn-success'>{user.monthlyPayment === true?"Paid for the month!":"Pay now"}</button>    
                                    </div>
                                </div>
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
    setUser : (input) => dispatch(actions.setUser(input))

})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Account);
export default withRedux;