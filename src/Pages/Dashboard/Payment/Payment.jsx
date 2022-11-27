import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

const Payment = () => {
  const booking = useLoaderData();

  const { buyerName, carName, resalePrice } = booking;

  return (
    <div>
      <h1 className="text-4xl mb-10">Booking for {carName}</h1>
      <p className="text-xl">
        Dear {buyerName}, please pay ${resalePrice} to complete your booking
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
