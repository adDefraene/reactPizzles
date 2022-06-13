import React from 'react';
import {Link} from 'react-router-dom'

const CguPage = () => {
    return ( 
        <>
            <div className="container pizzles-first-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="pizzles-title text-center mb-4 mx-auto">Conditions générales d'utilisation</h2>
                    </div>
                    <div className="col-12 my-3">
                        <article className="pizzles-cgu-body">
                            <b>Utilisation de mes données</b>
                            <br />
                            <i>J’accepte que mes informations soient utilisées dans le seul but de pouvoir me servir.</i>
                            <br />
                            <p>Votre nom et prénom serviront à vous reconnaître tout au long de l’utilisation de notre site, ainsi qu’à notre formulaire d’évaluation. Votre adresse mail est votre identifiant pour vous connecter, celle-ci est utilisée afin de vous envoyer des mails récapitulatifs de vos commandes. Votre adresse est celle où vous nous livrerons, si vous souhaiter vous faire livrer.</p>
                            <br />
                            <b>Conservation de vos données</b>
                            <br />
                            <i>Nous nous engageons à aucunement divulger vos informations</i>
                            <br />
                            <p>Vos informations seront stockées dans l’unique but de pouvoir faire fonctionner notre site, afin de pouvoir vous offrir nos services le plus correctement possible. Celles-ci ne seront pas vendues à un tiers, car nous souhaitont ne faire aucun profit sur vos données, ainsi que risquer de les compromettre.</p>
                            <br />
                            <b>Cookies employés</b>
                            <br />
                            <i>Nous nous servons de cookies uniquement fonctionnels</i>
                            <br />
                            <p>Votre navigateur stockera des cookies lorsque vous naviguer sur notre site. En effet, nous avons développé notre site avec <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React JS</a>. Cette application emploie des cookies pour fonctionner. Nous employons auncun autre type de cookies sur notre site.</p>
                        </article>
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
 
export default CguPage;