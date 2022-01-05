import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import ContactPage from '../../Utils/ContactPage';
const Premium =()=>{
    window.scrollTo(0, 0);

    let header ='Premium Plan';
    let description =`Here you will be able to create most anything you'd like. 
    This package offers a multiple page application, free SSL certificate, free hosting, 5 revisions, and design planning sessions. 
    If you would like continued support after your initial site has been created, optional monthly support is available as well.`;

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
                                    <h6 class="mb-0">5 Revisions</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">Included</small>
                            </div>
                        </div>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">Design planning sessions</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">Included</small>
                            </div>
                        </div>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">24/7 Support</h6>
                                </div>
                                <small class="opacity-50 text-nowrap">100$/month</small>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactPage title={'Contact me to get started'} plan={'Premium'}/>
                <Footer/>
            </div>
        </>
    )
}

export default Premium;