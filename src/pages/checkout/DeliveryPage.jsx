import React from 'react';

const DeliveryPage = () => {


    return ( 

<>
<div className="container pizzles-first-container">
    <div className="row">
        <div className="pizzles-head-title mb-4 text-center">
            <h1><strong>Passer la commande</strong></h1>
        </div>
        <div className="col-12 col-lg-3 mt-4">
            <a href="/menu" className="pizzles-btn my-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour</a>
        </div>
        <div className="col-12 col-lg-6 mt-4">
            <h2 className="pizzles-title text-center mx-auto my-3">Choisir la livraison</h2>
        </div>
        <div className="col-12 my-5">
            <div className="pizzles-order-total mx-auto">
                <h2 className="pizzles-txt-title pizzles-order-total-amount m-auto text-center">TOTAL : <span>13,00€</span></h2>
                <div className="pizzles-txt-title pizzles-order-fees">
                    + 3 €
                </div>
            </div>
        </div>
        <div className="col-6 col-md-5 mb-5">
            <div className="pizzles-order-method pizzles-delivery text-center p-4">
                <img src="/images/logos/VESPA_PICTO.png" alt="Être livré à domicile"  className="my-4" />
                <p>Être livré à domicile</p>
            </div>
        </div>
        <div className="col-6 col-md-5 offset-md-2 mb-5">
            <div className="pizzles-order-method pizzles-take text-center p-4">
                <img src="/images/logos/MAPPIN_PICTO.png" alt="Venir chercher sur place"  className="my-4" />
                <p>Venir chercher sur place</p>
            </div>
        </div>
        <div className="col-12 my-3">
            <a href="/hour" className="pizzles-btn pizzles-btn-red next-button next-button-disabled">Suivant<i className="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
</div>
</>
     );
    

     
}
 
export default DeliveryPage;