import React from 'react'

const Examples = ({ title, description }) => {
    return (
        <div className='p-5 exampleText' >
            <div className='p-3' style={{ position: 'relative', textAlign: 'center' }}>
                <h3>{title}</h3>
                <p className='mb-0'>{description}</p>
            </div>
            <div  style={{ position: 'relative', textAlign: 'center' }} className='container'>
                <div className='row justify-content-center'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#efecf8'}}>
                                    <p style={{fontSize:'120%', margin:'0px'}}>Fizld</p> 
                                    <span style={{position:'relative',top:'-10px', fontWeight:'lighter'}}>$</span>
                                    <b style={{fontSize:'200%'}}>50</b>
                                    <span style={{fontSize:'65%'}}>/month</span>
                                </th>
                                <th scope="col">
                                    Website Builders <br/>
                                    <span style={{position:'relative',top:'-10px', fontWeight:'lighter'}}>$</span>
                                    <b style={{fontSize:'200%'}}>35</b>
                                    <span style={{fontSize:'65%'}}>/month</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td style={{backgroundColor:'#efecf8'}}>No fizld branding</td>
                                <td>Charges to remove branding</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'#efecf8'}}>No fizld ads</td>
                                <td>Charges to remove ads</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'#efecf8'}}>Complete customization</td>
                                <td>Charges extra for templates</td>
                            </tr>  
                            <tr>
                                <td style={{backgroundColor:'#efecf8'}}>Mobile first design (Responsive)</td>
                                <td>Charges extra for responsive design</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'#efecf8'}}>SEO included</td>
                                <td>Charges extra for SEO</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'#efecf8'}}>Professional developer on standby</td>
                                <td>Difficult to update</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Examples