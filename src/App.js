import React, {useEffect, useState}  from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
// COMPONENTS
import Nav from './components/main/Nav';
import Cart from './components/main/Cart';
import Footer from './components/main/Footer';
import PrivateRoute from './components/PrivateRoute';
import CookiesDisplay from './components/main/CookiesDisplay';
// SERVICES & CONTEXTS
import authAPI from './services/authAPI';
import AuthContext from './contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
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
import DeliveryPage from './pages/checkout/DeliveryPage';
import HourPage from './pages/checkout/HourPage';
import SummaryPage from './pages/checkout/SummaryPage';
import ClosedPage from './pages/ClosedPage';
import CguPage from './pages/CguPage';
// STYLES
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
// JS
import cartJs from './js/CartJS';
import jwtDecode from 'jwt-decode';
import emailjs from 'emailjs-com';
/**
 * My Pizzles website-App !
 * @returns html
 */
const App = () => {

  const [cart, setCart] = useState({
        customer : "/api/users/",
        orderItems : [],
        date: "",
        ifDelivered: "",
        preTotal: 0
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

  
  emailjs.init(process.env.REACT_APP_MAILJSPUBKEY);

  return (
    <AuthContext.Provider value={contextValue}>
        <Router>
            <Nav cart={cart}  />
            <Cart cart={cart} setCart={setCart} />
            <CookiesDisplay />
            <Switch>
                <Route path="/menu" component={MenuPage} />
                <Route path="/pizza/:slug" component={PizzaPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/closed" component={ClosedPage} />
                <Route path="/cgu" component={CguPage} />
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
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </AuthContext.Provider>
  )
}

export default App;