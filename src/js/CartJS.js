/**
 * JS used in the cart's working
 */
const Cart = () => {
    
    // Toggle the display of the cart
    function toggleCart(){
        document.querySelector(".pizzles-cart").classList.toggle("pizzles-cart-open")
        document.querySelector(".pizzles-darkCache").classList.toggle("active")
    }
    
    // Elements used to toggle the cart's display
    document.querySelector(".pizzles-darkCache").addEventListener("click", toggleCart)
    document.querySelector(".pizzles-cart-icon").addEventListener("click", toggleCart)
    document.querySelector(".pizzles-cart-close").addEventListener("click", toggleCart)
    document.querySelector("#doOrder").addEventListener("click", toggleCart)
}

export default Cart;