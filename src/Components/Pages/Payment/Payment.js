import React, { useState, useEffect, Suspense, lazy } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Lottie from "react-lottie";
import secure from '../../../lotties-animations/Secure.json'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_live_51KGXrHC5jJgfrH90JGNtRgxVKZ0COX1xW1KRTVYa5YdIsKJxhkA7g13jFgYDWiwWYVVwiE7MbrjKTet0DkxDVyGL000vkf3dW2");


const Payment = ({ plan, price, user }) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://4tgrm96sfd.execute-api.us-east-1.amazonaws.com/default/Fizld-payment", {
      method: "POST",
      body: JSON.stringify({ price: price, email: user.Email}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret))
      .catch(error=>console.log(error))
  // eslint-disable-next-line
  }, []);

  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="container">
      <div className="text-center m-3 p-3" >
        <h2 >Complete Your Purchase</h2>
      </div>
      {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm price={price} plan={plan} />
          </Elements>
      ) :
        <div className='row'>
          <div className='shadow-sm col-md p-3 m-3'>
            <span class="placeholder col-6"></span>
          </div>
          <div className='shadow-sm col-md p-3 m-3'>
            <p aria-hidden="true">
              <span class="placeholder col-6"></span>
            </p>            <div className='d-flex justify-content-between mb-3'>
              <p aria-hidden="true">
                <span class="placeholder col-6"></span>
              </p>            <p aria-hidden="true">
                <span class="placeholder col-6"></span>
              </p>            </div>
            <hr />
            <div className='d-flex justify-content-between mb-3'>
              <p aria-hidden="true">
                <span class="placeholder col-6"></span>
              </p>            <p aria-hidden="true">
                <span class="placeholder col-6"></span>
              </p>            </div>
            <hr />
            <div className='mb-3'>
              <p aria-hidden="true">
                <span class="placeholder col-6"></span>
              </p>
            </div>
            <button href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></button>

            {/* Show any error or success messages */}
            <p aria-hidden="true">
              <span class="placeholder col-6"></span>
            </p>          
          </div>
        </div>
      }
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: secure
          }}
          height={'200px'}
          width={'200px'}
        />
    

    </div>
  );
}

export default Payment;