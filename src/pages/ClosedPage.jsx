import React from 'react';
import {Link} from 'react-router-dom'

const ClosedPage = () => {
    return ( 
        <>
            <div className="container pizzles-first-container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="pizzles-title text-center mb-4 mx-auto">Nous sommes fermés</h2>
                    </div>
                    <div className="col-6 offset-3 my-4">
                        <img src="/images/svg/Sorry_Closed.svg" alt="" />
                    </div>
                    <div className="col-12 my-3">
                        <p className="pizzles-txt-closed text-center mx-auto mt-5 mb-5">Nous sommes désolés, nous fermons le dimanche et le lundi. <br />Vous pouvez néanmoins consulter le menu pour votre prochaine commande !</p>
                    </div>
                    <div className="col-12 mt-2 mb-4">
                        <div className="row px-5 justify-content-around">
                            <Link to="/" className="pizzles-btn pizzles-btn-white">Retourner à l'accueil<i className="fas fa-home"></i></Link>
                            <Link to="/menu" className="pizzles-btn pizzles-btn-back">Retourner au menu<i className="fas fa-pizza-slice"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ClosedPage;