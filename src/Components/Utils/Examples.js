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
                                <th scope="col"></th>
                                <th scope="col" style={{backgroundColor:'#efecf8'}}>
                                    Fizld <br/>
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
                                <th style={{alignSelf:'center',fontWeight:'lighter'}} scope="row">Secure online payments</th>
                                <td style={{backgroundColor:'#efecf8'}}><img alt='check' src='/imgs/check.svg'/></td>
                                <td><img alt='check' src='/imgs/check.svg'/></td>
                            </tr>
                            <tr>
                                <th style={{fontWeight:'lighter'}} scope="row">Custom Domain</th>
                                <td style={{backgroundColor:'#efecf8'}}><img alt='check' src='/imgs/check.svg'/></td>
                                <td><img alt='check' src='/imgs/check.svg'/></td>
                            </tr>
                            <tr>
                                <th style={{fontWeight:'lighter'}} scope="row">Customer care</th>
                                <td style={{backgroundColor:'#efecf8'}}><img alt='check' src='/imgs/check.svg'/></td>
                                <td><span style={{fontSize:'200%'}}>-</span></td>
                            </tr>
                            <tr>
                                <th style={{fontWeight:'lighter'}} scope="row">Storage space</th>
                                <td style={{backgroundColor:'#efecf8'}}>Unlimited</td>
                                <td >100 GB</td>
                            </tr>
                            <tr>
                                <th style={{fontWeight:'lighter'}} scope="row">Professional Logo</th>
                                <td style={{backgroundColor:'#efecf8'}}><img alt='check' src='/imgs/check.svg'/></td>
                                <td><span style={{fontSize:'200%'}}>-</span></td>
                            </tr>
                            <tr>
                                <th style={{fontWeight:'lighter'}} scope="row">Custom functionality</th>
                                <td style={{backgroundColor:'#efecf8'}}><img alt='check' src='/imgs/check.svg'/></td>
                                <td><span style={{fontSize:'200%'}}>-</span></td>
                            </tr>
                            <tr>
                                <th style={{fontWeight:'lighter'}} scope="row">Advanced SEO</th>
                                <td style={{backgroundColor:'#efecf8'}}><img alt='check ' src='/imgs/check.svg'/></td>
                                <td><span style={{fontSize:'200%'}}>-</span></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Examples