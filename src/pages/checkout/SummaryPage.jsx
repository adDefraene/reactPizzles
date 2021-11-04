import React from 'react';
import {Link} from 'react-router-dom'

const SummaryPage = (props) => {

    console.log(props.location.cart)

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
                                <div className="col-6 col-lg pizzles-summary-item p-1">
                                    <div className="row">
                                        <p className="pizzles-summary-subtitle">Margharita 11,50€</p>
                                        <p>+</p>
                                        <p>Poivrons 0,50€</p>
                                        <p>Pepperonis 1,00€</p>
                                        <span className="pizzles-priceTag mx-auto mt-auto">13,00€</span>
                                    </div>
                                </div>
                                <div className="col-6 col-lg pizzles-summary-item p-1">
                                    <div className="row">
                                        <p className="pizzles-summary-subtitle">Margharita 11,50€</p>
                                        <p>+</p>
                                        <p>Aucun ingrédient</p>
                                        <span className="pizzles-priceTag mx-auto mt-auto">11,50€</span>
                                    </div>
                                </div>
                                <div className="col-6 col-lg pizzles-summary-item p-1">
                                    <div className="row">
                                        <p className="pizzles-summary-subtitle">Margharita 11,50€</p>
                                        <p>+</p>
                                        <p>Aucun ingrédient</p>
                                        <span className="pizzles-priceTag mx-auto mt-auto">11,50€</span>
                                    </div>
                                </div>
                                <div className="col-6 col-lg pizzles-summary-item p-1">
                                    <div className="row">
                                        <p className="pizzles-summary-subtitle">Margharita 11,50€</p>
                                        <p>+</p>
                                        <p>Aucun ingrédient</p>
                                        <span className="pizzles-priceTag mx-auto mt-auto">11,50€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/menu">Non, modifier mon panier et retourner au menu<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pizzles-summary-cell my-3">
                        <div className="pizzles-summary-delivery p-3">
                            <p className="pizzles-summary-subtitle">Livraison</p>
                            <p>Livraison à domicile (+3€) au :<br /><span>Rue de la Ste Glinglin 404, 7800 Ath</span></p>
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/delivery">Non, changer de livraison<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pizzles-summary-cell my-3">
                        <div className="pizzles-summary-hour p-3">
                            <p className="pizzles-summary-subtitle">Heure de réservation</p>
                            <p>Livraison prête pour : <br /><span>19 H 30</span></p>
                        </div>
                        <div className="pizzles-summary-recover">
                            <Link to="/hour">Non, changer d'heure<i className="fas fa-edit"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="pizzles-summary-total m-auto text-center">TOTAL : <span>27,50€</span></h2>
        </div>
        <div className="col-12 my-3">
            <Link to="/payment" className="pizzles-btn pizzles-btn-red next-button">Oui, je vais procéder au paiement<i className="fas fa-wallet"></i></Link>
        </div>
    </div>
</div>
</>
     );
}
 
export default SummaryPage;