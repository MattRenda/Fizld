import React , {useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import ExampleAnimation from '../../../lotties-animations/ExampleAnimation.json';
import Components from '../../../lotties-animations/components.json';
import Border from '../../../lotties-animations/border.json';
import ButtonGame from '../../Utils/ButtonGame';
import ContactPage from '../../Utils/Contact/ContactPage';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Pricing = () => {    

    return (
        <div className=''>
            <div style={{ position: 'absolute', backgroundColor: '#0a63963b', width: '100%', height: '95vh', top: '0px', left: '0px', zIndex: 0 }}></div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative', zIndex: 1,paddingTop: '30px' }}>
                <div style={{textAlign:'center'}} className='container'>
                <h3 style={{fontFamily:'Oswald'}}>
                    <span style={{ color: 'white', position: 'relative', top: '-15px', fontWeight: 'lighter', fontSize: '150%',fontFamily:'Oswald' }}>$</span>
                    <b style={{ color: 'white', fontSize: '350%',fontFamily:'Oswald' }}>50</b>
                    <span style={{ fontSize: '65%',fontFamily:'Oswald',color:'#0a639694' }}>/month</span>
                </h3>
                <h3 style={{margin:'0px', fontSize: '120%', color: '#0a639694',fontFamily:'Oswald' }}>For any site</h3>
                <h3 style={{ margin:'0px',fontSize: '120%', color: '#0a639694',fontFamily:'Oswald' }}>+</h3>
                <h3 style={{ margin:'0px',fontSize: '120%', color: '#0a639694',fontFamily:'Oswald'}}><b style={{ color: 'white', fontSize: '120%', paddingRight:'5px' }}>ONE TIME</b>  payment per feature</h3>
                                  
                </div>
                <h3 className='container' style={{color: '#0a639694', textAlign:'center',fontFamily:'Oswald'}}>Pick and choose from the components offered below and let us take care of the rest!</h3>

            </div>
            <div  className='mt-5 mb-5'>
                <div style={{display: 'flex',flexWrap:'wrap',justifyContent:'space-evenly', padding:'50px 20px' }}>
                   
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', margin:'10px'}}>
                        <div style={{position:'relative',height:'330px', width:'320px',backgroundColor:'#0a639694',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',padding:'30px'}}>
                            <h2 style={{fontSize: '250%', color: 'white',fontFamily:'Oswald'}}>Static Content</h2>
                        </div>
                        <div  style={{position:'relative',height:'350px', width:'320px',backgroundColor:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',padding:'30px'}}>
                            <div >
                                <p style={{margin:'0px'}}>(Text and images per page)</p>
                                <img alt='static Example' width={'250px'} height={'auto'} src='/imgs/Img_text_Example.png' />
                                <div style={{marginTop:'10px'}}>
                                    <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                                    <b style={{ color: '#508096', fontSize: '150%' }}>100</b>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', margin:'10px'}}>
                        <div style={{position:'relative',height:'330px', width:'320px',backgroundColor:'#0a639694',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',padding:'30px'}}>
                            <h2 style={{fontSize: '250%', color: 'white',fontFamily:'Oswald'}}>Animations</h2>
                        </div>
                        <div  style={{position:'relative',height:'350px', width:'320px',backgroundColor:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',padding:'30px'}}>
                            <div>
                                <div style={{ textAlign: 'center' }}>
                                <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: Components
                                    }}
                                    height={'200px'}
                                    width={'200px'}
                                />
                                </div>
                            </div>
                            <div style={{marginTop:'10px'}}>
                                <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                                <b style={{ color: '#508096', fontSize: '150%' }}>200</b>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', margin:'10px'}}>
                        <div style={{position:'relative',height:'330px', width:'320px',backgroundColor:'#0a639694',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',padding:'30px'}}>
                                <h2 style={{fontSize: '250%', color: 'white',fontFamily:'Oswald'}}>Logos</h2>
                        </div>
                        <div style={{position:'relative',height:'350px', width:'320px',backgroundColor:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',padding:'30px'}}>
                            <div>
                                <div style={{ textAlign: 'center' }}>
                                    <img alt='logo Example' width={'250px'} height={'auto'} src='/imgs/Example_logo.png' />
                                </div>
                                <div style={{marginTop:'30px'}}>
                                    <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                                    <b style={{ color: '#508096', fontSize: '150%' }}>150</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', margin:'10px'}}>
                        <div style={{position:'relative',height:'330px', width:'320px',backgroundColor:'#0a639694',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',padding:'30px'}}>
                            <h2 style={{fontSize: '200%', color: 'white',fontFamily:'Oswald'}}>Logical Components</h2>
                        </div>
                        <div  style={{position:'relative',height:'330px', width:'320px',backgroundColor:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',padding:'30px'}}>
                            <div>
                                <div style={{width: '300px',height:'90px', position: 'relative' }}>
                                    <ButtonGame />
                                </div>
                                <div style={{marginTop:'120px'}}>
                                    <b style={{ color: '#508096', fontSize: '100%' }}>As low as</b>
                                    <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                                    <b style={{ color: '#508096', fontSize: '150%' }}>100</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-5' style={{ display: 'flex', justifyContent: 'center',paddingTop:'20vh',flexDirection:'column',alignItems:'center' }}>
                <div style={{fontSize: '350%',fontFamily:'Oswald',color:'#0a639694'}}>Contact us to get started!</div>
                <div style={{ display: 'flex',alignItems:'center',margin:'5vh 0',justifyContent:'space-evenly',width:'100%'}}>
                    <a style={{fontSize:'220%',backgroundColor:'#0a639694',color:'white', fontFamily:'Oswald',marginLeft:'150px', width:'200px'}} className='btn' href='tel:(916) 314-7681'>Call</a>
                    <p style={{fontSize:'200%',color:'#0a639694',fontFamily:'Oswald',marginLeft:'-200px',marginRight:'-200px'}}>OR</p>
                    <ContactPage/>
                </div>
            </div>
           
        </div>
    )
}
export default Pricing;