import React from 'react';

/**
 * Section that talks about the restaurant's location
 * @returns html
 */
const HomePagePlace = () => {
    return ( 
    <section id="pizzlesPlace">
        <div className="container pt-5 mb-5">
            <div className="row my-4">
                <div className="col-12 my-5 mx-auto">
                    <h2 className="pizzles-title text-center my-4 mx-auto">Où nous trouver ?</h2>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 my-4 order-1">
                    <div className="pizzles-contact-boxBig p-3">
                        <p><strong>Nos horaires</strong></p>
                        <p>Nous acceptons vos commandes<br />du mardi au samedi<br />de 11 H 30 à 14 H 00 et de 17 H 30 à 21 H 30</p>
                        <hr />
                        <p>Nous fermons tous les dimanche et lundi</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 my-4 order-3 order-xl-2 offset-lg-3 offset-xl-0 my-auto">
                    <div className="pizzles-contact-boxLittle p-3">
                        <p>Nous sommes situés au :<br /><strong>52 Chaussée de Bruxelles, 7800 Ath</strong></p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 my-4 order-2 order-xl-3">
                    <div className="pizzles-contact-boxBig p-3">
                        <strong>Nous sommes joignables</strong>
                        <a href="mailto:hey@adriendefraene.be?subject=Contact%20Pizzles" rel="noreferrer" target="_blank" className="pizzles-btn pizzles-btn-white mx-auto my-2">En nous envoyant un message ici<i className="fas fa-envelope-open-text"></i></a>
                        <p>Par téléphone (pas pour commander) : <br /><a href="tel:0479201994" rel="noreferrer" target="_blank">0479 20 19 94</a></p>
                        <p>
                            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                                <i className="fab fa-facebook-square mx-3"></i>
                            </a>
                            <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                                <i className="fab fa-instagram mx-3"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <iframe title="googleMapsPizzles" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31216.989268386817!2d3.762188716001929!3d50.641710884240666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3aaa69519eab7%3A0xc29b490d9afea4c6!2sChau.%20de%20Bruxelles%2052%2C%207800%20Ath!5e0!3m2!1sfr!2sbe!4v1633523763784!5m2!1sfr!2sbe" width="100%" height="400" style={{marginBottom: "-10px"}} allowFullScreen="" loading="lazy"></iframe>
    </section>
     );
}
 
export default HomePagePlace;