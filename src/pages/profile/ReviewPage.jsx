import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import ReviewsStars from '../../components/reviews/ReviewsStars';
import Moment from 'react-moment';
import ordersAPI from '../../services/ordersAPI';
import AuthAPI from '../../services/authAPI';
import reviewsAPI from '../../services/reviewsAPI';

const ReviewPage = (props) => {

    const orderId = props.match.params.id

    const [review, setReview] = useState({
        order: "",
        review:"",
        starsQuality:"",
        starsService:"",
        starsPunctuality:""
    })
    
    const [errors, setErrors] = useState({
        order: "",
        review:"",
        starsQuality:"",
        starsService:"",
        starsPunctuality:""
    })
    
    const [reviewCharacterCount, setReviewCharacterCount] = useState("")

    const [currentOrder, setCurrentOrder] = useState({
        id: "",
        state: "",
        review: {
            review:"",
            starsQuality:"",
            starsService:"",
            starsPunctuality:"",
            averageRating:""
        },
        orderItems: [],
        date: "",
        ifDelivered: "",
        total: ""
    })

    const fetchCurrentOrder = async idOrder => {
        try{
            AuthAPI.setup()
            const data = await ordersAPI.findOne(idOrder)
            setCurrentOrder(data)

        }catch(error){
            console.error(error.response)
        }
    }

    useEffect(()=>{
        fetchCurrentOrder(orderId)
        setReviewCharacterCount(120)
    },[orderId])

    
    const checkIfAlreadyReviewed = (order) => {
        if(order.review !== null){
            if(order.review.review){
                props.history.replace("/profile")
                return false
            }
        }
    }

    const handleChange = (e) => {
        const value = e.currentTarget.value
        const name = e.currentTarget.name 
        setReview({...review, [name]:value})
        if(name === "review"){
            setReviewCharacterCount(120 - value.length)
        }
        //setReviewCharacterCount({...review.review.length()})
    }

    const handleSubmit = async event => {
        event.preventDefault()

        const apiErrors = {}

        try{
            await reviewsAPI.create(orderId, review)
            setErrors({})
            props.history.replace("/profile")

        }catch (response){
            const {violations} = response.data
            if(violations){
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message
                })
                setErrors(apiErrors)
            }
        }

    }

    checkIfAlreadyReviewed(currentOrder)

    return ( 
            <>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12 col-lg-3">
                <Link to="/profile" className="pizzles-btn mb-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour au profil</Link>
            </div>
            <div className="col-12 col-lg-6 mb-5">
                <h2 className="pizzles-title text-center mb-4 mx-auto">Faire une évaluation</h2>
            </div>
            <div className="col-12 pizzles-review-formBox my-3 p-3">
                <div className="row">
                    <div className="col-12 px-5">
                        <div className="row pizzles-summaryOrder-box p-3">
                            <div className="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #{currentOrder.id} du <span>
                            <Moment format="DD-MM-YYYY">{currentOrder.date}</Moment></span></div>
                            {currentOrder.orderItems.map(orderItem => (
                            <div className="col-12 pizzles-summaryOrder-items my-2 px-4">
                                {orderItem.itemPizza.type === "POTM" ? "Pizza du mois" : orderItem.itemPizza.name } 
                                
                                {orderItem.supIngredients.map(supIngredient => (+ {supIngredient}))}
                            </div>
                            ))}
                            <div className="col-12 col-md-6 my-4">
                                <div className="pizzles-summaryOrder-delivery px-4">
                                    {(currentOrder.ifDelivered ? "Livré chez vous à " : "Prête au comptoir à ")}
                                    <Moment format="HH:mm">{currentOrder.date}</Moment>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-4">
                                <div className="pizzles-summaryOrder-total px-4">
                                    TOTAL : {currentOrder.total.toLocaleString()} €
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p col-12 my-2 pizzles-review-title text-center mt-5 mb-2">Votre évaluation de cette commande</div>
                    <div className="col-10 offset-1 pizzles-review-form my-3">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="col-12 mb-5">
                                <label htmlFor="reviewComment" className="form-label">Votre commentaire</label>
                                <textarea onChange={handleChange} required name="review" maxLength="120" className="form-control" id="reviewComment" style={{resize:"none"}} rows="3" placeholder="Écrivez vos impressions concernant cette commande"></textarea>
                                <span id="reviewCommentCharacter">{reviewCharacterCount} caractères restants</span>
                            </div>
                            <label for="reviewComment" className="form-label">Vos notes</label>
                            <div className="col-12 col-lg-4 mt-3 mb-5">
                                <div className="text-center stars-text mb-3">SERVICE</div>
                                <div className="stars">
                                    <ReviewsStars
                                        method={handleChange}
                                        name="starsService"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mt-3 mb-5">
                                <div className="text-center stars-text mb-3">QUALITÉ</div>
                                <div className="stars">
                                    <ReviewsStars
                                        method={handleChange}
                                        name="starsQuality"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mt-3 mb-5">
                                <div className="text-center stars-text mb-3">PONCTUALITÉ</div>
                                <div className="stars">
                                    <ReviewsStars
                                        method={handleChange}
                                        name="starsPunctuality"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="pizzles-btn pizzles-btn-yellow mt-5">Ajouter l'évaluation<i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
     );
}
 
export default ReviewPage;