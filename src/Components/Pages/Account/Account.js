import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
const Account = () => {
    window.scrollTo(0, 0);
    return (
        <div className='headerSpacing'>
            <Header />
            <div className='text-center'>
                <button className='btn btn-outline-success m-2'>Basic</button>
                <button className='btn btn-outline-primary m-2'>Status</button>
                <button className='btn btn-outline-primary m-2'>Iterations</button>
                <a href='/' className='m-2'>View Site</a>
            </div>
            <h1 className='text-center'>THIS PAGE IS UNDER CONSTRUCTION</h1>
            <Footer />
        </div>
    )
}

export default Account;