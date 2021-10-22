import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

import usersAPI from '../../services/usersAPI';
import Field from '../../components/form/Field';

const RegisterPage = ({history}) => {

    const [user, setUser] = useState({
        email: "",
        firstName : "",
        lastName : "",
        address: "",
        city: "unused",
        password : ""
    })

    const [errors, setErrors] = useState({
        email: "",
        firstName : "",
        lastName : "",
        address: "",
        password : ""
    })

    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setUser({...user, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()

        const apiErrors = {}

        try{
            await usersAPI.create(user)
            setErrors({})
            history.replace("/login")
        }catch({response})
        {
            const {violations} = response.data
            if(violations){
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message
                })
                setErrors(apiErrors)
            }
        }
    }

    const revealPassword = (event) => {
        let password = document.querySelector("#password")
        if(password.type === "password"){
            event.currentTarget.innerHTML = 'Cacher<i class="fas fa-eye-slash"></i>'
            password.type = "text"
        }else{
            event.currentTarget.innerHTML = 'Vérifier<i class="fas fa-eye"></i>'
            password.type = "password"
        }
    }

    const acceptCGU = (event) => {
        let submit = document.querySelector("#registerSubmit")
        if(event.currentTarget.checked === true){
            submit.setAttribute("disabled", "")
            submit.classList.add("submit-disabled")
        }else{
            submit.removeAttribute("disabled")
            submit.classList.remove("submit-disabled")
        }
    }

    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12">
                <h2 className="pizzles-title text-center mx-auto mb-4">Se créer un compte</h2>
            </div>
            <div className="col-12 col-md-10 offset-md-1 pizzles-register-box my-3 py-4 px-5">
                <form onSubmit={handleSubmit} className="row">
                    <div className="col-12 col-md-6">
                        <Field
                            label="Mon prénom"
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            required={true}
                            error={errors.firstName}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Field
                            label="Mon nom"
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            required={true}
                            error={errors.lastName}
                        />
                    </div>
                    <div className="col-12">
                        <Field
                            label="Mon adresse e-mail"
                            type="mail"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required={true}
                            error={errors.email}
                        />
                    </div>
                    <div className="col-12">
                        <Field
                            label="Mon adresse de livraison"
                            type="text"
                            name="address"
                            value={user.address}
                            onChange={handleChange}
                            required={true}
                            error={errors.address}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="password" className="form-label">Mon mot de passe</label>
                        <div className="pizzles-register-password">
                            <button onMouseDown={revealPassword} type="button" id="register-reveal-password" className="btn btn-secondary">Vérifier<i className="fas fa-eye"></i></button>
                            <input value={user.password} onChange={handleChange} type="password" className="form-control mb-4 ml-2" id="password" name="password" required />
                        </div>
                    </div>
                    <div className="col-12 pizzles-register-cgu px-5">
                        <p className="form-label">J'accepte les condition générales d'utilisation</p>
                        <button type="button" className="btn btn-secondary mx-2" data-bs-toggle="modal" id="buttonCGU" data-bs-target="#modal-cgu">Consulter les CGU<i className="fas fa-book-open"></i></button>
                        <div className="form-check form-switch">
                            <input onMouseDown={acceptCGU} type="checkbox" className="form-check-input" id="registerCGU" name="registerCGU" required />
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
    <div className="modal fade" id="modal-cgu" tabIndex="-1" aria-labelledby="modal-cgu" aria-hidden="true">
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