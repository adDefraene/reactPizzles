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
        console.log(props)
        // If the cell is not disbaled
        if(!e.currentTarget.classList.contains("disabled")){
            // Toggles the state
            e.currentTarget.classList.toggle("selected")
        }

        let newOrderItem = Object.assign({}, props.itemOrder)
        console.log("BEFORE CHANGE", newOrderItem)
        
        if(e.currentTarget.classList.contains("selected")){
            newOrderItem.supIngredients.push(props.id)
            newOrderItem.totalItem += parseFloat(props.price)
        }else{
            newOrderItem.supIngredients.splice(newOrderItem.supIngredients.indexOf(props.id), 1)
            newOrderItem.totalItem -= parseFloat(props.price)
        }
        
        console.log("AFTER CHANGE", newOrderItem)
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