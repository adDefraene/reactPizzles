import React from 'react';

const ContactPage = () => {
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
                                <label for="contactName" className="form-label">Votre nom</label>
                                <input type="text" className="form-control mb-4" id="contactName" name="contactName" required />
                            </div>
                            <div className="col-12 col-md-6">
                                <label for="contactSurname" className="form-label">Votre prénom</label>
                                <input type="text" className="form-control mb-4" id="contactSurname" name="contactSurname" required />
                            </div>
                            <div className="col-12">
                                <label for="contactEmail" className="form-label">Votre adresse mail</label>
                                <input type="email" className="form-control mb-4" id="contactEmail" name="contactEmail" aria-describedby="emailHelp" required />
                            </div>
                            <div className="col-12">
                                <label for="contactMessage" className="form-label">Votre message</label>
                                <textarea required name="contactMessage" maxlength="1000" className="form-control" id="contactMessage" style={{resize:"none"}} rows="5" placeholder="Écrivez votre demande, remarque, etc."></textarea>
                                <span id="contactMessageCharacter">1000</span>
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