import React from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Intro from '../../Utils/Intro';
import ContactPage from '../../Utils/ContactPage';
const Basic = () => {
    window.scrollTo(0, 0);

    //Intro props
    let header = 'Basic Plan';

    let description = `Here you will be able to create portfolios, blogs, ect... This package offers a one page application, free SSL certificate, free hosting, and 2 revisions.`;

    let img = 'https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730__340.png';
    /******************************************** */
    return (
        <>
            <div className='container'>
                <Header />
                <Intro header={header} description={description} />
                <div className='container pt-3'>
                    <h3>Features</h3>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">One page</h6>
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
                                    <h6 class="mb-0">2 Revisions</h6>
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
                <ContactPage title={'Contact me to get started'} plan={'Basic'} />
                <Footer />

            </div>
        </>
    )
}

export default Basic;