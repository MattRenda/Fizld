import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import ContactPage from '../../Utils/ContactPage';

const Plus =()=>{
    window.scrollTo(0, 0);

    let header ='Plus Plan';
    let description = `Here you will be able to create a store or blog. This package offers a multiple page application, free SSL certificate, free hosting, and 3 revisions. If you would like continued support after your initial site has been created, optional monthly support is available as well.`;
    // let img = '';
 return(
        <>
            <div className='container'>
                <Header/>
                <Intro header={header} description={description}/>
                <div className='container pt-3'>
                    <h3>Features</h3>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">Multiple pages</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">Included</small>
                            </div>
                        </div>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">SSL</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">Included</small>
                            </div>
                        </div>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">Free hosting</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">Included</small>
                            </div>
                        </div>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">3 Revisions</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">Included</small>
                            </div>
                        </div>
                    </div>
                 
                </div>
                <ContactPage title={'Contact me to get started'} plan={'Plus'}/>
                <Footer/>

            </div>
        </>
    )
}

export default Plus;