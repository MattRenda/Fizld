import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import Lottie from 'react-lottie';
import loading from '../../../lotties-animations/loading.json';
import secure from '../../../lotties-animations/Secure.json';
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_live_51KGXrHC5jJgfrH90JGNtRgxVKZ0COX1xW1KRTVYa5YdIsKJxhkA7g13jFgYDWiwWYVVwiE7MbrjKTet0DkxDVyGL000vkf3dW2");

const Payment = ({plan, price}) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://fizld.azurewebsites.net/api/transaction?code=YVdAiSCQZRbc1GC6gqJJyYraiB/0a/70wyxXDhV5fws4QAd92fLaNg==", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: plan, price: 100 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
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
              <CheckoutForm price={price} plan={plan}/>
            </Elements>
          ) :
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loading
              }}
              height={'200px'}
              width={'200px'}
            />}
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