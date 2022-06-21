import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ordersApiMethods from '../../services/ordersAPI';
import AuthApiMethods from '../../services/authAPI';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const CheckoutPage = (props) => {
    return ( 
        <>
            <div className="container pizzles-first-container">
                <div className="row">
                    <div className="pizzles-head-title mb-4 text-center">
                        <h1><strong>Paiement</strong></h1>
                    </div>
                    <div className="col-12 p-2">
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CheckoutPage;