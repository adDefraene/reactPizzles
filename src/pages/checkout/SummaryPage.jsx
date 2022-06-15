import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'
import SummaryPizza from '../../components/cart/SummaryPizza';
import SummarySupIngredient from '../../components/cart/SummarySupIngredient';
import ordersApiMethods from '../../services/ordersAPI';
import AuthApiMethods from '../../services/authAPI';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const SummaryPage = (props) => {

    // Var that contains the decoded information contained in the JWT token stored
    const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))

    var emailJsVars = {}

    console.log(props.location.cart)

    //console.log(userInfosJWT)

    const handleClick = async event => {
        event.preventDefault()
        try{
            AuthApiMethods.setup()
            const respPost = await ordersApiMethods.create(props.location.cart)
            console.info(respPost)
            let resetCart = {
                customer : "/api/users/",
                orderItems : [],
                date: "",
                ifDelivered: "",
                preTotal: 0
          }
          props.location.setCart(resetCart)
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
          toast.success("Votre commande a correctement été passée !")
          props.history.push("/profile")

        }catch(error){
            console.error(error)
        }
    }

    const checkPath = () => {
        let path = props.match.path
        if(path === "/summary"){
            document.querySelector(".pizzles-nav-selectedPage").classList.remove("pizzles-nav-selectedPage")
            document.querySelector("#pizzles-nav-menu").classList.add("pizzles-nav-selectedPage")
        }
    }

    useEffect(()=>{
        checkPath()
    }, [props.match])

    return ( 
<>
<div className="container pizzles-first-container">
    <div className="row">
        <div className="pizzles-head-title mb-4 text-center">
            <h1><strong>Passer la commande</strong></h1>
        </div>
        <div className="col-12 mt-4">
            <h3 className="pizzles-end-title text-center mx-auto my-3">Est-ce que tout est correct ?</h3>
        </div>
        <div className="col-12 mb-5 py-2 px-3 pizzles-summary text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pizzles-summary-cell my-3">
                        <div className="pizzles-summary-items p-3">
                            <p className="pizzles-summary-subtitle">Pizzas</p>
                            <div className="row">
                                {props.location.cart.orderItems.map(orderItem => (
                                    <div className="col-6 col-lg pizzles-summary-item p-1">
                                        <div className="row">
                                            <p className="pizzles-summary-subtitle"> <SummaryPizza slug={orderItem.itemPizza} /></p>
                                            <p>+</p>
                                            {(orderItem.supIngredients.length === 0) ? (
                                                <p>Aucun ingrédient en plus</p>
                                            ) : 
                                                orderItem.supIngredients.map(supIngredient => (
                                                    <p><SummarySupIngredient slug={supIngredient} /></p>
                                                ))
                                            }
                                            <span className="pizzles-priceTag mx-auto mt-auto">{orderItem.totalItem} €</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/menu">Non, modifier mon panier et retourner au menu<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pizzles-summary-cell my-3">
                        <div className="pizzles-summary-delivery p-3">
                            <p className="pizzles-summary-subtitle">Livraison</p>
                            {(props.location.cart.ifDelivered) ? (
                                <p>Livraison à domicile au :<br /><span>{userInfosJWT.address}</span><span className="pizzles-priceTag mx-auto mt-1"><b> + 3€ </b></span></p>
                                ) : (
                                <p>Commande à retirer chez nous au :<br /><span>Chaussée de Bruxelles 52, 7800 Ath</span></p>
                            ) }
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/delivery">Non, changer de livraison<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pizzles-summary-cell my-3">
                        <div className="pizzles-summary-hour p-3">
                            <p className="pizzles-summary-subtitle">Heure de réservation</p>
                            <p>Commande prête pour : <br /><span>{moment(props.location.cart.date).format("HH : mm")}</span></p>
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/hour">Non, changer d'heure<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="pizzles-summary-total m-auto text-center">TOTAL : <span>{props.location.cart.preTotal} €</span></h2>
        </div>
        <div className="col-12 my-3">
            <Link onClick={handleClick} to="/profile" className="pizzles-btn pizzles-btn-red next-button">Oui, je vais procéder au paiement<i className="fas fa-wallet"></i></Link>
        </div>
    </div>
</div>
</>
     );
}
 
export default SummaryPage;