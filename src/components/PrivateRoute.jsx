import React, {useContext, Component } from 'react';
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
        console.log(props)
    }

    return isAuthenticated ? (
        <Route path={props.path} component={props.component} />
    ) : (
        <Redirect to="/login" />
    )
}
 
export default PrivateRoute;