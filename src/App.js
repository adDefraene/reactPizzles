import React, {useEffect, useState}  from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
// COMPONENTS
import Nav from './components/main/Nav';
import Cart from './components/main/Cart';
import Footer from './components/main/Footer';
import PrivateRoute from './components/PrivateRoute';
// SERVICES & CONTEXTS
import authAPI from './services/authAPI';
import AuthContext from './contexts/AuthContext';
// PAGES
import HomePage from './pages/home/HomePage';
import MenuPage from './pages/menu/MenuPage';
import PizzaPage from './pages/menu/PizzaPage';
import AddPizzaPage from './pages/menu/AddPizzaPage';
import LoginPage from './pages/profile/LoginPage';
import RegisterPage from './pages/profile/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import ReviewPage from './pages/profile/ReviewPage';
import PasswordUpdatePage from './pages/profile/PasswordUpdatePage';
import ContactPage from './pages/ContactPage';
import DeliveryPage from './pages/checkout/DeliveryPage';
import HourPage from './pages/checkout/HourPage';
import SummaryPage from './pages/checkout/SummaryPage';
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
// JS
import cartJs from './js/CartJS';
import jwtDecode from 'jwt-decode';

/**
 * My Pizzles website-App !
 * @returns html
 */
const App = () => {

  const [cart, setCart] = useState({
        customer : "/api/users/",
        orderItems : [
          {
            itemPizza: "/api/pizzas/calzone",
            supIngredients: [
              "/api/ingredients/26",
              "/api/ingredients/21"
            ],
            totalItem: 7.5
          },
          {
            itemPizza: "/api/pizzas/francaise",
            supIngredients: [],
            totalItem: 12.5
          }
        ],
        date: "",
        ifDelivered: "",
        preTotal: 20
  })
  
  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated)

  const contextValue = {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: setIsAuthenticated
  }

  // Method that sets the user's api path to the "customer" field when logging in or resets it when logging out
  const setOrderUser = () => {
      // New cart var that will contains the new "customer" field
      let newCart =  Object.assign({}, cart)
      // If user is authenticated
      if(isAuthenticated){
          // Decode its JWT token...
          const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))
          //... to get its id in order to give it to the "customer" field
          newCart.customer += userInfosJWT.id
        } else {
          // Resets the "customer" field
          newCart.customer = "/api/users/"
        }
        // Updates the cart
        setCart(newCart)
  }

  useEffect(()=>{
    cartJs()
    authAPI.isAuthenticated()
  },[])

  // Use effect when logging in/out
  useEffect(()=> {
      setOrderUser()
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={contextValue}>
        <Router>
            <Nav cart={cart}  />
            <Cart cart={cart} setCart={setCart} />
            <Switch>
                <Route path="/menu" component={MenuPage} />
                <Route path="/pizza/:slug" component={PizzaPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/profile/review/:id" component={ReviewPage} />
                <PrivateRoute path="/profile/password-update" component={PasswordUpdatePage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                <PrivateRoute path="/addpizza/:slug" component={AddPizzaPage} cart={cart} setCart={setCart} />
                <PrivateRoute path="/delivery" component={DeliveryPage} cart={cart} setCart={setCart} />
                <PrivateRoute path="/hour" component={HourPage} cart={cart} setCart={setCart} />
                <PrivateRoute path="/summary" component={SummaryPage} cart={cart} setCart={setCart} />
                <Route path="/" component={HomePage} />
            </Switch>
            <Footer />
        </Router>
    </AuthContext.Provider>
  )
}

export default App;