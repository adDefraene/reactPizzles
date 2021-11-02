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

/**
 * My Pizzles website-App !
 * @returns html
 */
const App = () => {

  const [cart, setCart] = useState({
        customer : "",
        orderItems : [
            {
                "itemPizza": "/api/pizzas/jambon-deluxe",
                "supIngredients": [
                    "/api/ingredients/3"
                ],
                "totalItem": 9.88
            },
            {
                "itemPizza": "/api/pizzas/boulettes",
                "supIngredients": [],
                "totalItem": 8
            },
            {
                "itemPizza": "/api/pizzas/pizza-du-mois",
                "supIngredients": [
                  "/api/ingredients/1",
                  "/api/ingredients/2"
                ],
                "totalItem": 13.5
            },
        ],
        date: "",
        ifDelivered: "",
        preTotal: 31.38
  })
  
  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated)

  const contextValue = {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: setIsAuthenticated
  }

  useEffect(()=>{
    cartJs()
    authAPI.isAuthenticated()
  },[])

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
                <PrivateRoute path="/delivery" component={DeliveryPage} />
                <PrivateRoute path="/hour" component={HourPage} />
                <PrivateRoute path="/summary" component={SummaryPage} />
                <Route path="/" component={HomePage} />
            </Switch>
            <Footer />
        </Router>
    </AuthContext.Provider>
  )
}

export default App;