import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ingredientsApiMethods from '../../services/pizzasAPI';

const SummarySupIngredient = (props) => {

    const bigId = props.slug

    const [currentSupIngredient, setCurrentSupIngredient] = useState({
        "name" : "",
        "price" : "",
        "slug": bigId
    })

    const fetchPizza = async bigId => {
        try{
            const data = await ingredientsApiMethods.findId(bigId)
            setCurrentSupIngredient(data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchPizza(bigId)
    }, [bigId])

    return ( `${currentSupIngredient.name} ${currentSupIngredient.price.toLocaleString()} €` );
}
 
export default SummarySupIngredient;