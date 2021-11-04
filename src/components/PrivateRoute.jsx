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
    if(props.cart && props.setCart){
        props.location.cart = props.cart
        props.location.setCart = props.setCart
    }

    return isAuthenticated ? (
        (props.component.name !== "DeliveryPage" && props.component.name !== "SummaryPage" && props.component.name !== "HourPage") ?
            (<Route path={props.path} component={props.component} />)
        :
            ((props.cart.orderItems.length === 0 && (props.component.name === "DeliveryPage" || props.component.name === "HourPage")) || ((props.cart.orderItems.length === 0 || props.cart.date === "" || props.cart.ifDelivered === "") && props.component.name === "SummaryPage"))
            ?
                (<Redirect to="/menu" />)
            :
                (<Route path={props.path} component={props.component} />)
    ) : (
        <Redirect to="/login" />
    )
}
 
export default PrivateRoute;