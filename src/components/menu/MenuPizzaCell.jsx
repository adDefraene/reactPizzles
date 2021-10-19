import React from 'react';
import {Link} from 'react-router-dom'

const MenuPizzaCell = (props) => {
    return (
    <div className={`${(props.type === "POTM" ? `col-12` : (props.type === "PROMO" ? `col-6 col-md-4` : `col-6 col-md-4 col-lg-2`)) }`}>
        <div className={`p-2 pizzles-menu-pizzas-cell text-center ${(props.type === "POTM" ? ` pizzles-menu-pizza-pdm ` : ``)} ${(props.type === "PROMO" ? `pizzles-menu-pizzas-promos` : `` )}`}>
            <img src={`http://api.pizzles.adriendefraene.be/images/${props.image}`} alt={`Pizza ${props.name}`} />
            <Link to={`/pizza/${props.slug}`} className="pizzles-menu-cell-name  my-auto">{props.name}</Link>
            <p className="pizzles-priceTag my-auto">{props.price.toLocaleString()} €</p>
            <Link to={`/addpizza/${props.slug}`} className="pizzles-menu-cell-add  mt-auto">+
            </Link>
        </div>
    </div>
     );
}
 
export default MenuPizzaCell;