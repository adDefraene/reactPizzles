import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Field from '../components/form/Field';
import jwtDecode from 'jwt-decode';

/**
 * Page that is a contact form in order to send a message
 * @returns html
 */
const ContactPage = () => {

    // Var of the content of the contact form
    const [contactForm, setContactForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        message : ""
    })

    // Method that handles the changes of the contact form
    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setContactForm({...contactForm, [name]: value})
    }


    // Var that retreives the the users state of authentication
    const {isAuthenticated} = useContext(AuthContext)

    // Method that precompletes the contacxt form with the user's information from their JWT token stored
    const preCompleteForm = () => {
        // If the current user is authenticated
        if(isAuthenticated){
            // Get and decode their informations
            let userInfos = jwtDecode(window.localStorage.getItem('authToken'))
            // Sets them in the contact form
            setContactForm({
                firstName : userInfos.firstName,
                lastName : userInfos.lastName,
                email : userInfos.username
            })
        }
    }

    // On load, (maybe) precomplete the form
    useState(()=>{
        preCompleteForm()
    },[])

    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12 mb-5">
                <h2 className="pizzles-title text-center mb-4 mx-auto">Contactez-nous</h2>
            </div>
            <div className="col-12 pizzles-register-box my-3 p-3">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 my-3 py-4 px-5">
                        <form action="#" className="row">
                            <div className="col-12 col-md-6">
                                <Field
                                    label="Votre prénom"
                                    type="text"
                                    name="firstName"
                                    value={contactForm.firstName}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Field
                                    label="Votre nom"
                                    type="text"
                                    name="lastName"
                                    value={contactForm.lastName}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </div>
                            <div className="col-12">
                                <Field
                                    label="Votre adresse mail"
                                    type="mail"
                                    name="email"
                                    value={contactForm.email}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="contactMessage" className="form-label">Votre message</label>
                                <textarea required value={contactForm.message} onChange={handleChange} name="message" maxLength="1000" className="form-control" id="message" style={{resize:"none"}} rows="5" placeholder="Écrivez votre demande, remarque, etc."></textarea>
                                <span id="messageCharacter">1000</span>
                            </div>
                            <button type="submit" id="registerSubmit" className="pizzles-btn pizzles-btn-yellow mt-5 mb-2">Envoyer mon message<i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
     );
}
 
export default ContactPage;