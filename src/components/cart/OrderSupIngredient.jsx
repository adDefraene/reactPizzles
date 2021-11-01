import React, { useEffect, useState } from 'react';
import ingredientsAPI from '../../services/ingredientsAPI';

const OrderSupIngredients = (props) => {

    const [currentSupIngredient, setCurrentSupIngredient] = useState({
        name: "",
        price: ""
    })
    
    const fetchCurrentSupIngredient = async (supIngredient) => {
        try{
            const data = await ingredientsAPI.findId(supIngredient)
            setCurrentSupIngredient(data)
        }catch(error){
            console.error(error)
        }
    }

    const setTotalIngredients = () => {
        if(currentSupIngredient.price !== ""){
            props.setTotalIngredients(parseFloat(props.totalIngredients) + parseFloat(currentSupIngredient.price))
        }
    }

    useEffect(()=>{
        fetchCurrentSupIngredient(props.supIngredient)
        setTotalIngredients()
    }, [props.supIngredient, currentSupIngredient.price])

    return(
        <div className="col pizzles-cart-item-static pizzles-cart-item-ingredient">
            <p>{currentSupIngredient.name}</p>
            <span className="pizzles-priceTag mx-auto">{currentSupIngredient.price.toLocaleString()} €</span>
        </div>
    )
}
 
export default OrderSupIngredients;