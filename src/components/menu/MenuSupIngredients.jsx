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
    // Checks if the cell is not disabled to do or not the toggle class event
        // If the cell is not disabled
        if(!e.currentTarget.classList.contains("disabled")){
            // Toggles the state
            e.currentTarget.classList.toggle("selected")
        }
    // Updates the current itemOrder if a supIngredient is added or removed
        // Creat the var of the new cart
        let newOrderItem = Object.assign({}, props.itemOrder)
        // If the current cell is selected
        if(e.currentTarget.classList.contains("selected")){
            // Pushes the sup ingredient into the "supIngredients" array
            newOrderItem.supIngredients.push(props.id)
            // Updates the total of the itemOrder by adding its price
            newOrderItem.totalItem += parseFloat(props.price)
            // If the current cell is unselected
        }else{
            // Remove the supIngredient from the "supIngrdients" array
            newOrderItem.supIngredients.splice(newOrderItem.supIngredients.indexOf(props.id), 1)
            // Updates the total of the itemOrder by deleting its price
            newOrderItem.totalItem -= parseFloat(props.price)
        }
        // Updates the itemOrder
        props.setItemOrder(newOrderItem)
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