import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import pizzasAPI from '../../services/pizzasAPI';

const PizzaPage = ({match}) => {

    console.log(match.params.slug)

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

    useEffect(() => {
        fetchPizza(slug)
    }, [slug])

    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12 col-lg-3">
                <Link to="/menu" className="pizzles-btn mb-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour au menu</Link>
            </div>
            <div className="col-12 col-lg-6 mb-5">
                <h2 className="pizzles-title text-center mb-4 mx-auto">{pizza.name}</h2>
            </div>
            <div className="col-10 offset-1 text-center col-lg-5 offset-lg-0 text-lg-start pizzles-pizza-image">
                <img src={`http://api.pizzles.adriendefraene.be/images/${pizza.image}`} alt={pizza.name} />
            </div>
            <div className="col-10 offset-1 col-lg-5 offset-lg-2">
                <article className="pizzles-pizza-description pizzles-article mt-5">
                    <p>{pizza.description}</p>
                </article>
                <div className="row my-3">
                    <div className="col-12 col-sm-4 text-center text-sm-start pizzles-pizza-price my-4">{pizza.price.toLocaleString()} €</div>
                    <div className="col-12 col-sm-8 my-4">
                        <Link to={`/addpizza/${pizza.slug}`} className="pizzles-btn pizzles-btn-red">Commander<i className="fas fa-cart-plus"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-8 offset-2 offset-md-0 mb-2">
                <p className="my-4 pizzles-subtitles">Ingrédients</p>
                <div className="row">
                    {pizza.ingredients.map(ingredient => {
                        return (
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="py-2 px-3 mb-2 pizzles-pizza-ingredients">
                                <img src={`http://api.pizzles.adriendefraene.be/images/${ingredient.image}`} alt={ingredient.name} />
                                <p className="text-center m-auto">{ingredient.name}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
</>
     );
}
 
export default PizzaPage;