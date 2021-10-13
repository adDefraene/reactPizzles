import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import ContactPage from './ContactPage';
import DeliveryPage from './DeliveryPage';
import HourPage from './HourPage';
import LoginPage from './LoginPage';
import PasswordUpdatePage from './PasswordUpdatePage';
import PizzaPage from './PizzaPage';
import AddPizzaPage from './AddPizzaPage';
import RegisterPage from './RegisterPage';
import SummaryPage from './SummaryPage';
import ReviewPage from './ReviewPage';
import ProfilePage from './ProfilePage';

const Root = () => {
    return ( 
        
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={MenuPage} />
            <Route exact path="/pizza" component={PizzaPage} />
            <Route exact path="/addpizza" component={AddPizzaPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/profile/review" component={ReviewPage} />
            <Route exact path="/profile/password-update" component={PasswordUpdatePage} />
            <Route exact path="/delivery" component={DeliveryPage} />
            <Route exact path="/hour" component={HourPage} />
            <Route exact path="/summary" component={SummaryPage} />
        </Switch>
    </Router>
     );
}
 
export default Root;