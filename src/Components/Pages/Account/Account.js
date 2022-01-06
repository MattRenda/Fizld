import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
const Basic = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <div className='text-center'>
                <button className='btn btn-outline-success m-2'>Basic</button>
                <button className='btn btn-outline-primary m-2'>Status</button>
                <button className='btn btn-outline-primary m-2'>Iterations</button>
                <a href='' className='m-2'>View Site</a>
            </div>
            <Footer />
        </>
    )
}

export default Basic;