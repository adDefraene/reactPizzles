import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import {Link} from 'react-router-dom'
import SummaryPizza from '../../components/cart/SummaryPizza';
import SummarySupIngredient from '../../components/cart/SummarySupIngredient';

const SummaryPage = (props) => {

    // Var that contains the decoded information contained in the JWT token stored
    const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))


    console.log(props.location.cart)


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
                                                <p>Aucun ingr??dient en plus</p>
                                            ) : 
                                                orderItem.supIngredients.map(supIngredient => (
                                                    <p><SummarySupIngredient slug={supIngredient} /></p>
                                                ))
                                            }
                                            <span className="pizzles-priceTag mx-auto mt-auto">{orderItem.totalItem} ???</span>
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
                                <p>Livraison ?? domicile au :<br /><span>{userInfosJWT.address}</span><span className="pizzles-priceTag mx-auto mt-1"><b> + 3??? </b></span></p>
                                ) : (
                                <p>Commande ?? retirer chez nous au :<br /><span>Chauss??e de Bruxelles 52, 7800 Ath</span></p>
                            ) }
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/delivery">Non, changer de livraison<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pizzles-summary-cell my-3">
                        <div className="pizzles-summary-hour p-3">
                            <p className="pizzles-summary-subtitle">Heure de r??servation</p>
                            <p>Commande pr??te pour : <br /><span>{moment(props.location.cart.date).format("HH : mm")}</span></p>
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/hour">Non, changer d'heure<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="pizzles-summary-total m-auto text-center">TOTAL : <span>{props.location.cart.preTotal} ???</span></h2>
        </div>
        <div className="col-12 my-3">
            <Link to="/checkout" className="pizzles-btn pizzles-btn-red next-button">Oui, je vais proc??der au paiement<i className="fas fa-wallet"></i></Link>
        </div>
    </div>
</div>
</>
     );
}
 
export default SummaryPage;