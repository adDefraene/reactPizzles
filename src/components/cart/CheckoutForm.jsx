import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import ordersApiMethods from '../../services/ordersAPI';
import AuthApiMethods from '../../services/authAPI';
import emailjs from 'emailjs-com';import jwtDecode from 'jwt-decode';
import "../../Stripe.css"

const CheckoutForm = (props) => {
    
    var emailJsVars = {}
    // Var that contains the decoded information contained in the JWT token stored
    const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))
    const stripe = useStripe();
    const elements = useElements();
  
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const checkoutFunction = async event => {
        try{
            AuthApiMethods.setup()
            const respPost = await ordersApiMethods.create(props.cart)
            console.info(respPost)
            let resetCart = {
                customer : "/api/users/",
                orderItems : [],
                date: "",
                ifDelivered: "",
                preTotal: 0
          }
          props.setCart(resetCart)
          // Set the vars for the receipt email
            // The order id
            emailJsVars.from_id = respPost.id
            //Generate the html content for the order
            let emailJsHtmlContent = ""
            respPost.orderItems.forEach(function (pizzaElem){
                emailJsHtmlContent += `<p style="display:block;;height:auto;padding:15px 20px;color:#0d0d0d;background-color:#f8f8f8;border-radius: 20px;"><u>`+pizzaElem.itemPizza.name+`</u>`
                if(pizzaElem.supIngredients.length === 0){
                    emailJsHtmlContent += ` + Aucun ingrédient supplémentaire`
                }else{
                    pizzaElem.supIngredients.forEach(function(supIngredientElem){
                        emailJsHtmlContent += ` + `+supIngredientElem.name
                    })
                }
                emailJsHtmlContent += `</p>`
            })
            emailJsVars.form_orderHTML = emailJsHtmlContent
            // The user's infos
                //Email
            emailJsVars.email_to = userInfosJWT.username
                // Name
            emailJsVars.reply_to = userInfosJWT.firstName+` `+userInfosJWT.lastName
            // The order's date
            let orderDate = new Date(respPost.date)
            let getCorrectMonth = orderDate.getMonth()
            getCorrectMonth++
            emailJsVars.from_date = ``+orderDate.getDate()+`-`+getCorrectMonth+`-`+orderDate.getFullYear()+``
            emailJsVars.from_hour = ``+orderDate.getHours()+` H `
            if(orderDate.getMinutes() === 0){
                emailJsVars.from_hour += `0`+orderDate.getMinutes()+``
            }else{
                emailJsVars.from_hour += ``+orderDate.getMinutes()+``
            }
            // The order's total
            emailJsVars.from_total = respPost.total
            // The order's delivery
            if(respPost.ifDelivered){
                emailJsVars.from_delivery = "Votre commande sera livrée pour"
            }else{
                emailJsVars.from_delivery = "Votre commande sera à retirer chez nous pour"
            }
    
          emailjs.send("service_u6i4e06","template_vxamej8",emailJsVars)
    
        }catch(error){
            console.error(error)
        }
    }
  
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
            setMessage("Paiement réussi !");
            break;
          case "processing":
            setMessage("Votre paiement s'effectue.");
            break;
          case "requires_payment_method":
            setMessage("Votre paiement a échoué, veuillez recommencer.");
            break;
          default:
            setMessage("Une erreur s'est produite");
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
      
      checkoutFunction()

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "https://pizzles.adriendefraene.be",
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
        setMessage("Une erreur innatendue est apparue.");
      }
  
      setIsLoading(false);
    };
  
    return (
      <form id="payment-form" onSubmit={handleSubmit} className="mx-auto row">
        <PaymentElement id="payment-element" className="col-12" />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="col-12">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Payer maintenant"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    );
}
 
export default CheckoutForm;