import React from 'react';

const Footer = () => {
    return ( 
<>
    <footer className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-6 order-1 col-md-2 order-md-1">
                    <h4 className="text-center mb-3">Liens rapides</h4>
                    <a href="/">Accueil</a><br />
                    <a href="/menu">Menu</a><br />
                    <a href="/contact">Contact</a><br />
                    <a href="/profile">Mon compte</a>
                </div>
                <div className="col-6 order-2 col-md-2 order-md-2">
                    <h4 className="text-center mb-3">Mentions légales</h4>
                    <a href="#">CGU</a><br />
                    <a href="#">Règle des cookies</a>
                </div>
                <div className="col-12 order-5 col-md-4 order-md-3 text-center">
                    <img src="/images/logos/PIZZLES_W.png" alt="Logo de Pizzles en blanc" className="my-3" />
                    <p className="pizzles-copyright">(c) EPSE-LADP WEBD EI 2021<br />Defraene Adrien</p>
                </div>
                <div className="col-6 order-3 col-md-2 order-md-4 text-center">
                    <h4 className="mb-3">Paiement</h4>
                    <a href="#">
                        <i className="fab fa-cc-stripe mx-3"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-cc-mastercard mx-3"></i>
                    </a>    
                </div>
                <div className="col-6 order-4 col-md-2 order-md-5 text-center">
                    <h4 className="mb-3">Suivez-nous</h4>
                    <a href="https://www.facebook.com">
                        <i className="fab fa-facebook-square mx-3"></i>
                    </a>
                    <a href="https://www.instagram.com">
                        <i className="fab fa-instagram mx-3"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</>
     );
}
 
export default Footer;