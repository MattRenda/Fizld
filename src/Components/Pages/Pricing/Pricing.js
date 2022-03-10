import React , {useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import ExampleAnimation from '../../../lotties-animations/ExampleAnimation.json';
import Components from '../../../lotties-animations/components.json';
import Border from '../../../lotties-animations/border.json';
import ButtonGame from '../../Utils/ButtonGame';
import ContactPage from '../../Utils/ContactPage';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Pricing = () => {    
    const [selectedContent,setSelectedContent] = useState('hiding')
    const [selectedAnimations,setSelectedAnimations] = useState('hiding')
    const [selectedLogos,setSelectedLogos] = useState('hiding')
    const [selectedComponents,setSelectedComponents] = useState('hiding')

    const plan = [];
    if(selectedContent === 'visible'){
        plan.push('static content')
    }
    if(selectedAnimations === 'visible'){
        plan.push('animations')
    }
    if(selectedLogos === 'visible'){
        plan.push('logos')
    }
    if(selectedComponents === 'visible'){
        plan.push('logical components')
    }
    return (
        <div className=''>
            <div style={{ position: 'absolute', backgroundColor: '#f9eff1', width: '100%', height: '650px', top: '0px', left: '0px', zIndex: 0 }}></div>
            <div style={{height:'590px', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative', zIndex: 1,paddingTop: '30px' }}>
                <div style={{textAlign:'center'}} className='container'>
                <h3>
                    <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter', fontSize: '150%' }}>$</span>
                    <b style={{ color: '#508096', fontSize: '250%' }}>50</b>
                    <span style={{ fontSize: '65%' }}>/month</span>
                </h3>
                <h3 style={{margin:'0px', fontSize: '120%', color: '#508096' }}>For any site</h3>
                <h3 style={{ margin:'0px',fontSize: '120%', color: '#508096' }}>+</h3>
                <h3 style={{ margin:'0px',fontSize: '120%', color: '#508096'}}>Priced per feature</h3>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: Components
                        }}
                        height={'300px'}
                        width={'300px'}
                    />                
                </div>
                <h3 className='container' style={{color: '#508096', textAlign:'center'}}>Pick and choose from the components offered below and let us take care of the rest!</h3>

                <button id='start' className='btn' onClick={()=>{document.getElementById('start').scrollIntoView({behavior:'smooth'})}} style={{position:'absolute',bottom:'0px'}}><KeyboardDoubleArrowDownIcon style={{fontSize:'200%', fill:'#508096'}}/></button>
            </div>
            <div  className='mt-5 mb-5'>
                <div style={{display: 'flex',flexWrap:'wrap',justifyContent:'space-evenly', padding:'50px 20px' }}>
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', cursor:'pointer'}}>
                        <div  style={{position:'relative',height:'350px', width:'320px'}}>
                            <div className={selectedContent}>
                                <Lottie
                                    style={{position:'absolute', top:'-10px',zIndex:-1}}
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: Border
                                    }}
                                /> 
                            </div>
                            <div onClick={()=>setSelectedContent(selectedContent == 'visible'? 'hiding' : 'visible')}>
                                <h2 style={{fontSize:'150%', color: '#508096' }}>Static Content</h2>
                                <p style={{margin:'0px'}}>(Text and images per page)</p>
                                <img alt='static Example' width={'250px'} height={'auto'} src='/imgs/Img_text_Example.png' />
                                <div style={{marginTop:'10px'}}>
                                    <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                                    <b style={{ color: '#508096', fontSize: '150%' }}>100</b>
                                </div>
                            </div>
                        </div>  
                      
                    </div>
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', cursor:'pointer', margin:'10px'}}>
                        <div  style={{position:'relative',height:'350px', width:'320px'}}>
                            <div className={selectedAnimations}>
                                <Lottie
                                    style={{position:'absolute', top:'-10px',zIndex:-1}}
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: Border
                                    }}
                                /> 
                            </div>
                            <div onClick={()=>setSelectedAnimations(selectedAnimations == 'visible'? 'hiding' : 'visible')}>
                                <h2 style={{fontSize:'150%', color: '#508096' }}>Animations</h2>
                                <div style={{ textAlign: 'center' }}>
                                    <Lottie
                                        options={{
                                            loop: true,
                                            autoplay: true,
                                            animationData: ExampleAnimation
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
                    <div style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', cursor:'pointer', margin:'10px'}}>
                        <div  style={{position:'relative',height:'350px', width:'320px'}}>
                            <div className={selectedLogos}>
                                <Lottie
                                    style={{position:'absolute', top:'-10px',zIndex:-1}}
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: Border,
                                    }}
                                /> 
                            </div>
                            <div onClick={()=>setSelectedLogos(selectedLogos == 'visible'? 'hiding' : 'visible')}>

                                <h2 style={{ fontSize: '150%',color: '#508096' }}>Logos</h2>
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
                    <div  style={{width:'300px',height:'300px', display: 'flex', alignItems:'center', flexDirection:'column',textAlign:'center', cursor:'pointer', margin:'10px'}}>
                        <div  style={{position:'relative',height:'350px', width:'320px'}}>
                            <div className={selectedComponents}>
                                <Lottie
                                    style={{position:'absolute', top:'-10px',zIndex:-1}}
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: Border
                                    }}
                                /> 
                            </div>
                            <div  onClick={()=>setSelectedComponents(selectedComponents == 'visible'? 'hiding' : 'visible')}>
                                <h2 style={{fontSize: '150%', color: '#508096' }}>Logical Components</h2>
                                <p>(Components built to "do" something)</p>
                                <div style={{width: '300px',height:'40px', position: 'relative' }}>
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
            <div className='mt-5 mb-5' style={{ display: 'flex', justifyContent: 'center', }}>
                <ContactPage title={'Message us to get started!'} plan={plan}/>
            </div>
           
        </div>
    )
}
export default Pricing;