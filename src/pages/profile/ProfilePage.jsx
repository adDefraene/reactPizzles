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

const ProfilePage = (props) => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    
    const handleLogout = () => {
        authAPI.logout()
        setIsAuthenticated(false)
        props.history.push("/login")
    }
    
    const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))
    
    const [userOrdersDone, setUserOrdersDone] = useState([])
    
    const fetchUserOrdersDone = async (userId) => {
        try {
            authAPI.setup()
            const data = await ordersAPI.findDone(userId)
            setUserOrdersDone(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

    const [currentUser, setCurrentUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
    })

    const fetchUserInfos = async (userId) => {
        try {
            authAPI.setup()
            const data = await usersAPI.get(userId)
            setCurrentUser(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }
    
    const [errors, setErrors] = useState({
        email: "",
        firstName : "",
        lastName : "",
        address: ""
    })
    
    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setCurrentUser({...currentUser, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const apiErrors = {}
        try{
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

    useEffect(() => {
        if(isAuthenticated){
            fetchUserOrdersDone(userInfosJWT.id)
            fetchUserInfos(userInfosJWT.id)
        }
    }, [isAuthenticated,userInfosJWT.id])



    return ( 
<>
    <div className="container pizzles-first-container">
        <h3 className="pizzles-end-title text-center mx-auto my-3">Bonjour {currentUser.firstName} !</h3>
        <h3 className="pizzles-end-title text-center mx-auto my-3">Bienvenue sur votre profil</h3>
        <button onClick={handleLogout} className="pizzles-btn pizzles-btn-disconnect mx-auto my-5">Me déconnecter<i className="fas fa-power-off"></i></button>
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
            <div className="tab-pane fade" role="tabpanel" id="userReviews" aria-labelledby="userReviews-tab">
                <h2 className="pizzles-title text-center mx-auto my-5">Mes évaluations</h2>
                <div className="row">
                    {userOrdersDone.map(orderDone => (
                        (orderDone.review !== null ? <ProfileReviewDone key={`Review_${orderDone.id}`} order={orderDone} /> : <ProfileReviewToDo key={`Review_${orderDone.id}`} order={orderDone} /> )
                    ))}
                </div>
            </div>
            <div className="tab-pane fade" role="tabpanel" id="userInformations" aria-labelledby="userInformations-tab">
                <h2 className="pizzles-title text-center mx-auto my-5">Mes informations</h2>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 pizzles-register-box my-3 py-4 px-5">
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
                    <Link to="/profile/password-update" className="pizzles-btn pizzles-btn-white mx-auto mt-5">Je souhaite modifier mon mot de passe<i className="fas fa-edit"></i></Link>
                </div>
            </div>
        </div>
    </div>
</>
     );
}
 
export default ProfilePage;