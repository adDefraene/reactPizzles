import React from 'react';

/**
 * The cell of each supplement ingredients that is featured in the "AddPizza" page
 * @param props 
 * @returns html
 */
const MenuSupIngredients = (props) => {

    /**
     * Toggle the "selected" state for a sup' ingredients, if it is not disabled
     * @param {event} e 
     */
    const handleClick = (e) => {
        // If the cell is not disbaled
        if(!e.currentTarget.classList.contains("disabled")){
            // Toggles the state
            e.currentTarget.classList.toggle("selected")
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