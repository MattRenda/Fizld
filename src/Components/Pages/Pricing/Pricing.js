import React from 'react';
import ContactPage from '../../Utils/ContactPage';
import Lottie from 'react-lottie';
import ExampleAnimation from '../../../lotties-animations/ExampleAnimation.json';
import ButtonGame from '../../Utils/ButtonGame';
const Pricing = () => {
    return (
        <div className='container'>
            <div style={{ position: 'absolute', backgroundColor: '#f9eff1', width: '100%', height: '300px', top: '0px', left: '0px', zIndex: 0 }}></div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative', zIndex: 1, paddingBottom: '50px',paddingTop: '30px' }}>
                <h3>
                    <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                    <b style={{ color: '#508096', fontSize: '200%' }}>100</b>
                    <span style={{ fontSize: '65%' }}>/month</span>
                </h3>
                <h3 style={{ fontSize: '100%', margin: '0px', color: '#508096' }}>For any site</h3>
                <h3 style={{ fontSize: '100%', margin: '0px', color: '#508096' }}>+</h3>
                <h3 style={{ fontSize: '100%', margin: '0px', color: '#508096' }}>Priced per feature</h3>
            </div>
            <div className='mt-5 mb-5'>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center',marginTop:'50px', marginBottom:'50px' }}>
                    <div style={{fontSize:'170%'}}>
                        <h2 style={{fontSize:'150%', color: '#508096' }}>Static Content</h2>
                        <p>(Text and images per page)</p>
                        <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                            <b style={{ color: '#508096', fontSize: '150%' }}>100</b>
                    </div>
                    <img alt='static Example' width={'500px'} height={'auto'} src='/imgs/Img_text_Example.png' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', marginTop:'50px', marginBottom:'50px' }}>
                    <div style={{fontSize:'170%'}}>
                        <h2 style={{fontSize:'150%', color: '#508096' }}>Animations</h2>
                        <p>
                            <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                            <b style={{ color: '#508096', fontSize: '150%' }}>200</b>
                        </p>
                    </div>
                    <div style={{ width: '500px', textAlign: 'center' }}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center',marginTop:'50px', marginBottom:'50px' }}>
                    <div style={{fontSize:'170%'}}>
                        <h2 style={{ fontSize: '150%',color: '#508096' }}>Logos</h2>
                        <p>
                            <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                            <b style={{ color: '#508096', fontSize: '150%' }}>150</b>
                        </p>
                    </div>
                    <div style={{ width: '500px', textAlign: 'center' }}>

                        <img alt='logo Example' style={{ borderRadius: '100%' }} width={'300px'} height={'auto'} src='/imgs/Example_logo.png' />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'50px', marginBottom:'50px' }}>
                    <div style={{fontSize:'170%'}}>
                        <h2 style={{fontSize: '150%', color: '#508096' }}>Logical Components</h2>
                        <p>(Components built to "do" something)</p>
                        <span style={{ color: '#508096', position: 'relative', top: '-15px', fontWeight: 'lighter' }}>$</span>
                        <b style={{ color: '#508096', fontSize: '150%' }}>100</b>
                    </div>
                    <div style={{ width: '400px', height: '200px', position: 'relative', flexWrap: 'wrap', alignItems: 'center' }}>
                        <ButtonGame />
                    </div>
                </div>
            </div>

            {/* <div className='mt-5 mb-5' style={{ display: 'flex', justifyContent: 'center', }}>
                GET A QUOTE
            </div> */}
            <div className='mt-5 mb-5' style={{ display: 'flex', justifyContent: 'center', }}>
                <ContactPage title={'Message us to get started!'} />
            </div>
        </div>
    )
}
export default Pricing;