import React from 'react';
import {Link} from 'react-router-dom'

const RegisterPage = () => {
    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12">
                <h2 className="pizzles-title text-center mx-auto mb-4">Se créer un compte</h2>
            </div>
            <div className="col-12 col-md-10 offset-md-1 pizzles-register-box my-3 py-4 px-5">
                <form className="row" action="#">
                    <div className="col-12 col-md-6">
                        <label for="registerName" className="form-label">Mon nom</label>
                        <input type="text" className="form-control mb-4" id="registerName" name="registerName" required />
                    </div>
                    <div className="col-12 col-md-6">
                        <label for="registerSurname" className="form-label">Mon prénom</label>
                        <input type="text" className="form-control mb-4" id="registerSurname" name="registerSurname" required />
                    </div>
                    <div className="col-12">
                        <label for="registerEmail" className="form-label">Mon adresse mail</label>
                        <input type="email" className="form-control mb-4" id="registerEmail" name="registerEmail" aria-describedby="emailHelp" required />
                    </div>
                    <div className="col-12">
                        <label for="registerAddress" className="form-label">Mon adresse de livraison</label>
                        <input type="text" className="form-control mb-4" id="registerAddress" name="registerAddress" required />
                    </div>
                    <div className="col-12">
                        <label for="registerPassword" className="form-label">Mon mot de passe</label>
                        <div className="pizzles-register-password">
                            <button type="button" id="register-reveal-password" className="btn btn-secondary">Vérifier<i className="fas fa-eye"></i></button>
                            <input type="password" className="form-control mb-4 ml-2" id="registerPassword" name="registerPassword" required />
                        </div>
                    </div>
                    <div className="col-12 pizzles-register-cgu px-5">
                        <label for="registerCGU" className="form-label">J'accepte les condition générales d'utilisation</label>
                        <button type="button" className="btn btn-secondary mx-2" data-bs-toggle="modal" id="buttonCGU" data-bs-target="#modal-cgu">Consulter les CGU<i className="fas fa-book-open"></i></button>
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id="registerCGU" name="registerCGU" required />
                        </div>
                    </div>
                    <button type="submit" id="registerSubmit" disabled className="submit-disabled pizzles-btn pizzles-btn-red mt-5 mb-2">S'enregistrer<i className="fas fas fa-pen-alt"></i></button>
                </form>
            </div>
            <div className="col-12 col-md-10 offset-md-1 mt-3 mb-5 pizzles-alternateLogin">
                <p>Déjà un compte ?</p>
                <Link to="/login" className="pizzles-btn pizzles-btn-white ml-auto">Se connecter<i className="fas fa-sign-in-alt"></i></Link>
            </div>
        </div>
    </div>
    <div className="modal fade" id="modal-cgu" tabindex="-1" aria-labelledby="modal-cgu" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Conditions générales d'utilisation</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <article className="modal-body">
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
                </article>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</>
     );
}
 
export default RegisterPage;