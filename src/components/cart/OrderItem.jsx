import React,  { useState, useEffect } from 'react';
import pizzasAPI from '../../services/pizzasAPI';
import OrderSupIngredient from './OrderSupIngredient';
import { toast } from 'react-toastify';

const OrderItem = (props) => {
/* 
    const [totalPizza, setTotalPizza] = useState(0)
    */

 /*    const [totalIngredients, setTotalIngredients] = useState(0)  */

    const [currentPizza, setCurrentPizza] = useState({
        "@id" : props.item.itemPizza,
        name : "",
        description : "",
        price : "",
        type : "",
        image : "",
        ingredients: [],
        slug: ""
    })
    
    const fetchCurrentPizza = async () => {
        try{
            const data = await pizzasAPI.findId(props.item.itemPizza)
            setCurrentPizza(data)
        }catch(error){
            console.error(error)
        }
    }
/* 
    const setPizzaTotal = () => {
        if(currentPizza.price !== "" && totalPizza === 0){
            console.log(currentPizza.price)
            console.log(totalIngredients)
            setTotalPizza(parseFloat(currentPizza.price) + totalIngredients)
        }
    } */

    const handleDelete = (event) => {
        let newCart = Object.assign({}, props.cart)
        newCart.orderItems.splice(event.target.attributes.iditem.value, 1)
        newCart.preTotal -= props.item.totalItem
        props.setCart(newCart)
        toast.warning("Pizza retirée du panier !")
        /* 
        setTotalPizza(0)
        setTotalIngredients(0) */
    }
/* 
    useEffect(()=>{
        setTotalPizza(0)
        setTotalIngredients(0)
    }, [props.cart, props.item]) */
    
    useEffect(()=>{
        fetchCurrentPizza()
        //setPizzaTotal()
    }, [props.item /*, currentPizza, totalPizza , totalIngredients */])
    

    return ( 
<>
    <div className="pizzles-cart-item my-3 px-3">
        <div className="row text-center p-3 align-items-center">
            <div className="d-none d-md-block col-md-2 col-xl-1">
                <img src={`http://api.pizzles.adriendefraene.be/images/${currentPizza.image}`} alt={currentPizza.name} />
            </div>
            <div className={`col-12 col-md-4 col-lg order-1 pizzles-cart-item-static pizzles-cart-item-pizza ${(currentPizza.type === "PROMO" ? "pizzles-menu-pizzas-promos" : "")} `}>
                <p>{currentPizza.name}</p>
                <p className="pizzles-priceTag mx-auto">{currentPizza.price.toLocaleString()} €</p>
            </div>
            <div className="col-12 col-md order-2 order-md-3 order-lg-2 pizzles-cart-item-ingredients">
                <div className="row">
                    {(props.item.supIngredients.length > 0 ? (props.item.supIngredients.map((supIngredient, id) => {
                        if(id > 0){
                            return (
                            <>
                                <div className="col pizzles-cart-item-static pizzles-cart-item-plus">
                                <p>+</p>
                                </div>
                                <OrderSupIngredient key={`p_${props.itemId}_sp_${id}`} /* totalIngredients={totalIngredients} setTotalIngredients={setTotalIngredients} */ supIngredient={supIngredient} />
                            </>
                            )
                        }else{
                            return(
                                <OrderSupIngredient key={`p_${props.itemId}_sp_${id}`} /* totalIngredients={totalIngredients} setTotalIngredients={setTotalIngredients} */ supIngredient={supIngredient} />
                            )
                        }
                    }) ) : (<div className="col-12 col-md order-2 order-md-3 order-lg-2 pizzles-cart-item-ingredient"><div className="row"><p>Aucun ingrédient supplémentaire</p></div></div>)
                    )}
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg order-3 order-md-2 order-lg-3 pizzles-cart-item-static pizzles-cart-item-total">
                <p>Total de la pizza</p>
                <span className="pizzles-priceTag mx-auto">{props.item.totalItem.toLocaleString()} €</span>
            </div>
        </div>
        <div onClick={handleDelete} iditem={props.itemId} className="pizzles-cart-item-delete" title="Supprimer cet article">-</div>
    </div>
</>
    );
}


 
export default OrderItem;