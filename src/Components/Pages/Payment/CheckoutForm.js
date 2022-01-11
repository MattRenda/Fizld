import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ price, plan }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/Account",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className='row'>
        <div className='shadow-sm col-md p-3 m-3'>
          <PaymentElement id="payment-element" />
        </div>
        <div className='shadow-sm col-md p-3 m-3'>
          <b>{plan}</b>
          <div className='d-flex justify-content-between mb-3'>
            <div>${price}.00 / every month</div>
            <div>${price}.00</div>
          </div>
          <hr />
          <div className='d-flex justify-content-between mb-3'>
            <b>Total</b>
            <div>${price}.00</div>
          </div>
          <hr />
          <div className='mb-3'>
            <small> By purchasing, you accept the Terms of Use and acknowledge reading the Privacy Policy.
              You also agree to auto renewal of your monthly subscription for ${price}.00, which can be disabled at any time through your account.
              Your card details will be saved for future purchases and subscription renewals.
            </small>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '10px', float:'right' }} disabled={isLoading || !stripe || !elements} id="submit">
            Submit Purchase
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </div>
      </div>


    </form>
  );
}

export default CheckoutForm;