import React, { useEffect, useState } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import jwtDecode from 'jwt-decode';
import ordersApiMethods from '../../services/ordersAPI';
import AuthApiMethods from '../../services/authAPI';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import CheckoutForm from '../../components/cart/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPEKEY)

const CheckoutPage = (props) => {

    const [clientSecret, setClientSecret] = useState("");
    
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://stripe.pizzles.adriendefraene.be/create-payment-intent", {
        method: "POST",
        "CORS_HEADERS" : { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // Your origin name
            },
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({"items":props.location.cart.preTotal}),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);


    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };


    return ( 
        <>
            <div className="container pizzles-first-container">
                <div className="row">
                    <div className="pizzles-head-title mb-4 text-center">
                        <h1><strong>Paiement</strong></h1>
                    </div>
                    <div className="col-12 my-5">
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm cart={props.location.cart} setCart={props.location.setCart} />
                            </Elements>
                        )}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CheckoutPage;