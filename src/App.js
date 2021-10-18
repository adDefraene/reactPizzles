import React, {useState, useEffects}  from 'react';
import { BrowserRouter as Router, HashRouter,  Route, Switch } from 'react-router-dom';
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

import './App.css';

function App() {

  const [cart, setCart] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated)

  const contextValue = {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: setIsAuthenticated
  }



  return (
    <div className="App">
      <AuthContext.Provider value={contextValue}>
          <HashRouter>
              <Router>
                  <Nav />
                  <Cart />
                  <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route exact path="/menu" component={MenuPage} />
                      <Route exact path="/pizza" component={PizzaPage} />
                      <Route exact path="/contact" component={ContactPage} />
                      <Route exact path="/register" component={RegisterPage} />
                      <Route exact path="/login" component={LoginPage} />
                      <PrivateRoute exact path="/profile" component={ProfilePage} />
                      <PrivateRoute exact path="/profile/review" component={ReviewPage} />
                      <PrivateRoute exact path="/profile/password-update" component={PasswordUpdatePage} />
                      <PrivateRoute exact path="/addpizza" component={AddPizzaPage} />
                      <PrivateRoute exact path="/delivery" component={DeliveryPage} />
                      <PrivateRoute exact path="/hour" component={HourPage} />
                      <PrivateRoute exact path="/summary" component={SummaryPage} />
                  </Switch>
                  <Footer />
              </Router>
          </HashRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
