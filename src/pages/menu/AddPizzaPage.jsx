import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import pizzasAPI from '../../services/pizzasAPI';
import ingredientsAPI from '../../services/ingredientsAPI';
import MenuSupIngredients from '../../components/menu/MenuSupIngredients';

const AddPizzaPage = ({match}) => {


    var slug = match.params.slug

    const [pizza, setPizza] = useState({
        "name" : "",
        "description" : "",
        "price" : "",
        "type" : "",
        "image" : "",
        "ingredients": [],
        "slug": slug
    })
    
    const fetchPizza = async slug => {
        try{
            const data = await pizzasAPI.find(slug)
            setPizza(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

    const [supIngredients, setSupIngredients] = useState([])
    
    const fetchSupIngredients = async () => {
        try{
            const data = await ingredientsAPI.findAll()
            setSupIngredients(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

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
        {supIngredients.map(ingredient => {

            var ifIngredientOnPizza = false

            pizza.ingredients.forEach(ingredientPizza => {
                if(ingredient.name === ingredientPizza.name){
                    ifIngredientOnPizza = true
                }
            })

            let putain = `${pizza.name}_-_${ingredient.id}`

            return(
                <MenuSupIngredients
                    key={putain}
                    ifOnPizza={ifIngredientOnPizza}
                    image={ingredient.image}
                    name={ingredient.name}
                    price={ingredient.price}
                />
            )
        })}
        <div className="col-12 my-4">
            <h2 className="pizzles-txt-title pizzles-pizzaAdd-total m-auto text-center">Total de la pizza : <span>13,00€</span></h2>
        </div>
        <div className="col-12 my-3">
            <Link to="#" className="pizzles-btn pizzles-btn-red">Ajouter au panier<i className="fas fa-cart-arrow-down"></i></Link>
        </div>
    </div>
</div>
</>
     );
}
export default AddPizzaPage;