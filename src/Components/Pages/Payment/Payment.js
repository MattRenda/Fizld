import React from 'react';
const Payment = ({ plan, price }) => {

    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='shadow-sm col-md p-5 m-3'>
                    <div>Payment Method</div>
                    <hr />

                    <p>Card details</p>

                    <div className='row justify-content-center'>
                        <input type="text" class="form-control col-11 m-2" placeholder="Card number" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='row justify-content-around'>
                        <input type="text" class="form-control col-5 m-2" placeholder="Expiration" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="text" class="form-control col-5 m-2" placeholder="CVV" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='row justify-content-around'>
                        <input type="text" class="form-control col-5 m-2" placeholder="First name" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="text" class="form-control col-5 m-2" placeholder="Last name" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <p>Invoice details</p>
                    <div className='row justify-content-center'>
                        <input type="text" class="form-control col-11 m-2" placeholder="Address" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='row justify-content-around'>
                        <input type="text" class="form-control col-5 m-2" placeholder="City" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="text" class="form-control col-5 m-2" placeholder="Postal code" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='row justify-content-around'>
                        <button class="dropdown-toggle form-control col-5 m-2" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">Country</button>
                        <button class="dropdown-toggle form-control col-5 m-2" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">State</button>
                    </div>
                    <div className='row justify-content-around'>
                        <input type="text" class="form-control col-5 m-2" placeholder="Phone" aria-label="Username" aria-describedby="addon-wrapping" />
                        <input type="text" class="form-control col-5 m-2" placeholder="Company name (optional)" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className='shadow-sm col-md-4 p-5 m-3'>
                    <div>Summary</div>
                    <hr />
                    <b>{plan}</b>
                    <div className='d-flex justify-content-between mb-3'>
                        <div>{price} / every month</div>
                        <div>{price}</div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between mb-3'>
                        <b>Total</b>
                        <div>{price}</div>
                    </div>
                    <hr />
                    <div className='mb-3'>
                        <small> By purchasing, you accept the Terms of Use and acknowledge reading the Privacy Policy.
                            You also agree to auto renewal of your monthly subscription for $30.00, which can be disabled at any time through your account.
                            Your card details will be saved for future purchases and subscription renewals.
                        </small>
                    </div>
                    <button style={{width:'100%', backgroundColor:'#3899ec', color:'white',borderRadius:'20px'}} className='btn'><i style={{color:'white'}} class="bi bi-lock"></i> Submit Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default Payment;