import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';
import authAPI from "../../services/authAPI"
import jwtDecode from 'jwt-decode';
import ordersAPI from '../../services/ordersAPI';
import Moment from 'react-moment';
import ProfileReviewDone from '../../components/reviews/ProfileReviewDone';
import ProfileReviewToDo from '../../components/reviews/ProfileReviewToDo';
import Field from '../../components/form/Field';
import usersAPI from '../../services/usersAPI';

/**
 * Page of the user's profile
 * @param props 
 * @returns html
 */
const ProfilePage = (props) => {

    // Var that retrives if the user is authenticated
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    
    // Method that handles the logout of the user
    const handleLogout = () => {
        authAPI.logout()
        setIsAuthenticated(false)
        props.history.push("/login")
    }
    
    // Var that contains the decoded information contained in the JWT token stored
    const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))
    
    // Var that contains the orders of the users that are already done
    const [userOrdersDone, setUserOrdersDone] = useState([])
    
    // Fetches the done orders of the user
    const fetchUserOrdersDone = async (userId) => {
        try {
            // Give the Bearer token
            authAPI.setup()
            const data = await ordersAPI.findDone(userId)
            setUserOrdersDone(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

    // Var that contains the current user's infos
    const [currentUser, setCurrentUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
    })

    // Methods that retrieves the informations of the ucrrent user
    const fetchUserInfos = async (userId) => {
        try {
            // Gives the Bearer token
            authAPI.setup()
            const data = await usersAPI.get(userId)
            setCurrentUser(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }
    
    // Vars that sets the errors of the form that updates the user's informations
    const [errors, setErrors] = useState({
        email: "",
        firstName : "",
        lastName : "",
        address: ""
    })
    
    // Method that handles the changes in the inputs of the form that updates the user's informations
    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setCurrentUser({...currentUser, [name]: value})
    }

    // Method that handles the submit of the form  that updates the user's informations
    const handleSubmit = async event => {
        event.preventDefault()
        const apiErrors = {}
        try{
            // Gives the Bearer token
            authAPI.setup()
            usersAPI.patch(userInfosJWT.id, currentUser)
            console.log("bbb")
            setErrors({})

        }catch(response){
            const {violations} = response.data
            if(violations){
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message
                })
                setErrors(apiErrors)
            }
        }

    }

    // On load, and if the user is authenticated, fetches all the user's infos
    useEffect(() => {
        if(isAuthenticated){
            fetchUserInfos(userInfosJWT.id)
            fetchUserOrdersDone(currentUser.id)
        }
    }, [isAuthenticated,userInfosJWT.id, currentUser.id])



    return ( 
<>
    <div className="container pizzles-first-container">
    {/* WELCOME */}
        <h3 className="pizzles-end-title text-center mx-auto my-3">Bonjour {currentUser.firstName} !</h3>
        <h3 className="pizzles-end-title text-center mx-auto my-3">Bienvenue sur votre profil</h3>
        <button onClick={handleLogout} className="pizzles-btn pizzles-btn-disconnect mx-auto my-5">Me déconnecter<i className="fas fa-power-off"></i></button>
    {/* PROFILE NAV */}
        <ul className="nav nav-tabs nav-fill flex-column flex-sm-row justify-content-center mt-5" id="myProfileMenu" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" type="button" id="lastOrders-tab" data-bs-toggle="tab" data-bs-target="#lastOrders" role="tab" aria-controls="latestOrders" aria-selected="true">Mes commandes en cours<i className="fas fa-clipboard-check"></i></button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" type="button" id="olderOrders-tab" data-bs-toggle="tab" data-bs-target="#olderOrders" role="tab" aria-controls="olderOrders" aria-selected="false">Mes anciennes commandes<i className="fas fa-clipboard-list"></i></button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" type="button" id="userReviews-tab" data-bs-toggle="tab" data-bs-target="#userReviews" role="tab" aria-controls="userReviews" aria-selected="false">Mes évaluations<i className="fas fa-tasks"></i></button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" type="button" id="userInformations-tab" data-bs-toggle="tab" data-bs-target="#userInformations" role="tab" aria-controls="userInformations" aria-selected="false">Mes informations<i className="fas fa-user-tag"></i></button>
            </li>
        </ul>
        <div className="tab-content">
        {/* CURRENT ORDER TAB */}
            <div className="tab-pane fade show active" role="tabpanel" id="lastOrders" aria-labelledby="lastOrders-tab">
                <div className="col-12">
                    <h2 className="pizzles-title text-center mx-auto my-5">Mes commandes en cours</h2>
                    <div className="row">
                        <div className="col-12">
                            <div className="row pizzles-summaryOrder-box p-3">
                                <div className="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #00194 - 31 février 2021</div>
                                <div className="col-12 pizzles-summaryOrder-items my-2 px-4">
                                    Margherita + Aucun ingrédient supplémentaires
                                </div>
                                <div className="col-12 pizzles-summaryOrder-items my-2 px-4">
                                    Margherita + Poivron + Pepperonnis
                                </div>
                                <div className="col-12 col-md-6 my-4">
                                    <div className="pizzles-summaryOrder-delivery px-4">
                                        Livré chez vous à 19 H 30
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 my-4">
                                    <div className="pizzles-summaryOrder-total px-4">
                                        TOTAL : 27,50 €
                                    </div>
                                </div>
                                <p className="col-12 text-center pizzles-summaryOrder-state my-3">Commande en préparation !</p>
                                <div className="col-12 pizzles-summaryOrder-evolution my-2 px-5">
                                    <div className="pizzles-summaryOrder-evolution-ball pizzles-evolution-done"></div>
                                    <div className="pizzles-summaryOrder-evolution-line pizzles-evolution-done"></div>
                                    <div className="pizzles-summaryOrder-evolution-ball pizzles-evolution-done"></div>
                                    <div className="pizzles-summaryOrder-evolution-line"></div>
                                    <div className="pizzles-summaryOrder-evolution-ball"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* OLDERS ORDERS TAB */}
            <div className="tab-pane fade" role="tabpanel" id="olderOrders" aria-labelledby="olderOrders-tab">
                <h2 className="pizzles-title text-center mx-auto my-5">Mes anciennes commandes</h2>
                <div className="row">
                    {userOrdersDone.map(orderDone => (
                        <div className="col-12 col-md-10 offset-md-1 my-3">
                            <div className="row pizzles-summaryOrder-box p-3">
                                <div className="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #{orderDone.id} du <span>
                            <Moment format="DD-MM-YYYY">{orderDone.date}</Moment></span></div>
                                {orderDone.orderItems.map(orderItem => (
                                <div className="col-12 pizzles-summaryOrder-items my-2 px-4">
                                    {orderItem.itemPizza.type === "POTM" ? "Pizza du mois" : orderItem.itemPizza.name } 
                                    
                                    {orderItem.supIngredients.map(supIngredient => (+ {supIngredient}))}
                                </div>
                                ))}
                                <div className="col-12 col-md-6 my-4">
                                    <div className="pizzles-summaryOrder-delivery px-4">
                                        {(orderDone.ifDelivered ? "Livré chez vous à " : "Prête au comptoir à ")}
                                        <Moment format="HH:mm">{orderDone.date}</Moment>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 my-4">
                                    <div className="pizzles-summaryOrder-total px-4">
                                        TOTAL : {orderDone.total.toLocaleString()} €
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        {/* REVIEWS TAB */}
            <div className="tab-pane fade" role="tabpanel" id="userReviews" aria-labelledby="userReviews-tab">
                <h2 className="pizzles-title text-center mx-auto my-5">Mes évaluations</h2>
                <div className="row">
                    {userOrdersDone.map(orderDone => (
                        (orderDone.review !== null ? <ProfileReviewDone key={`Review_${orderDone.id}`} order={orderDone} /> : <ProfileReviewToDo key={`Review_${orderDone.id}`} order={orderDone} /> )
                    ))}
                </div>
            </div>
        {/* UPDATE USER'S INFOS TAB */}
            <div className="tab-pane fade" role="tabpanel" id="userInformations" aria-labelledby="userInformations-tab">
                <h2 className="pizzles-title text-center mx-auto my-5">Mes informations</h2>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 pizzles-register-box my-3 py-4 px-5">
                    {/* UPDATE FORM */}
                        <form onSubmit={handleSubmit} className="row">
                            <div className="col-12 col-md-6">
                                <Field
                                    label="Mon prénom"
                                    type="text"
                                    name="firstName"
                                    value={currentUser.firstName}
                                    onChange={handleChange}
                                    required={true}
                                    errors={errors.firstName}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Field
                                    label="Mon nom"
                                    type="text"
                                    name="lastName"
                                    value={currentUser.lastName}
                                    onChange={handleChange}
                                    required={true}
                                    errors={errors.lastName}
                                />
                            </div>
                            <div className="col-12">
                                <Field
                                    label="Mon adresse mail"
                                    type="mail"
                                    name="email"
                                    value={currentUser.email}
                                    onChange={handleChange}
                                    required={true}
                                    errors={errors.email}
                                />
                            </div>
                            <div className="col-12">
                                <Field
                                    label="Mon adresse de livraison"
                                    type="text"
                                    name="address"
                                    value={currentUser.address}
                                    onChange={handleChange}
                                    required={true}
                                    errors={errors.address}
                                />
                            </div>
                            <button type="submit" className="pizzles-btn pizzles-btn-yellow">Modifier mes données<i className="fas fa-user-edit"></i></button>
                        </form>
                    </div>
                    <br />
                {/* PASSWORD UPDATE LINK */}
                    <Link to="/profile/password-update" className="pizzles-btn pizzles-btn-white mx-auto mt-5">Je souhaite modifier mon mot de passe<i className="fas fa-edit"></i></Link>
                </div>
            </div>
        </div>
    </div>
</>
     );
}
 
export default ProfilePage;