import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_live_51KGXrHC5jJgfrH90JGNtRgxVKZ0COX1xW1KRTVYa5YdIsKJxhkA7g13jFgYDWiwWYVVwiE7MbrjKTet0DkxDVyGL000vkf3dW2");

const Payment =()=> {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://fizld.azurewebsites.net/api/transaction?code=YVdAiSCQZRbc1GC6gqJJyYraiB/0a/70wyxXDhV5fws4QAd92fLaNg==", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", price:100 }] }),
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
      {clientSecret?(
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ):"LOADING"}
    </div>
  );
}

export default Payment;