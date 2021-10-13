import React from 'react';


const Nav = () => {
    
    return ( 
<>
    <nav className="pizzles-nav text-center">
      <div className="row">
          <a href="/" className="col pizzles-nav-link">
              <img src="/images/logos/PIZZLES_PICTO.png" alt="Page principale" />
              <h3>Accueil</h3>
          </a>
          <a href="/menu" className="col pizzles-nav-link pizzles-nav-selectedPage">
              <img src="/images/logos/MENU_PICTO.png" alt="Menu" />
              <h3>Menu</h3>
          </a>
          <div className="col pizzles-cart-icon">
              <img src="/images/logos/PANIER_PICTO.png" alt="Panier" />
              <h3>Panier</h3>
              <span>0</span>
          </div>
          <a href="/contact" className="col pizzles-nav-link">
            <img src="/images/logos/CONTACT_PICTO.png" alt="Contact" />
            <h3>Contact</h3>
          </a>
          <a href="/profile" className="col pizzles-nav-link">
              <img src="/images/logos/COMPTE_PICTO.png" alt="Mon compte" />
              <h3>Mon compte</h3>
          </a>
      </div>
  </nav>
</>
     );
}
 
export default Nav;