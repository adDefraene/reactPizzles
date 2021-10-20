/* import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom' */
import React from 'react';
import {Link} from 'react-router-dom'


const Nav = () => {
/* 
    const getRouteValue = () => {
        console.log("bjcdfslofgbhvkwsgl")
    }

    useEffect(()=>{
        getRouteValue()
    }, [useLocation]) */


    return ( 
<>
<nav className="pizzles-nav text-center">
    <div className="row">
        <Link to="/" className="col pizzles-nav-link">
              <img src="/images/logos/PIZZLES_PICTO.png" alt="Page principale" />
              <h3>Accueil</h3>
        </Link>
        <Link to="/menu" className="col pizzles-nav-link">
              <img src="/images/logos/MENU_PICTO.png" alt="Menu" />
              <h3>Menu</h3>
        </Link>
        <div className="col pizzles-cart-icon">
            <img src="/images/logos/PANIER_PICTO.png" alt="Panier" />
            <h3>Panier</h3>
            <span>0</span>
        </div>
        <Link to="/contact" className="col pizzles-nav-link">
            <img src="/images/logos/CONTACT_PICTO.png" alt="Contact" />
            <h3>Contact</h3>
        </Link>
        <Link to="/profile" className="col pizzles-nav-link">
            <img src="/images/logos/COMPTE_PICTO.png" alt="Mon compte" />
            <h3>Mon compte</h3>
        </Link>
    </div>
</nav>
</>
     );
}
 
export default Nav;