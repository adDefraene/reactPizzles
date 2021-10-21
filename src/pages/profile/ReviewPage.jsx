import React from 'react';
import {Link} from 'react-router-dom'

const ReviewPage = () => {
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
                        </div>
                    </div>
                    <div className="p col-12 my-2 pizzles-review-title text-center mt-5 mb-2">Votre évaluation de cette commande</div>
                    <div className="col-10 offset-1 pizzles-review-form my-3">
                        <form action="#" className="row">
                            <div className="col-12 mb-5">
                                <label for="reviewComment" className="form-label">Votre commentaire</label>
                                <textarea required name="reviewComment" maxLength="120" className="form-control" id="reviewComment" style={{resize:"none"}} rows="3" placeholder="Écrivez vos impressions concernant cette commande"></textarea>
                                <span id="reviewCommentCharacter">120</span>
                            </div>
                            <label for="reviewComment" className="form-label">Vos notes</label>
                            <div className="col-12 col-lg-4 mt-3 mb-5">
                                <div className="text-center stars-text mb-3">SERVICE</div>
                                <div className="stars">
                                    <input type="radio" className="fas" name="reviewService" value="10" />
                                    <input type="radio"  className="fas" name="reviewService" value="9" />
                                    <input type="radio"  className="fas" name="reviewService" value="8" />
                                    <input type="radio"  className="fas" name="reviewService" value="7" />
                                    <input type="radio"  className="fas" name="reviewService" value="6" />
                                    <input type="radio"  className="fas" name="reviewService" value="5" />
                                    <input type="radio"  className="fas" name="reviewService" value="4" />
                                    <input type="radio"  className="fas" name="reviewService" value="3" />
                                    <input type="radio"  className="fas" name="reviewService" value="2" />
                                    <input type="radio"  className="fas" required name="reviewService" value="1" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mt-3 mb-5">
                                <div className="text-center stars-text mb-3">QUALITÉ</div>
                                <div className="stars">
                                    <input type="radio" className="fas" name="reviewQuality" value="10" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="9" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="8" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="7" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="6" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="5" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="4" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="3" />
                                    <input type="radio"  className="fas" name="reviewQuality" value="2" />
                                    <input type="radio"  className="fas" required name="reviewQuality" value="1" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mt-3 mb-5">
                                <div className="text-center stars-text mb-3">PONCTUALITÉ</div>
                                <div className="stars">
                                    <input type="radio" className="fas" name="reviewPunctuality" value="10" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="9" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="8" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="7" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="6" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="5" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="4" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="3" />
                                    <input type="radio"  className="fas" name="reviewPunctuality" value="2" />
                                    <input type="radio"  className="fas" required name="reviewPunctuality" value="1" />
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