import React, { useState } from 'react';
import { useEffect } from 'react';
import pizzasApiMethods from '../../services/pizzasAPI';

const SummaryPizza = (props) => {

    const bigId = props.slug

    const [currentPizza, setCurrentPizza] = useState({
        "name" : "",
        "description" : "",
        "price" : "",
        "type" : "",
        "image" : "",
        "ingredients": [],
        "slug": bigId
    })

    const fetchPizza = async bigId => {
        try{
            const data = await pizzasApiMethods.findId(bigId)
            setCurrentPizza(data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchPizza(bigId)
    }, [bigId])

    return ( `${currentPizza.name} ${currentPizza.price.toLocaleString()} €` );
}
 
export default SummaryPizza;