import React from 'react'

const Examples = ({ title, description }) => {
    return (
        <div className='p-5 exampleText' >
            <div className='p-3' style={{ position: 'relative', textAlign: 'center' }}>
                <h3 style={{fontSize:'350%',fontWeight:'bolder',fontFamily:'Oswald',color:'#0a6396'}}>OUR SECRET SAUCE</h3>
                <p style={{fontSize:'200%',fontFamily:'Oswald',color:'#0a6396'}} className='mb-0'>Here's what makes fizld the smarter choice for web development. </p>
            </div>
            <div  style={{display:'flex', justifyContent:'space-evenly',padding:'50px 10vw',flexWrap:'wrap'}}>
                <div style={{textAlign:'center',fontFamily:'Oswald',color:'#0a6396',width:'200px'}}>
                    <i  style={{fontSize:'200%'}} class="fa-solid fa-pen"></i>
                    <div  style={{fontSize:'150%',fontFamily:'Oswald'}}>Designer</div>
                    <p style={{color:'black'}}>Designers are on standby to help bring your dream to life</p>
                </div>
                <div style={{textAlign:'center',fontFamily:'Oswald',color:'#0a6396',width:'200px'}}>
                    <i  style={{fontSize:'200%'}} class="fa-solid fa-code"></i>
                    <div  style={{fontSize:'150%',fontFamily:'Oswald'}}>Developer</div>
                    <p style={{color:'black'}}>Skilled developers are ready to manifest your dream</p>

                </div>
                <div style={{textAlign:'center',fontFamily:'Oswald',color:'#0a6396',width:'200px'}}>
                    <i  style={{fontSize:'200%'}} class="fa-solid fa-hotel"></i>
                    <div  style={{fontSize:'150%',fontFamily:'Oswald'}}>Hosting</div>
                    <p style={{color:'black'}}>We offer a low monthly cost to host and maintain your site</p>

                </div>
                <div style={{textAlign:'center',fontFamily:'Oswald',color:'#0a6396',width:'200px'}}>
                    <i  style={{fontSize:'200%',color:'#0a6396'}} class="fa-solid fa-headset"></i>
                    <div  style={{fontSize:'150%',fontFamily:'Oswald',color:'#0a6396'}}>Support</div>
                    <p style={{color:'black'}}>We offer 24/7 support</p>

                </div>
            </div>

        </div>
    )
}

export default Examples