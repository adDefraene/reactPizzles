/* import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom' */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

/**
 * Our main navigation menu
 * @returns html
 */
const Nav = (props) => {
/*
    useEffect(()=>{
        getRouteValue()
    }, [useLocation]) */

    const [numberOfItems, setNumberOfItems] = useState("")

    const getNumberOfItems = () => {
        if(props.cart !== null){
            setNumberOfItems(props.cart.orderItems.length)
        } else {
            setNumberOfItems(0)
        }
    }

    useEffect(()=>{
        getNumberOfItems()
    }, [props.cart])
    return ( 
<>
    <nav className="pizzles-nav text-center">
        <div className="row">
            <Link to="/" className="col pizzles-nav-link pizzles-nav-selectedPage" id="pizzles-nav-home">
                <img src="/images/logos/PIZZLES_PICTO.png" alt="Page principale" />
                <h3>Accueil</h3>
            </Link>
            <Link to="/menu" className="col pizzles-nav-link" id="pizzles-nav-menu">
                <img src="/images/logos/MENU_PICTO.png" alt="Menu" />
                <h3>Menu</h3>
            </Link>
            <div className="col pizzles-cart-icon">
                <img src="/images/logos/PANIER_PICTO.png" alt="Panier" />
                <h3>Panier</h3>
                <span>{numberOfItems}</span>
            </div>
            <Link to="/contact" className="col pizzles-nav-link" id="pizzles-nav-contact">
                <img src="/images/logos/CONTACT_PICTO.png" alt="Contact" />
                <h3>Contact</h3>
            </Link>
            <Link to="/profile" className="col pizzles-nav-link" id="pizzles-nav-profile">
                <img src="/images/logos/COMPTE_PICTO.png" alt="Mon compte" />
                <h3>Mon compte</h3>
            </Link>
        </div>
    </nav>
</>
     );
}
 
export default Nav;