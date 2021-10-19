const Cart = () => {
 
    function toggleCart(){
        document.querySelector(".pizzles-cart").classList.toggle("pizzles-cart-open")
        document.querySelector(".pizzles-darkCache").classList.toggle("active")
    }
    
    document.querySelector(".pizzles-darkCache").addEventListener("click", toggleCart)
    document.querySelector(".pizzles-cart-icon").addEventListener("click", toggleCart)
    document.querySelector(".pizzles-cart-close").addEventListener("click", toggleCart)
}

export default Cart;