import React from 'react';
import {Link} from 'react-router-dom'

const HourPage = () => {
    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="pizzles-head-title mb-4 text-center">
                <h1><strong>Passer la commande</strong></h1>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <Link to="/delivery" className="pizzles-btn my-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour</Link>
            </div>
            <div className="col-12 col-lg-6 mt-4">
                <h2 className="pizzles-title text-center mx-auto my-3">Heure de réservation</h2>
            </div>
            <div className="col-12 my-5">
                <div className="pizzles-order-hour my-5 mx-auto">
                    <input type="hour" className="" value="" />
                </div>
            </div>
            <div className="col-12 my-3">
                <Link to="/summary" className="pizzles-btn pizzles-btn-red next-button next-button-disabled">Suivant<i className="fas fa-arrow-circle-right"></i></Link>
            </div>
        </div>
    </div>
</>
     );
}
 
export default HourPage;