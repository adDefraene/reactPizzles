import React from 'react';
import {Link} from 'react-router-dom'
import OrderItem from '../cart/OrderItem';

/**
 * The cart components which features the cart itself, the items to order and the black background
 * @param props 
 * @returns html
 */
const Cart = (props) => {

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
                  {props.cart.orderItems.length > 0 ? props.cart.orderItems.map((orderItem, id) => (<OrderItem key={`OrderItem_${id}`} itemId={id} cart={props.cart} setCart={props.setCart} item={orderItem} />)) : (<h1 className="text-center fst-italic">Le panier est vide</h1>) }
                  </div>
              </div>
              <div className="col-12 my-4">
                  <h2 className="pizzles-txt-title pizzles-cart-total m-auto text-center">Total de la commande : <span>{props.cart.preTotal.toLocaleString()} €</span></h2>
              </div>
              <div className="col-12 my-3">
                  <Link className="pizzles-btn pizzles-btn-yellow" id="doOrder" to="/delivery">
                    Passer la commande<i className="fas fa-cart-arrow-down"></i>
                  </Link>
              </div>
          </div>
    </div>
    <div className="pizzles-darkCache"></div>
</>
     );
}
export default Cart;