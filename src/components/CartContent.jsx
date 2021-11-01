import React from 'react';
 
class CartContent extends React.Component {
    constructor() {

        var cart = {
            "customer" : "",
            "orderItems" : [
                {
                    "itemPizza": "/api/pizzas/jambon-deluxe",
                    "supIngredients": [
                        "/api/ingredients/1"
                    ]
                },
            ],
            "date": "",
            "ifDelivered": ""
    
            /* SCHEME
            "customer" : "/api/users/34",
            "orderItems" : [
                {
                    "itemPizza": "/api/pizzas/jambon-deluxe",
                    "supIngredients": [
                        "/api/ingredients/1"
                    ]
                }
            ],
            "date": "2021-10-11T20:45:00+00:00",
            "ifDelivered": true
            */
        }
    
        const getLatestValue = () => {
            cart = JSON.parse(window.localStorage.getItem("cart"))
        }
        
        const setLatestValue = (newCart) => {
            let newCartJSON = JSON.stringify(newCart)
            window.localStorage.getItem("cart", newCartJSON)
        }
    
        const getCart = () => {
            return cart
        }
        
        const setCart = (newCart) => {
            cart = newCart
        }
        
        const addOrderItem = (myCart, orderItem) => {
            myCart.orderItems.push(orderItem)
        }
        
        const deleteOrderItem = (myCart, orderItemIndex) => {
            myCart.orderItems.splice(orderItemIndex, 1)
        }

        const getOrderItemsNumber = () => {
            return cart.orderItems.length
        }
    
        const cartMethods = {
            getLatestValue: getLatestValue,
            setLatestValue: setLatestValue,
            getCart: getCart,
            setCart: setCart,
            addOrderItem: addOrderItem,
            deleteOrderItem: deleteOrderItem,
            getOrderItemsNumber: getOrderItemsNumber
        }

        return cartMethods

    }
}
 
export default CartContent;