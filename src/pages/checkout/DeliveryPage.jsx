import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';

const DeliveryPage = (props) => {

        // Method that enables the "next button" when one of the two delivery option is selected
        const toggleNextButton = () => {
            if(document.querySelector(".next-button").classList.contains("next-button-disabled")){
                document.querySelector(".next-button").classList.remove("next-button-disabled")
            }
        }
        
        // Method that managed the order with the selected option
        const handleClickFees = target => {
            // Enables the "next button"
            toggleNextButton()
            
            // If the currentTarget doesn't contain the "active-method" class...
            if(!target.classList.contains("active-method")){
                // Remove the "active-method" class to the current onu
                if(document.querySelector(".active-method")){
                    document.querySelector(".active-method").classList.remove("active-method")
                }
                
                // Add the "active-method" class to the currentTagret
                target.classList.toggle("active-method")
                // If this is the "delivery ot home" options which is selected
                if(target.classList.contains("active-method") && target.classList.contains("pizzles-delivery") && !target.classList.contains("pizzles-take")){
                    // Displays the 3€ fees
                    document.querySelector(".pizzles-order-fees").classList.add("active-fees")
                    // Toggle the "ifDelivered" cart's field
                    let newCart =  Object.assign({}, props.location.cart)
                    // When already check, if true, don't add one more the 3€ fees
                    if(props.location.cart.ifDelivered !== true){
                        newCart.preTotal += 3
                    }
                    newCart.ifDelivered = true
                    props.location.setCart(newCart)
                }else{
                    // Hides the 3€ fees
                    document.querySelector(".pizzles-order-fees").classList.remove("active-fees")
                    // Toggle the "ifDelivered" cart's field
                    let newCart =  Object.assign({}, props.location.cart)
                    // If the delivery was selected
                    if(props.location.cart.ifDelivered === true){
                        // Do the minus 3
                        newCart.preTotal -= 3
                    }
                    newCart.ifDelivered = false
                    props.location.setCart(newCart)
                }
            }
        }
        // Method that runs handleClickFees when one of the two options is clicked
        const handleClick = event => {
            handleClickFees(event.currentTarget)
        }

        // Method that already checks if the "ifDelivery" field has already a value, if so, pre-select the current delivery option
        const alreadyCheckIfDelivered = () => {
            if(props.location.cart.ifDelivered !== ""){
                if(props.location.cart.ifDelivered){
                    handleClickFees(document.querySelector(".pizzles-delivery"))
                } else {
                    handleClickFees(document.querySelector(".pizzles-take"))
                }
            }
        }

        // On load
        useEffect(()=>{
            alreadyCheckIfDelivered()
        })
        
    return (
<>
<div className="container pizzles-first-container">
    <div className="row">
        <div className="pizzles-head-title mb-4 text-center">
            <h1><strong>Passer la commande</strong></h1>
        </div>
        <div className="col-12 col-lg-3 mt-4">
            <Link to="/menu" className="pizzles-btn my-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour</Link>
        </div>
        <div className="col-12 col-lg-6 mt-4">
            <h2 className="pizzles-title text-center mx-auto my-3">Choisir la livraison</h2>
        </div>
        <div className="col-12 my-5">
            <div className="pizzles-order-total mx-auto">
                <h2 className="pizzles-txt-title pizzles-order-total-amount m-auto text-center">TOTAL : <span>{props.location.cart.preTotal} €</span></h2>
                <div className="pizzles-txt-title pizzles-order-fees">
                    + 3 €
                </div>
            </div>
        </div>
        <div className="col-6 col-md-5 mb-5">
            <div onClick={handleClick} className="pizzles-order-method pizzles-delivery text-center p-4">
                <img src="/images/logos/VESPA_PICTO.png" alt="Être livré à domicile"  className="my-4" />
                <p>Être livré à domicile</p>
            </div>
        </div>
        <div className="col-6 col-md-5 offset-md-2 mb-5">
            <div onClick={handleClick} className="pizzles-order-method pizzles-take text-center p-4">
                <img src="/images/logos/MAPPIN_PICTO.png" alt="Venir chercher sur place"  className="my-4" />
                <p>Venir chercher sur place</p>
            </div>
        </div>
        <div className="col-12 my-3">
            <Link to="/hour" className="pizzles-btn pizzles-btn-red next-button next-button-disabled">Suivant<i className="fas fa-arrow-circle-right"></i></Link>
        </div>
    </div>
</div>
</>
     );
    

     
}
 
export default DeliveryPage;