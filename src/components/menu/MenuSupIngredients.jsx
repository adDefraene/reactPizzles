import React from 'react';

const MenuSupIngredients = (props) => {

    const handleClick = (a) => {
        if(!a.currentTarget.classList.contains("disabled")){
            a.currentTarget.classList.toggle("selected")
        }
    }

    return ( 
        <div onClick={handleClick} className={`pizzles-pizzaAdd-ingredient-cell px-3 py-2 ${(props.ifOnPizza ? " disabled " : "")}`}>
        <img src={`http://api.pizzles.adriendefraene.be/images/${props.image}`} alt={props.name} />
            <div className="text-center m-auto">
                <p className="mb-2">{props.name}</p>
                <span className="pizzles-priceTag">{props.price.toLocaleString()}€</span>
            </div>
        </div>
    );
}
 
export default MenuSupIngredients;