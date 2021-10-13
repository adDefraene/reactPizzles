import React from 'react';

const Cart = () => {


    return ( 
<>
    <div className="pizzles-cart">
          <div className="row row-cart">
              <div className="col-12">
                  <div className="row">
                      <div className="col-12 col-md-8 order-2 order-md-1 offset-md-2">
                          <h2 className="pizzles-title text-center mb-4 mx-auto">Mon panier</h2>
                      </div>
                      <div className="col-12 col-md-2 order-1 order-md-2 text-end">
                          <span className="pizzles-cart-close mx-auto my-2 text-center" title="Fermer le panier">X</span>
                      </div>
                  </div>
              </div>
              <div className="col-12 py-3 px-2 my-2 pizzles-cart-content">
                  <div className="container-fluid">
                      <div className="pizzles-cart-item my-3 px-3">
                          <div className="row text-center p-3">
                              <div className="d-none d-md-block col-md-2 col-xl-1">
                                  <img src="/images/pics/Pizza2.jpg" alt="Pizza" />
                              </div>
                              <div className="col-12 col-md-4 col-lg order-1 pizzles-cart-item-static pizzles-cart-item-pizza">
                                  <p>Margherita</p>
                                  <span className="pizzles-priceTag mx-auto">11,50€</span>
                              </div>
                              <div className="col-12 col-md order-2 order-md-3 order-lg-2 pizzles-cart-item-ingredients">
                                  <div className="row">
                                      <div className="col pizzles-cart-item-static pizzles-cart-item-ingredient">
                                          <p>Poivron</p>
                                          <span className="pizzles-priceTag mx-auto">0,50€</span>
                                      </div>
                                      <div className="col pizzles-cart-item-static pizzles-cart-item-plus">
                                          <p>+</p>
                                      </div>
                                      <div className="col pizzles-cart-item-static pizzles-cart-item-ingredient">
                                          <p>Pepperonnis</p>
                                          <span className="pizzles-priceTag mx-auto">1,00€</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg order-3 order-md-2 order-lg-3 pizzles-cart-item-static pizzles-cart-item-total">
                                  <p>Total de la pizza</p>
                                  <span className="pizzles-priceTag mx-auto">11,50€</span>
                              </div>
                          </div>
                          <div className="pizzles-cart-item-delete" title="Supprimer cet article">-</div>
                      </div>
                      <div className="pizzles-cart-item my-3 px-3">
                          <div className="row text-center p-3">
                              <div className="d-none d-md-block col-md-2 col-xl-1">
                                  <img src="/images/pics/Pizza2.jpg" alt="Pizza" />
                              </div>
                              <div className="col-12 col-md-4 col-lg order-1 pizzles-cart-item-static pizzles-cart-item-pizza">
                                  <p>Margherita</p>
                                  <span className="pizzles-priceTag mx-auto">11,50€</span>
                              </div>
                              <div className="col-12 col-md order-2 order-md-3 order-lg-2 pizzles-cart-item-ingredients">
                                  <div className="row">
                                      <p>Aucun ingrédient supplémentaire</p>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg order-3 order-md-2 order-lg-3 pizzles-cart-item-static pizzles-cart-item-total">
                                  <p>Total de la pizza</p>
                                  <span className="pizzles-priceTag mx-auto">11,50€</span>
                              </div>
                          </div>
                          <div className="pizzles-cart-item-delete" title="Supprimer cet article">-</div>
                      </div>
                  </div>
              </div>
              <div className="col-12 my-4">
                  <h2 className="pizzles-txt-title pizzles-cart-total m-auto text-center">Total de la commande : <span>13,00€</span></h2>
              </div>
              <div className="col-12 my-3">
                  <a href="/delivery" className="pizzles-btn pizzles-btn-yellow">Passer la commande<i className="fas fa-cart-arrow-down"></i></a>
              </div>
          </div>
    </div>
    <div className="pizzles-darkCache"></div>
</>
     );
}
 
export default Cart;