import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'

/**
 * Simply the footer of the website
 * @returns html
 */
const Footer = () => {

    const showCookiesBoxDisplay = (event) => {
        event.preventDefault()
        document.querySelector(".pizzles-cookies-box").classList.remove("pizzles-cookies-undisplayed")
    }

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
          window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView();
            }
          }, 0);
        }
      }, [pathname, hash, key]);

    return ( 
<>
    <footer className="py-4">
        <div className="container">
            <div className="row">
                {/* QUICK LINKS */}
                <div className="col-6 order-1 col-md-2 order-md-1">
                    <h4 className="text-center mb-3">Liens rapides</h4>
                    <Link to="/">Accueil</Link><br />
                    <Link to="/menu">Menu</Link><br />
                    <Link to="/#pizzlesPlace">Contact</Link><br />
                    <Link to="/profile">Mon compte</Link>
                </div>
                {/* LEGAL LINKS */}
                <div className="col-6 order-2 col-md-2 order-md-2">
                    <h4 className="text-center mb-3">Mentions légales</h4>
                    <Link to="/cgu">CGU</Link><br />
                    <a href="#" onClick={showCookiesBoxDisplay}>Règle des cookies</a>
                </div>
                {/* COPYRIGHTS */}
                <div className="col-12 order-5 col-md-4 order-md-3 text-center">
                    <img src="/images/logos/PIZZLES_W.png" alt="Logo de Pizzles en blanc" className="my-3" />
                    <p className="pizzles-copyright">(c) EPSE-LADP WEBD EI 2021<br />Defraene Adrien</p>
                </div>
                {/* PAYMENTS METHODS */}
                <div className="col-6 order-3 col-md-2 order-md-4 text-center">
                    <h4 className="mb-3">Paiement</h4>
                    <i className="fab fa-cc-stripe mx-3"></i>
                    <i className="fab fa-cc-mastercard mx-3"></i>
                </div>
                {/* SOCIAL NETWORKS */}
                <div className="col-6 order-4 col-md-2 order-md-5 text-center">
                    <h4 className="mb-3">Suivez-nous</h4>
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                        <i className="fab fa-facebook-square mx-3"></i>
                    </a>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
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