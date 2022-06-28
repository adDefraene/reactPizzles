import React, {useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.js'

/**
 * Route that works when the user is fully registered
 * @param props 
 * @returns Component
 */
const PrivateRoute = (props) => {
    const {isAuthenticated} = useContext(AuthContext)
    const today = new Date()
    if(props.cart && props.setCart){
        props.location.cart = props.cart
        props.location.setCart = props.setCart
    }

    return isAuthenticated ? (
        // If not redirect in the order process
        (props.component.name !== "DeliveryPage" && props.component.name !== "SummaryPage" && props.component.name !== "HourPage" && props.component.name !== "CheckoutPage" && props.component.name !== "AddPizzaPage") ?
            (<Route path={props.path} component={props.component} />)
        :
            ((props.cart.orderItems.length === 0 && (props.component.name === "DeliveryPage" || props.component.name === "HourPage")) || ((props.cart.orderItems.length === 0 || props.cart.date === "" || props.cart.ifDelivered === "") && (props.component.name === "SummaryPage" || props.component.name === "CheckoutPage")))
            ?
                (<Redirect to="/menu" />)
            :
                (today.getDay() <= 1)
                ?
                    (<Redirect to="/closed" />)
                :
                    (<Route path={props.path} component={props.component} />)
    ) : (
        <Redirect to="/login" />
    )
}
 
export default PrivateRoute;