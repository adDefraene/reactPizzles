import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import pizzasAPI from '../../services/pizzasAPI';
import ingredientsAPI from '../../services/ingredientsAPI';
import MenuSupIngredients from '../../components/menu/MenuSupIngredients';

const AddPizzaPage = (props) => {

    // Gets the slug from the URL
    var slug = props.match.params.slug

    // Var of the selected pizza
    const [pizza, setPizza] = useState({
        "name" : "",
        "description" : "",
        "price" : "",
        "type" : "",
        "image" : "",
        "ingredients": [],
        "slug": slug
    })

    // Var of the future itemOrder to be added to the cart
    const [itemOrder, setItemOrder] = useState({
        "itemPizza" : "",
        "supIngredients": [],
        "totalItem" : 0
    })

    /**
     * Method that sets the value of the pizza's id to the "itemPizza" and adds its price by default to the "totalItem"
     * @param data 
     */
    const defineItemOrder = (data) => {
            let newOrderItem = Object.assign({}, itemOrder)
            newOrderItem.totalItem = parseFloat(data.price)
            newOrderItem.itemPizza = data["@id"]
            setItemOrder(newOrderItem)
    }
    
    // Method that fetches the selected pizza
    const fetchPizza = async slug => {
        try{
            const data = await pizzasAPI.find(slug)
            setPizza(data)
            defineItemOrder(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

    // Var of all the supplements ingredients
    const [supIngredients, setSupIngredients] = useState([])
    
    // Method that fetches all of the ingredients
    const fetchSupIngredients = async () => {
        try{
            const data = await ingredientsAPI.findAll()
            setSupIngredients(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

    // Method that handles the add of the current orderItem to the cart
    const handleAddItem = () => {
        let newCart = Object.assign({}, props.location.cart)
        newCart.orderItems.push(itemOrder)
        newCart.preTotal += itemOrder.totalItem
        props.location.setCart(newCart)
    }

    // On load, do the fetches
    useEffect(()=>{
        fetchPizza(slug)
        fetchSupIngredients()
    }, [slug])

    return ( 
<>
<div className="container pizzles-first-container">
    <div className="row">
        <div className="col-12 col-lg-3">
            <Link to="/menu" className="pizzles-btn mb-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Annuler l'ajout</Link>
        </div>
    {/* Displays pizza's infos */}
        <div className="col-12 col-lg-6 mb-3">
            <h2 className="pizzles-title text-center mb-4 mx-auto">Ajouter une pizza</h2>
        </div>
        <div className={`col-10 col-md-6 col-xl-4 offset-1 offset-md-3 offset-xl-4 p-3 pizzles-pizzaAdd-pizza ${(pizza.type === "PROMO" ? " pizzles-menu-pizzas-promos " : "")}`}>
            <img src={`http://api.pizzles.adriendefraene.be/images/${pizza.image}`} alt={pizza.image} />
            <div className="text-center m-auto">
                <p className="mb-3">{pizza.name}</p>
                <span className="pizzles-priceTag">{pizza.price.toLocaleString()}€</span>
            </div>
        </div>
        <p className="pizzles-subtitles my-4">Ajouter des ingrédients</p>
    {/* Displays all of the ingredients' cells */}
        {supIngredients.map(ingredient => {

            // Var that says "if the ingredients is already on the pizza"
            var ifIngredientOnPizza = false
            //=> in the "MenuSupIngredient" component, adds yes or no the "disabled" class to the cell, in order to be unabled to select the ingredients if it is already on the pizza

            // For each of the ingredients on the pizza
            pizza.ingredients.forEach(ingredientPizza => {
                // is it the same as the current ingredient ? 
                if(ingredient.name === ingredientPizza.name){
                    ifIngredientOnPizza = true
                }
            })

            return(
                <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-4">
                    <MenuSupIngredients
                        key={`${pizza.name}_-_${ingredient.id}`}
                        ifOnPizza={ifIngredientOnPizza}
                        image={ingredient.image}
                        name={ingredient.name}
                        price={ingredient.price}
                        id={ingredient["@id"]}
                        itemOrder={itemOrder}
                        setItemOrder={setItemOrder}
                    />
                </div>
            )
        })}
        <div className="col-12 my-4">
            <h2 className="pizzles-txt-title pizzles-pizzaAdd-total m-auto text-center">Total de la pizza : <span>{itemOrder.totalItem} €</span></h2>
        </div>
        <div className="col-12 my-3">
            <Link to="/menu" onClick={handleAddItem} className="pizzles-btn pizzles-btn-red">Ajouter au panier<i className="fas fa-cart-arrow-down"></i></Link>
        </div>
    </div>
</div>
</>
     );
}
export default AddPizzaPage;