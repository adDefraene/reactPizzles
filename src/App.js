import React, {useState}  from 'react';
// COMPONENTS
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Nav from './components/main/Nav';
import Cart from './components/main/Cart';
import Footer from './components/main/Footer';
import PrivateRoute from './components/PrivateRoute';
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

const App = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated)
  const [cart, setCart] = useState({});


  if(isAuthenticated){
      setCart()  
  }
  const contextValue = {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: setIsAuthenticated
  }

  return (
    <AuthContext.Provider value={contextValue}>
        <Router>
            <Nav />
            <Cart cart={cart} />
            <Switch>
                <Route path="/menu" component={MenuPage} />
                <Route path="/pizza/:slug" component={PizzaPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                <PrivateRoute path="/profile/review" component={ReviewPage} />
                <PrivateRoute path="/profile/password-update" component={PasswordUpdatePage} />
                <PrivateRoute path="/addpizza/:slug" component={AddPizzaPage} />
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
